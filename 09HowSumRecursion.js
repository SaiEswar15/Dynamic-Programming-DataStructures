//given a target sum and an array return the array which sum will give the target sum
//example : target = 7 arr = [5,3,4,7]
//answer : [7], [4,3], [3,4]


//Time complexity : Each branch is running m times 
//and also each branch again runs for n times which is growing exponentially 
//which becomes 0(n^m) times 
// and we are also doing this arr no of times which is n
//totally it becomes  0(n^m * n)
//Space complexity : 0(m*n)

let result = [];

function howSum(target, arr)
{
    if(target === 0) return [];

    if(target < 0) return null;
    
    for(let i of arr)
    {
        let remainder = target-i; //7-5=2
        if(howSum(remainder, arr) !== null)
        {
            result.push(i);
            return result;
        }   
    }
    return null;
    
}

console.log(howSum(7, [5,3,4,7]));

// console.log(howSum(300, [7,14]));

//obviously the second example takes a lot of recursions and takes more time 
//so we should optimize the solution 
//refer to the next solution 