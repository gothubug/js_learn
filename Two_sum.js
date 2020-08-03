function sum_two(var nums, var target)
{
    var i = 0;
    var j = nums.length - 1;
    for (;true;)
    {
        if (nums[i]+nums[j] == target)
        {
            return [nums[i], nums[j]];
        } 
        else if (nums[i]+nums[j] > target)
        {
            j--;
        }
        else if (nums[i]+nums[j] < target)
        {
            i++;
        }
        if (i >= j)
        {
            return;
        }
    }
    return;
}
