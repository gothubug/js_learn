function sum(var num)
{
    if (num === 1) 
    {
        return 1;
    }
    return sum(num-1) + num;
}
