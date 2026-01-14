class Tree {
    constructor() {
        this.root = null;
    }

    addNode(n){
        if(this.root === null){
            this.root = n;
            return;
        } 
        this.insertUnder(this.root,n);
    }

    insertUnder(parent, child){
        if(child.data < parent.data){

            if(parent.left !== null){
                this.insertUnder(parent.left,child);
            }
            else{
                parent.left = child;
            }
        }
        else{
            if(parent.right !== null){
                this.insertUnder(parent.right,child);
            }
            else{
                parent.right = child;
            }
        }
    }
    hasNode(n){
        return this.search(this.root,n);
    }

    search(node, n){
        if(node === null){
            return false;
        }

        if(node.data === n){
            return true;
        }

        if(n < node.data){
            return this.search(node.left,n);
        }
        else{
            return this.search(node.right,n);
        }
    }
}

export default Tree;
