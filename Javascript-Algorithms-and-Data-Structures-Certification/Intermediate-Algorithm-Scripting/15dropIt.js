function dropElements(arr, func) {
    // drop them elements. must save in variable
    var times = arr.length;
    for (var i = 0; i < times; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
