//solution 2
function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
