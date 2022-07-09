function nestParen(str){
  let len = str.length;
	if(len == 0)
		return true;
	if(str.charAt(0) == '(' && str.charAt(len - 1) == ')')
			return nestParen(str.substring(1, len - 1));
	return false;
}