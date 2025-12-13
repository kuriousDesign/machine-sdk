# adding new opcua tags
don't forget that tags need to start with lowercase


# npm install @kuriousdesign/machine-sdk
A shared SDK for data types and helper functions used in machine-related repositories.

# Publishing to npm
first, commit you git changes
npm login (if not already)
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
npm publish


# Installation
npm install @kuriousdesign/machine-sdk@latest

Usage
import { Machine, formatTimestamp, isMachineActive } from '@kuriousdesign/machine-sdk';

# npm registry codes for trusted publishers
50d6d0fc3dfbe9e405a3df45959751ac4efdec8eaf718e05d390ff5ee4ac28c8
d9e930bb97999f5b204a6f449e499906a936b57f18350ce4bc1ada267c9207c3
07345eb11da75e1e050ddb07e81914975e90533f015567ed524f40073dedf99e
3fb598a51fe5ead322e02a55755d19bb8790a8a886ed33c06efe020b479a27e2
82876e59bb316170f05a92ca16b86276ccd4e31d8b272c55d79cd537aebeb631