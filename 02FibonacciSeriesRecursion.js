//time complexity : 0(2^n)

function fib(num)
{
    if(num<=1)
    {
        return num;
    }

    return fib(num-1)+fib(num-2);
        
}

let num = 5;
for(let i =0;i<num;i++)
{
    console.log(fib(i));
}