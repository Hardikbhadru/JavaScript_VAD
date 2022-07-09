function starBit(str){
  let len = str.length;
	if(str.charAt(0) != '-')
	{
		if(str.charAt(len - 1) != '*')
			return starBit(str.substring(1, len -1));
		return starBit(str.substring(1));
	}
	if(str.charAt(len - 1) != '*')
		return starBit(str.substring(0, len - 1));
	return str;
}