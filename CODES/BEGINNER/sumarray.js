

///sum array with reduce

let array=[1,2,3,4,5];


const sum=array.reduce((arr,curr)=>{
    return arr+curr
},0)

console.log(sum)