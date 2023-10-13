
//Time complexity : Each branch is running m times 
//we reduced n times by storing and memoization
// and we are also doing this arr no of times which is n
//totally it becomes  0(m * n)
//Space complexity : 0(m*n)

let result = [];

let obj = [];

function howSum(target, arr)
{
    if(target in obj)
    {
        return obj[target];
    }

    if(target === 0) return [];

    if(target < 0) return null;
    
    for(let i of arr)
    {
        let remainder = target-i; 
        if(howSum(remainder, arr) !== null)
        {
            result.push(i);
            obj[target] = result;
            return obj[target];
        }   
    }
    obj[target] = null;
    return obj[target];
    
}


console.log(howSum(300, [7,14,2]));