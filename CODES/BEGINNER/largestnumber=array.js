

////LARGEST NUMBER IN AN ARRAY

let array=[1,2,3,4,5,6,7,8,9];

 const highestNumber=Math.max(...array)
 console.log(highestNumber)


 ///USING REDUCE
 let array2=[1,2,3,4,5,6,7,8,9,10];
 const max=array2.reduce((acc,curr)=>curr>acc?curr:acc,array2[0])
    console.log(max)

    ///using loop

    let array3=[1,2,3,4,5,6,7,8,9,10,11]
    let maxnum=array3[0]
    for (let i = 0; i < array3.length; i++) {
        if(array3[i]>max)
        maxnum=array3[i]
        
    }
    console.log(maxnum)
