class Rat {
    //arr = [];
    constructor(name){
        this.name = name;
        this.arr = [];

    };
    unite(someRat){
        if (someRat.constructor === Rat){
            this.arr.push(someRat.name);
        }
    }
    getRats(){
        return this.arr;
    }
    toString(){
        let result = '';
        for (let rat of this.uniteRats) {
            result += `##${rat.name}\n`;
        }
        return result;
    }
}

let test = new Rat('Pesho');
test.unit(new Rat('Gosho'));
test.unit('FakeRat');
console.log(test.toString());