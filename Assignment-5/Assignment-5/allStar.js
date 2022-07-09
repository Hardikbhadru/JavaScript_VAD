function allStar(str){
  if(str.length < 2)
  	return str;
  return str.charAt(0) + "*" + allStar(str.substring(1));
}