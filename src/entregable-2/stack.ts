class Stack <T> {
    private _size: number = 0;
    protected items: Array<T> = [];

    public get size(): number {
        return this._size;
    };

    public push(item:T): void {
        this.items.push(item);
        this._size++;

    };
    public pop(): void {
      this.items.pop();
      this._size--;

    };
};

class UniqueStack <T> extends Stack <T> {
    public push(item: T): void {
        if(!this.items.includes(item)){
            super.push(item);
        }else{
            console.warn("El elemento ya se encuentra en la lista");
        };  
    };
};

