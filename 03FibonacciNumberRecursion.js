function fib(num)
{
    if(num<=1)
    {
        return num;
    }

    return fib(num-1)+fib(num-2);
        
}

console.log(fib(10));

//while doing the recursion first it goes into the fib(num-1) which is fib(9) till fib(0)
//which takes 0(n) times 

//and next it goes into 

//fib(num-2) which is fib(8) and goes till fib(0) which again takes 0(n) times
//in total it makes 0(n)*0(n) = 0(2^n)

//which is not the best way of solving the problem because it is takes much more 
//time complexity then the brute force 0(n) refer to 01FibonnaciSerieesBruteForce.js

//how can we optimize it refer to the next 04FibonacciNumberRecursionDP.js
