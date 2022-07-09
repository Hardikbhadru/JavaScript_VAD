function sumDigits1(n){
  if(n < 10)
		return n;
	return parseInt(sumDigits1(n/10) + n%10);
}