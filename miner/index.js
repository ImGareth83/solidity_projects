import SHA256 from 'crypto-js/sha256.js';

export const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
export const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

export function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction);
}

export function mine() {
    // TODO: mine a block
    const transactions = mempool.splice(0, MAX_TRANSACTIONS);
    const block = {
        id: blocks.length,
        transactions,
        nonce: 0
    };

    let hash, int;
    while (true){
        const blockString = JSON.stringify(block);
        hash = SHA256(blockString);
        int = BigInt(`0x${hash}`);
        if (int< TARGET_DIFFICULTY){
            break;
        } 
        
        block.nonce++;
    }

    block.hash = hash;
    blocks.push(block);
    return hash;
}

export { blocks, mempool };