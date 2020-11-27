function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return "";
    }
    var result = "";
    for (var i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

repeatStringNumTimes("abc", 3);

// recursion
function repeatStringNumTimes(str, num) {
    //debug
    if (num < 1) {
        return "";
    }
    //base case
    if (num === 1) {
        return str;
    }
    //recursive case
    return str + repeatStringNumTimes(str, num -1);
}

repeatStringNumTimes("abc", 3);