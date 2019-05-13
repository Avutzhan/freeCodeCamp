function palindrome(str) {
  // Good luck!
  var lstr = str.toLowerCase(str);
  var filtered_str = lstr.replace(/\W|\_|\*|/gi,"");
  var reversed_fil_str = filtered_str.split("").reverse("").join("");
  
  if(filtered_str===reversed_fil_str){
    return true;
  }else{
    return false;
  }
  return true;
}



palindrome("eye");