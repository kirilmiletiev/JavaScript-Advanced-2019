function solve() {
    let ingredient = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function (inputString) {
        let inputData = inputString.split(' ');
        let command = inputData[0];

        if (command === "restock") {
            let element = inputData[1];
            let quantity = Number(inputData[2]);
            ingredient[element] += quantity;
            return "Success";
        } else if (command === "report") {
            return `protein=${ingredient.protein} carbohydrate=${ingredient.carbohydrate} fat=${ingredient.fat} flavour=${ingredient.flavour}`;
        } else if (command === "prepare") {
            let selectedProduct = inputData[1];
            let selectedQuantity = Number(inputData[2]);
            let currentProductStats = products[selectedProduct];

            for (let element in currentProductStats) {
                if (currentProductStats.hasOwnProperty(element)) {
                    let quantity = currentProductStats[element];
                    if (ingredient[element] < quantity * selectedQuantity) {
                        return `Error: not enough ${element} in stock`;
                    }
                }
            }

            for (let element in currentProductStats) {
                if (currentProductStats.hasOwnProperty(element)) {
                    let quantity = currentProductStats[element];
                    ingredient[element] -= quantity * selectedQuantity;
                }
            }
            return "Success";
        }
    };
}