const arr=[1,2,5,10,11,17,3];

function filterApp(){
    console.log(arr);
    const newarr= arr.filter((arrele,idx)=>{
        return arrele>=10;
    })
    console.log(newarr)
}

filterApp();