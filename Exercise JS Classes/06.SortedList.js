class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    };

    add(element) {
        this.list.push(Number(element));
        this.size = this.size + 1;
        return this.list.sort((a, b) => a - b);
    };

    remove(index) {
        if (index >= 0 && index < this.list.length) {
            if (this.list[index] !== undefined) {
                this.list.sort((a, b) => a - b).splice(index, 1);
                this.size = this.size - 1;
            }
        }
        return this.list.sort((a, b) => a - b);
    };

    get(index) {
        if (index >= 0 && index < this.list.length) {
            if (this.list[index] !== undefined) {
                return this.list.sort((a, b) => a - b)[index];
            }
        }
    };

    size() {
        return this.size;
    };
}