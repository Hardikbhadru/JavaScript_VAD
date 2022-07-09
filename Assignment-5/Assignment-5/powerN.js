function powerN(base, n){
  if(n == 1)
		return base;
	return base*powerN(base, n - 1);
}