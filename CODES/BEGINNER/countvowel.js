

let word='book'
let vowels=['a','e','i','o','u']



const countVowels=(word)=>{
let arr=[]

   let wordSplit= [...word.toLowerCase()]

   wordSplit.forEach((each)=>{

    if(vowels.includes(each)){

        arr.push(each)


    }
   })

        console.log('TOTAL VOWELS:'+arr.length) 

}

countVowels(word)