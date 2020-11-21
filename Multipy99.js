function multipy()
{
    for (var i=1; i<=9; i++)
    {
        var result = "";
        for (var j=1; j<=i; j++)
        {
            result += j+"×"+i+"="+(j*i)+" ";
        }
        console.log(result);
    }
}
