# Machine SDK Local Development Workflow

This file describes the workflow to use whenever you change the local `machine-sdk` repo and want those changes to be picked up by `machine-bridge`.

## Current Setup

`machine-bridge` can resolve `@kuriousdesign/machine-sdk` from either:

- the local workspace repo: `file:../machine-sdk`
- a published npm version such as `^1.0.112`

The active source is controlled in `machine-bridge/.env`:

```dotenv
MACHINE_SDK_SOURCE=local
MACHINE_SDK_LOCAL_PATH=file:../machine-sdk
MACHINE_SDK_NPM_VERSION=^1.0.112
```

When `MACHINE_SDK_SOURCE=local`, the bridge should use this repo directly.

## Normal Workflow After Changing machine-sdk

If you edit code in `machine-sdk/src`, the normal workflow is:

1. Rebuild the SDK.
2. Restart `machine-bridge`.

Commands:

```bash
cd /opt/repos/machine-sdk
npm run build

cd /opt/repos/machine-bridge
npm run dev
```

This is the standard day-to-day path when the bridge is already configured for the local SDK.

## When To Run deps:install In machine-bridge

Sometimes rebuilding `machine-sdk` is not enough. In those cases, refresh the bridge dependencies too.

Use this when:

- the bridge still behaves like it has stale SDK code
- you changed SDK exports or package metadata
- you switched between local SDK and published npm SDK
- you want `package.json` and `node_modules` to be resynced from `machine-bridge/.env`

Commands:

```bash
cd /opt/repos/machine-bridge
npm run deps:install
npm run dev
```

`npm run deps:install` does two things:

1. syncs `@kuriousdesign/machine-sdk` in `machine-bridge/package.json`
2. runs `npm install`

## Switching machine-bridge Between Local And npm SDK

### Use local machine-sdk

In `machine-bridge/.env`:

```dotenv
MACHINE_SDK_SOURCE=local
```

Then run:

```bash
cd /opt/repos/machine-bridge
npm run deps:install
```

Shortcut:

```bash
cd /opt/repos/machine-bridge
npm run sdk:use-local && npm install
```

### Use published npm SDK

In `machine-bridge/.env`:

```dotenv
MACHINE_SDK_SOURCE=npm
MACHINE_SDK_NPM_VERSION=^1.0.112
```

Then run:

```bash
cd /opt/repos/machine-bridge
npm run deps:install
```

Shortcut:

```bash
cd /opt/repos/machine-bridge
npm run sdk:use-npm && npm install
```

## Practical Rule Of Thumb

Use this decision rule:

- changed only SDK source code: run `machine-sdk` build, then restart `machine-bridge`
- changed SDK exports or the bridge seems stale: run `machine-bridge` `npm run deps:install`, then restart
- changed from local SDK to npm SDK or back: update `machine-bridge/.env`, run `npm run deps:install`

## Publishing A New machine-sdk Version

If you want the bridge to consume a published version instead of the local repo:

1. Build and publish from `machine-sdk`
2. Update `MACHINE_SDK_NPM_VERSION` in `machine-bridge/.env`
3. Set `MACHINE_SDK_SOURCE=npm`
4. Run `npm run deps:install` in `machine-bridge`

Typical publish commands in this repo:

```bash
cd /opt/repos/machine-sdk
npm run build
npm version patch
npm publish
```

## Common Failure Pattern

If `machine-bridge` fails with missing exports, missing types, or APIs that clearly exist in local `machine-sdk`, the usual causes are:

- `machine-sdk` was edited but not rebuilt
- `machine-bridge` is still installed against an older npm version
- `machine-bridge/node_modules` was not refreshed after switching SDK source

The fix is usually:

```bash
cd /opt/repos/machine-sdk && npm run build
cd /opt/repos/machine-bridge && npm run deps:install
```

## Related Files

- `machine-sdk/package.json`
- `machine-bridge/package.json`
- `machine-bridge/.env`
- `machine-bridge/scripts/sync-sdk-dependency.js`
- `machine-bridge/README.md`

## Updating machine-ui-heroui-shadcn For Turbopack

`machine-ui-heroui-shadcn` uses Turbopack more reliably when the SDK package is copied into the UI repo instead of symlinked from `file:../machine-sdk`.

Use this workflow after changing SDK code that the UI needs:

```bash
cd /opt/repos/machine-sdk
npm run update-ui-repo

cd /opt/repos/machine-ui-heroui-shadcn
npm install
npm run dev
```

This copies the built SDK package into `machine-ui-heroui-shadcn/vendor/machine-sdk`, packs it to `machine-ui-heroui-shadcn/vendor/machine-sdk.tgz`, and lets the UI install from that tarball so npm places a real copied package in `node_modules` instead of a symlink.