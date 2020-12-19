function solve()
{
    for(var i=1; i<100000; i++) {
        if(i%1==0&&i%2==1&&i%3==0&&i%4==1&&i%5==1&&i%6==3&&i%7==0&&i%8==1&&i%9==0)
        {
            console.log(i);
            break;
        }
    }
}
