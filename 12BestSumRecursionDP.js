//you are given a target and array of numbers
//you have to find the least or shortest array which makes the target sum
//example : target : 7 arr : [5,3,4,7]
//answer : [7] not [3,4] or [4,3]

//Time complexity : 
//Space complexity :



let obj = [];

function bestSum(target, arr)
{
    if(target in obj) return obj[target];

    if(target === 0) return [];

    if(target < 0) return null;

    let shortestCombination = null;
    
    for(let i of arr)
    {
        let remainder = target-i; //7-5=2
        let combination = bestSum(remainder, arr)
        if(combination  !== null)
        {
            let result = [...combination, i];
            if(shortestCombination === null || result.length < shortestCombination.length) 
            {
                shortestCombination = result;
            }
        } 
         
    }
    obj[target] = shortestCombination;
    return obj[target];
    
}

console.log(bestSum(100, [1,2,5,25]));