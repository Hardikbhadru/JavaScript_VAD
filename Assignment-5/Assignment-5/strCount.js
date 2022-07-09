function strCount(str, sub){
  let sLen = sub.length;
	if(str.length < sLen)
		return 0;
	if(str.substring(0, sLen) == sub)
		return 1 + strCount(str.substring(sLen), sub);
	return strCount(str.substring(1), sub);
}