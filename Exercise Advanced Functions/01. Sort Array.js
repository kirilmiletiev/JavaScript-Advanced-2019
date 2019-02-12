///First Variant
function sortArrFirst(input, method ) {
    let result = [];
    if (method === 'asc'){
        result = input.sort(function(a, b){return a - b});
    }else{
        result = input.sort(function(a, b){return b - a});
    }
    return result;
}


//Second Variant
function sortArrSecond(arr, sortArg) {
    let sortObj = {
        asc: (arr) => arr.sort((a,b) => a - b ),
        desc: (arr) => arr.sort((a,b) => b - a)
    };
    let sorted = sortObj[sortArg];
    return sorted(arr);
}
