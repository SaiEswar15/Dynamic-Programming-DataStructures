let obj = {};

function gridTraveller(m,n)
{
    let key = m + "," + n;
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;

    if(key in obj) return obj[key];

    obj[key] = gridTraveller(m-1, n) + gridTraveller(m,n-1);

    return obj[key];
    
}


console.log(gridTraveller(18,18));