class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }

    decrease(num) {
        if ((this.innerLength - Number(num) < 0)) {
            this.innerLength = 0;
        } else {
            this.innerLength -= Number(num)
        }
    }

    increase(num) {
        this.innerLength += Number(num)
    }

    toString() {
        let result = '';
        if (this.innerString.length <= Number(this.innerLength)) {
            return this.innerString;
        } else if (this.innerString.length > Number(this.innerLength)) {
            for (let i = 0; i < Number(this.innerLength); i++) {
                result += this.innerString[i];
            }
            result += '...';
        }
        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...
test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
