
        //PALINDROME CHECKER
        ///IF A WORD PR NUMBER THAT READS THE SAME BACKWARD AS FORWARD.....
        ///E.G

        function checkPalindrome(word){
            if (typeof word !=='string'&&typeof word !=='number')
            return 'PUT STRING OR NUMBER'
          const cleaned=word.toString().toLowerCase().replace(/[^a-z0-9]/g, '')
          const backward=cleaned.split('').reverse().join('');
          if (backward===cleaned){
            return 'IS A PALINDROME'
          }
          return 'NOT A PALINDROME'
        }
        console.log(checkPalindrome('madam'))
  