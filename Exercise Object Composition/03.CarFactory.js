function solve(order) {

    let model = order.model;
    let power = order.power;
    let color = order.color;
    let carriage = order.carriage;
    let wheelsize = order.wheelsize;

    class Car {
        constructor(model, power, color, carriage, wheelsize) {
            this.model = model;
            this.engine = {};

            if (power <= 90) {
                this.engine = {
                    power: 90,
                    volume: 1800
                }
            } else if (power > 90 && power < 120) {
                this.engine = {
                    power: 120,
                    volume: 2400
                }
            } else if (power >= 120) {
                this.engine = {
                    power: 200,
                    volume: 3500
                }
            }

            this.carriage = {
                type: carriage,
                color: color
            };

            this.wheels = [];
            if (wheelsize % 2 === 1) {
                this.wheels.push(wheelsize);
                this.wheels.push(wheelsize);
                this.wheels.push(wheelsize);
                this.wheels.push(wheelsize);
            } else {
                this.wheels.push(wheelsize - 1);
                this.wheels.push(wheelsize - 1);
                this.wheels.push(wheelsize - 1);
                this.wheels.push(wheelsize - 1);
            }
        }
    }
    return new Car(model, power, color, carriage, wheelsize);
}

console.log(solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));