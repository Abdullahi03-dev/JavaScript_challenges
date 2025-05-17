

///CHECK ANAGRAMS
const checkAnagrams=(word1,word2)=>{
        let wordOne=word1.toLowerCase().split('').sort().join('')
        let wordTwo=word2.toLowerCase().split('').sort().join('')
        return wordOne===wordTwo
}

    
    console.log(checkAnagrams('boOk','kob'))