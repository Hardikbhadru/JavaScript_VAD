function strDist(str, sub){
  let stLen = str.length;
	let sbLen = sub.length;
	if(stLen < sbLen)
		return 0;
	if(str.substring(0, sbLen) == sub)
	{
		if(str.substring(stLen - sbLen, stLen)==sub)
			return stLen;
		return strDist(str.substring(0, stLen - 1), sub);
	}
	return strDist(str.substring(1), sub);
}