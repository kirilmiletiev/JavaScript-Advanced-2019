function solve(arr) {
    let rectangles = [];
    for (let rectangleAsArr of arr) {
        let rectangle = {
            width: Number(rectangleAsArr[0]),
            height: Number(rectangleAsArr[1]),
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (otherRectangle) {
                if (this.area() === otherRectangle.area()) {
                    return otherRectangle.width - this.width;
                }

                return otherRectangle.area() - this.area();
            }
        };

        rectangles.push(rectangle);
    }

    return rectangles.sort((a, b) => a.compareTo(b));

}
solve([[10,5],[5,12]]);