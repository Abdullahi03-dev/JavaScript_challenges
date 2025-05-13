

let array=[1,2,3,4,5,1,2,3]
///USING SET
//a special object that only stores unique values
const unique=[...new Set(array)]
console.log(unique)



///using filter and indexOf
///indexOf tells you the position of the first occurence of a value in an array


let array2=[1,2,2,3,3,3,3,4,4,]

const uniquearray=array2.filter((value,index)=>{
    return array2.indexOf(value)===index
})

console.log(uniquearray)


///using reduce

const uniqueWithReduce=array2.reduce((acc,value)=>{
    if(!acc.includes(value)){
        acc.push(value)
    }
    return acc
},[])

console.log(uniqueWithReduce)