class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
        
    }
    getRoot() {
        if(this.leaves.length === 0) return null;
        if(this.leaves.length === 1) return this.leaves[0];
        return this.newLayer(this.leaves);
    }

    newLayer(nodes){
        //return the root if there is one node only
        if(nodes.length === 1) return nodes[0];

        // build new layer of nodes
        const newNodes = [];

        // concat nodes in pairs
        for(let i = 0; i < nodes.length; i+= 2){
            let left = nodes[i];
            let right = nodes[i+1];

            if(right !== undefined) {
                newNodes.push(this.concat(left, right));
            } else {
                newNodes.push(left);
            }
        }
        // recurse on the new layer
        return this.newLayer(newNodes);
    }

    getProof(index, layers = this.leaves, proof = []){
        if(layers.length === 1) return proof;
        const newLayers = [];
        const newIndex = Math.floor(index / 2);
        
        for(let i = 0; i < layers.length; i+= 2){
            let left = layers[i];
            let right = layers[i+1];
            
            if(right === undefined) {
                newLayers.push(left);
            } else {
                newLayers.push(this.concat(left, right));
                
                // If current index is in this pair, add sibling to proof
                if(i === index || i + 1 === index) {
                    const isLeft = index % 2 === 0;
                    proof.push({
                        data: isLeft ? right : left,
                        left: !isLeft
                    });
                }
            }
        }
        return this.getProof(newIndex, newLayers, proof);
    }

}

export default MerkleTree;
