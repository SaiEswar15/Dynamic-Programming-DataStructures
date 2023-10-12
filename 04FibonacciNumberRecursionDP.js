//the time complexity is 0(n) because we are traversing only one side of the branch
//space complexity is 0(n) because we are using object or hashmap to store n items.

let obj = {};

function fib(num)
{
    if(num in obj)
    {
        return obj[num];
    }

    if(num<=1)
    {
        return num;
    }
    
    obj[num] = fib(num-1) + fib(num-2);
    return obj[num];
}

console.log(fib(10));


//we can solve this by using dynamic programming
//how ??

//in the recursion it is repeating the same process twice 
//in the first branch fib(9)==>passes till fib(0)
//and when in the second branch when it starts from fib(8) which is already done by branch 1
//what if we memorize the first branch so that we need not go deep executing the second branch

//this process is called as memoization
//from the bottom when we see the fib(2) we store it in an objectso that we can use it again
//similarly we store fib(3), fib(4), fib(5), fib(6), fib(7), fib(8), fib(9) in the first branch
//now in the second branch when we want fib(8) we already have it stored during first branch
//so we use it.

//use object as hashmap

// let obj = {};

// obj[1] = 2;
// obj[4] = 3;

// console.log(obj);
// console.log(obj[1]);
