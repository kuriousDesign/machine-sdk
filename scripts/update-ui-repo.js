const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const sdkRoot = path.resolve(__dirname, '..');
const uiRepoRoot = path.resolve(sdkRoot, '../machine-ui-heroui-shadcn');
const vendorRoot = path.join(uiRepoRoot, 'vendor', 'machine-sdk');
const vendorTarballPath = path.join(uiRepoRoot, 'vendor', 'machine-sdk.tgz');
const distSource = path.join(sdkRoot, 'dist');
const stylesSource = path.join(sdkRoot, 'styles');

function ensureExists(targetPath, description) {
  if (!fs.existsSync(targetPath)) {
    throw new Error(`${description} not found: ${targetPath}`);
  }
}

function copyDirectory(source, destination) {
  fs.cpSync(source, destination, {
    recursive: true,
    force: true,
  });
}

function writeVendorPackageJson() {
  const sdkPackageJsonPath = path.join(sdkRoot, 'package.json');
  const sdkPackageJson = JSON.parse(fs.readFileSync(sdkPackageJsonPath, 'utf8'));

  const vendorPackageJson = {
    name: sdkPackageJson.name,
    version: sdkPackageJson.version,
    description: sdkPackageJson.description,
    main: sdkPackageJson.main,
    types: sdkPackageJson.types,
    engines: sdkPackageJson.engines,
    license: sdkPackageJson.license,
    author: sdkPackageJson.author,
    exports: sdkPackageJson.exports,
  };

  fs.writeFileSync(
    path.join(vendorRoot, 'package.json'),
    `${JSON.stringify(vendorPackageJson, null, 2)}\n`,
  );
}

function writeVendorReadme() {
  const content = [
    '# Vendored machine-sdk build staging',
    '',
    'This folder is generated from the workspace machine-sdk repo for local UI development.',
    'It is used to build vendor/machine-sdk.tgz, which the UI installs from.',
    'Do not edit files here directly.',
    '',
    'Refresh it with:',
    '',
    '```bash',
    'cd /opt/repos/machine-sdk',
    'npm run update-ui-repo',
    '```',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(vendorRoot, 'README.md'), content);
}

function packVendorPackage() {
  const packedFileName = process.platform === 'win32'
    ? execFileSync('cmd.exe', ['/d', '/s', '/c', 'npm pack --silent'], {
        cwd: vendorRoot,
        encoding: 'utf8',
      }).trim()
    : execFileSync('npm', ['pack', '--silent'], {
        cwd: vendorRoot,
        encoding: 'utf8',
      }).trim();

  const packedFilePath = path.join(vendorRoot, packedFileName);
  fs.rmSync(vendorTarballPath, { force: true });
  fs.renameSync(packedFilePath, vendorTarballPath);
}

function main() {
  ensureExists(uiRepoRoot, 'UI repo');
  ensureExists(distSource, 'SDK dist output');

  fs.mkdirSync(path.join(uiRepoRoot, 'vendor'), { recursive: true });
  fs.rmSync(vendorRoot, { recursive: true, force: true });
  fs.mkdirSync(vendorRoot, { recursive: true });

  copyDirectory(distSource, path.join(vendorRoot, 'dist'));

  if (fs.existsSync(stylesSource)) {
    copyDirectory(stylesSource, path.join(vendorRoot, 'styles'));
  }

  writeVendorPackageJson();
  writeVendorReadme();
  packVendorPackage();

  console.log(`Updated vendored SDK package at ${vendorRoot}`);
  console.log(`Packed tarball at ${vendorTarballPath}`);
  console.log('Next steps:');
  console.log(`1. cd ${uiRepoRoot}`);
  console.log('2. npm install');
  console.log('3. npm run dev');
}

main();