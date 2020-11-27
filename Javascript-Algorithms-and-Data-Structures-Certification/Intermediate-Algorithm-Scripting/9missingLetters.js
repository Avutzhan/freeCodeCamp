function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);

        /* if code of current character is not equal to first character + no of iteration
            hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {
            /* if current character has escaped one character find previous char and return */
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

fearNotLetter("abce");

function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var len = str.length;
    var start = alphabet.indexOf(str[0]);

    for(var i = start; i < start + len; i++){
        if(!str.includes(alphabet[i])){
            return alphabet[i];
        }
    }
    return undefined;
}

fearNotLetter("abce");