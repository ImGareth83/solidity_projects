# Web3 Concepts

This repository contains focused, implementation-level explorations of
core blockchain and Web3 concepts. The work here prioritises first-principles
understanding of how blockchain systems function under the hood, rather than
framework-driven application development.

The projects are written in JavaScript using EVM-aligned cryptographic and
execution models, with an emphasis on correctness, testability, and clarity.

---
## Purpose

The goal of this repository is to internalise and demonstrate:
- how cryptographic primitives enable trustless systems
- how transactions are constructed, signed, and verified
- how blocks are formed, validated, and chained
- how tampering and invalid state transitions are detected

This is a **conceptual exploration repository**, not a production codebase.

---

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

### 4. Blockchain

A simple blockchain implementation demonstrating the core concepts of blockchain technology, including block creation, chain validation, and tampering detection.

**Features:**
- Block creation with data and previous hash linking
- Blockchain validation to ensure chain integrity
- SHA-256 hashing for block verification
- Detection of tampering with previous hashes or data
- Genesis block initialization

**Files:**
- `Block.js` - Block class with data and hash functionality
- `Blockchain.js` - Blockchain class with chain management and validation
- `validationTests.js` - Test suite for blockchain validation

**Usage:**
```bash
cd blockchain
npm install
npm test
```

### 5. UTXO

A UTXO (Unspent Transaction Output) model implementation demonstrating how Bitcoin-style transactions work. This simple JS project shows how transactions consume input UTXOs and create new output UTXOs, with validation and fee calculation.

**Features:**
- Transaction Output (TXO) representation with owner, amount, and spent status
- Transaction execution with input and output UTXO validation
- Prevention of double-spending by checking if UTXOs are already spent
- Automatic fee calculation as the difference between input and output amounts
- Support for multiple input and output UTXOs per transaction

**Files:**
- `TXO.js` - Transaction Output class representing unspent outputs
- `Transaction.js` - Transaction class for executing UTXO-based transfers
- `test.js` - Test suite for transaction execution and fee calculation

**Usage:**
```bash
cd utxo
npm install
npm test
```

### 6. Binary Search Tree

A binary search tree implementation demonstrating fundamental tree data structure concepts. This project shows how nodes are organized in a hierarchical structure with efficient insertion and search operations.

**Features:**
- Node class with data, left, and right child references
- Recursive node insertion maintaining binary search tree property
- Recursive search functionality to find nodes by value
- Tree structure with root node management
- Efficient O(log n) average case for insertion and search operations

**Files:**
- `Node.js` - Node class representing tree nodes with data and child references
- `Tree.js` - Tree class with recursive addNode and hasNode methods
- `test.js` - Test suite for tree operations and node insertion

**Usage:**
```bash
cd binary-search-tree
npm install
npm test
```

### 7. Simple Merkle Tree

A Merkle tree implementation demonstrating how cryptographic hash trees work. This project shows how multiple data items are combined into a single root hash through recursive pairing and concatenation, a fundamental concept in blockchain data structures.

**Features:**
- Recursive tree construction by pairing and concatenating nodes
- Flexible concatenation function for different hashing strategies
- Root hash generation from any number of leaves
- Handles base cases including single leaf and empty tree scenarios
- Automatic handling of odd-numbered nodes in layers (unpaired nodes are passed through)
- Efficient hierarchical hashing structure with recursive layer building

**Files:**
- `index.js` - MerkleTree class with recursive layer building and root generation
- `test.js` - Test suite covering various leaf configurations including odd and even numbers (1, 2, 3, 4, 5, 7, 8 leaves)

**Usage:**
```bash
cd simple-merkle-tree
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

