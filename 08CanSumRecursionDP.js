//By using dp we reduced the reduced the each node again running n times 
//so it goes only m times 
//for the array length number of times 
//Time  complexity : 0(m)
//Space Complexity : 0(m)

let obj = {};

function canSum(target, arr) 
{
    if(target in obj)
    {
        return obj[target];
    }

    if(target === 0) return true;
    if(target < 0) return  false;

    for(let i of arr)
    {
        let remainder = target-i; 
        
        if(canSum(remainder, arr)===true)
        {
            obj[target] = true;
            return true;
        }
    }
    obj[target] = false;
    return false;
}



console.log(canSum(300, [7,14]))