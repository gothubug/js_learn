function sort(nums)  {
    for (i = 0; i < nums.length; i++) {
        for (j = i; j < nums.length; j++) {
            if (nums[j] <= nums[i]) {
                var tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
    }
    return nums;
}
