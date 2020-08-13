function fabonaci(var index) 
{
    if (index === 0) 
    {
        return 0;
    }
    if (index === 1 || index === 2) 
    {
        return 1;
    }
    return fabonaci(index-1) + fabonaci(index-2);
}
