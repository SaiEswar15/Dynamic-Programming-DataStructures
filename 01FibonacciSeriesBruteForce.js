//solve fibonacci series upto 10 
//time complexity : 0(n) times

function fib(num)
{
    let firstElement = 0;
    let secondElement = 0;
    for(let i =0;i<num;i++)
    {
        if(i<=1)
        {
            console.log(i);
            secondElement = firstElement;
            firstElement = i;
        }

        if(i>1)
        {
            let ans = firstElement + secondElement;
            console.log(ans);
            secondElement = firstElement;
            firstElement = ans;
        }
    }
}

fib(10);