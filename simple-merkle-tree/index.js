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

}

export default MerkleTree;
