// Sum Zero

// Starting array
let array = [28, 43, -13, 30, 4, 0, 13]

// Write your solution below:

let value = false
for(let i = 0; i <array.length; i++) {
    for(let j = 0; j < array.length; j++) {
        if (i !== j) {
            if(array[i] + array[j] === 0) {
                value = true
            }
        }
    }
}
console.log(value)

//runtime for this is O(n^2) because of the two nested for loops

// Unique Characters

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

  //runtime is O(n) because the length of the word is not constant and the single loop gives it linear time

  //Pangram Sentence 

  const str = 'We promptly judged antique ivory buckles for the next prize';
  const isPangram = (str = '') => {
     str = str.toLowerCase();
     const { length } = str;
     const alphabets = 'abcdefghijklmnopqrstuvwxyz';
     const alphaArr = alphabets.split('');
     for(let i = 0; i < length; i++){
        const el = str[i];
        const index = alphaArr.indexOf(el);
        if(index !== -1){
           alphaArr.splice(index, 1);
        }
     }
     return !alphaArr.length;
  };
  console.log(isPangram(str)); 
  

// I think the runtime of this function is O(n) because there is a single for loop and the splice is delection of the array (which is also O(n))
//Together, they are O(2n) which reduces to O(n)


//Longest Word

function findLongestWord(arr) {
    var longestWord = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord){
      longestWord = arr[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord(['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']))

  //This is function is also O(n) because of the single for loop. We do not know the length of the array that will be passed in, so the function is linear