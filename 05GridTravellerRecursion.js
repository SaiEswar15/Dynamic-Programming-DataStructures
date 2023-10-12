function gridTraveller(m,n)
{
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;

    return gridTraveller(m-1, n) + gridTraveller(m,n-1)
    
}

console.log(gridTraveller(2,3));
console.log(gridTraveller(3,2));
console.log(gridTraveller(3,3));
console.log(gridTraveller(1,1));
// console.log(gridTraveller(18,18));

//for smaller problems we can do recursion 
//the time complexity will be 
//on the left branch we decrease m-1 for m times
//on the right branch we decrease n-1 for n times
//m+n times
//again for each branch we again do m and n times so it becomes 0(2^m+n times)
//the space complexity takes m+n times

//but for bigger problem it takes more function calls one after the other 
//this may lead to low performance.

//solution > refer to the dp method
