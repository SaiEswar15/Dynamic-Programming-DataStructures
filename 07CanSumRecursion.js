//Time complexity : the left barnch will go for m times 
//and agin each node again goes for n times 
//which makes this the 0(n^m times)
//space complexity will be m times

function canSum(target, arr) //8
{
    if(target === 0) return true;
    if(target < 0) return  false;

    for(let i of arr)
    {
        let remainder = target-i; //8-2=6
        if(canSum(remainder, arr)===true)
        {
            return true;
        }
    }
    return false;
}

console.log(canSum(14, [2,4,6,8,10]))

// console.log(canSum(300, [7,14]))


//the second example takes a lot of time to do because it has to reach from 
//300 to 0 or 1 which takes a lot of recursion functions so 
// we have to use some type of memoization 
//refer to 08.

