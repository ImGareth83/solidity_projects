# Solidity Projects

This repository contains projects from my Alchemy Learning journey, focusing on Ethereum cryptography and blockchain development.

## Projects

### 1. Cryptography

Ethereum cryptography utilities for message hashing, signing, and key recovery.

**Features:**
- Message hashing using Keccak-256
- Message signing with private keys
- Key recovery from signatures
- Address generation from public keys

**Files:**
- `hashMessage.js` - Hash messages using Keccak-256
- `signMessage.js` - Sign messages with private keys
- `recoverKey.js` - Recover public keys from signatures
- `getAddress.js` - Generate Ethereum addresses from public keys
- `test.js` - Test suite for all utilities

**Usage:**
```bash
cd cryptography
npm install
npm test
```

### 2. Find Colours

A utility to find the original color from a hash value. Given a hash, it determines which color (from a predefined set) produced that hash.

**Features:**
- Hash color values using SHA-256
- Reverse lookup to find the original color from a hash
- Supports colors: red, green, blue, yellow, pink, orange

**Files:**
- `index.js` - Main function to find colors from hashes
- `test.js` - Test suite for color finding functionality

**Usage:**
```bash
cd find_colours
npm install
npm test
```

### 3. Miner

A simple blockchain miner implementation that demonstrates proof-of-work mining. It creates blocks by finding a nonce that produces a hash below a target difficulty.

**Features:**
- Transaction mempool management
- Proof-of-work mining with configurable difficulty
- Block creation with nonce finding
- Processes up to 10 transactions per block
- SHA-256 hashing for block validation

**Files:**
- `index.js` - Mining logic with mempool and block management
- `test.js` - Test suite for mining functionality

**Usage:**
```bash
cd miner
npm install
npm test
```

## Technologies

- **Node.js** - Runtime environment
- **ethereum-cryptography** - Cryptographic utilities for Ethereum
- **crypto-js** - Cryptographic library for hashing
- **Mocha** - Testing framework
- **Chai** - Assertion library

## Installation

Each project has its own dependencies. Navigate to the project directory and run:

```bash
npm install
```

## Testing

Run tests for each project:

```bash
npm test
```

## License

ISC

---

*These projects are part of my learning journey with Alchemy.*

