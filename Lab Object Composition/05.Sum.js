function solve() {
    let firstSelector, secondSelector, resultSelector;
    return {
        init:  function(selector1,selector2,resultSelectorAsStr){
            firstSelector = $(selector1);
            secondSelector = $(selector2);
            resultSelector = $(resultSelectorAsStr);
        },
        add: function () {
            let firstVal = Number(firstSelector.val());
            let secondVal = Number(secondSelector.val());
            resultSelector.val(firstVal + secondVal);
        },
        subtract: function () {
            let firstVal = Number(firstSelector.val());
            let secondVal = Number(secondSelector.val());
            resultSelector.val(firstVal - secondVal);
        }
    }
}