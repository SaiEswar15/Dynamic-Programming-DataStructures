//given an array of numbers and a targetsum 
//write a function such that it says whether any sum of numbers can make the target sum.
//example : [2,4,6,8,10] target : 14
//answer : 6,8 can make 14 so true
////answer : 2,4,8 can make 14 so true

function solve(target, arr, flag)
{
    if(arr.length === 1)
    {
        if(arr[0] === target)
        {
            flag = true;
            return arr[0];
        }
        else
        {
            return arr[0];
        }
    }

    let arr1 = [...arr];
    let arr2 = [...arr];
    arr1.shift();
    arr2.pop();
    let sum = canSum(target, arr1) + canSum(target, arr2);
    if(sum === target)
    {
        flag = true;
    }
    return sum;
}

function canSum(target, arr)
{
    let flag = false;
    solve(target, arr, flag)

    if(flag)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

console.log(canSum(14, [2,4,6,8,10]));


