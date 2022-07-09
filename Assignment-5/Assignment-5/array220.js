function array220(nums, i){
  if(i >= nums.length - 1)
		return false;
	if(nums[i] * 10 == nums[i+1])
		return true;
	return array220(nums, i + 1);
}