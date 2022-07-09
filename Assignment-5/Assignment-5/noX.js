function noX(str){
  let ch;
  if(str == 0)
  	return str;
  ch = str.charAt(0);
  if(ch == 'x')
  	return noX(str.substring(1));
  return ch + noX(str.substring(1));
}