
        //REVERSE AN ARRAY

        //E.G

        let arrayBooks=['physics','chemistry','biology','mathematics','furthermath'];

        let newArray=arrayBooks.reverse()
        console.log(newArray)


        //BETTER WAY
        //NO MUTATION OF ORIGINAL ARRAY

        function reverseArray(arr){
            return arr.slice().reverse()
        }
        console.log(reverseArray(['physics','chemistry','biology','mathematics','furthermath']))
        


        ///ES6 VERSION.........
        ///ONE LINER/..........
        const toBeReversed=array=>[...array].reverse();
        console.log(toBeReversed(['physics','chemistry','biology','mathematics','furthermath']))
