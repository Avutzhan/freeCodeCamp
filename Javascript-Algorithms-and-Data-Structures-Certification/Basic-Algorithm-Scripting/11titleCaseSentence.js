//simple
function titleCase(str) {
    var arr = str.toLowerCase().split(" ");
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        var string = arr[i];
        var first = string[0];
        var newstring = string.replace(first, first.toUpperCase());
        results.push(newstring);
    }
    return results.join(" ");
}
//with map
titleCase("I'm a little tea pot");

function titleCase(str) {
    var arr = str.toLowerCase().split(" ");
    var result = arr.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return result.join(" ");
}

titleCase("I'm a little tea pot");
//with regular expressions
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

titleCase("I'm a little tea pot");