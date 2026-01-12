class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        let totalInputUTXO = 0;
        for (let i = 0; i < this.inputUTXOs.length; i++){
            if (this.inputUTXOs[i].spent){
                throw new Error(this.inputUTXOs[i]+" inputUTXO is spent");
            }
            totalInputUTXO += this.inputUTXOs[i].amount;
        }

        let totalOutInputUTXO = 0;
        for (let i = 0; i < this.outputUTXOs.length; i++) {
            if (this.outputUTXOs[i].spent) {
                throw new Error(this.outputUTXOs[i] + " outputUTXOs is spent");
            }
            totalOutInputUTXO += this.outputUTXOs[i].amount;
        } 

        if (totalInputUTXO < totalOutInputUTXO)
            throw new Error("inputUTXO is smaller than outputUTXOs");

        for (let i = 0; i < this.inputUTXOs.length; i++) {
            this.inputUTXOs[i].spent = true;
        }

        this.fee = totalInputUTXO - totalOutInputUTXO
        
    }
}

export default Transaction;