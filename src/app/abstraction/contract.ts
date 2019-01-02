export abstract class Contract {
    protected abstract getContractInstance(): any;

    get methods(): any {
        return this.getContractInstance().methods;
    }

    get options(): any {
        return this.getContractInstance().options;
    }
}
