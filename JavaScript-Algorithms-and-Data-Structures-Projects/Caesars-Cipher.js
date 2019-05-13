function rot13(encodedStr) { // LBH QVQ VG!
  var codeArr = encodedStr.split("");
  var decodedArr = [];
  
  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
  
  for(var i = 0; i<codeArr.length; i++) {
    if(alphabet.indexOf(codeArr[i])===-1) {
      decodedArr.push(codeArr[i]);
    } 
      else {
      for(var j = 0; j <alphabet.length;j++){
        if (codeArr[i] ===alphabet[j]){
          decodedArr.push(alphabet[j+13]);
        }
      }
    }
  }
  return decodedArr.join("");
}

// Change the inputs below to test
rot13("SERR");