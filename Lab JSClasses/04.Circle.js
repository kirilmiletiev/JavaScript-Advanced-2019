class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get diameter() {
        return this.radius * 2;
    }
}