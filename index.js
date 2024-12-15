const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Works correct, correct with npm test
const titleCased = () => {
  return tutorials.map(mySentence => {
    return mySentence.split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
  })
}
console.log(titleCased(tutorials))

//Works correct, correct with npm test
// const titleCased = () => {
//   return tutorials.map(mySentence => {
//     return mySentence.split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//   })
// }
// console.log(titleCased(tutorials))


//Works correct, incorrect with npm test
// const mySentence = tutorials[0];
// const capFirstLetter = mySentence.split(' ').map((word) => {
//   return (word.charAt(0).toUpperCase() + word.slice(1))
// }).join(' ');
// console.log(capFirstLetter);
// const titleCased = array => array.map( mySentence => 
//   mySentence.split(' ').map((word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1)
// }).join(' '));
// console.log(titleCased(tutorials))

//Works correct, incorrect with npm test
// const mySentence = tutorials[0];
// const capFirstLetter = mySentence.split(' ').map((word) => {
//   return (word[0].toUpperCase() + word.substring(1))
// }).join(' ');
// console.log(capFirstLetter);
// const titleCased = array => array.map( mySentence => 
//   mySentence.split(' ').map((word) => {
//   return word[0].toUpperCase() + word.substring(1)
// }).join(' '));
// console.log(titleCased(tutorials))




//Breaking down the problem into smaller bits using examples.
//Using .split() method to create an array of each word in the sentence at index 0 of tutorials array.
//.split() splits the sentence into sections at each "blank space".
// const mySentence = tutorials[0]
// const capFirstLetter = mySentence.split(' ')
// console.log(capFirstLetter)
// //[ 'what', 'does', 'the', 'this', 'keyword', 'mean?' ]

// //Practice capitalizing only the first letter of a word by specifying the index position to be capitalized [0].
// //Use .substring() method to return other remaining letters of the word.
// //The method takes in the index you want it to be applied from.
// const word = 'what'
// const firstLetterUpper = word[0].toUpperCase()
// const otherLetters = word.substring(1)
// console.log(firstLetterUpper)
// //W
// console.log(otherLetters)
// //hat
//console.log(firstLetterUpper + otherLetters)
//What

//Applying .map() to our first sentence
//Iterate through each word in the array mySentence and capitalize only first letter
// const mySentence = tutorials[0];
// const capFirstLetter = mySentence.split(' ').map((word) => {
//   return (word[0].toUpperCase() + word.substring(1))
// }).join(' ');
// console.log(capFirstLetter);
//Without .join(): [ 'What', 'Does', 'The', 'This', 'Keyword', 'Mean?' ]
//Join the elements in the array into 1 array using .join (). We specify to add a space between ech word(' )
//With.join(): What Does The This Keyword Mean?

//We set our arrow function, titleCased, to a const and that function takes an array as a parameter
//We pass our parameter and chain the first map() to our parameter (an array)
//With the first map, we need to pass a callback function that will iterate through each element.
//We assign the parameter (each element of the array) to mySentence and it is passed into the return value. This is where we use the split method to split() each sentence into an array of words.
//Within that return value of mySentence, we assign a second map() to each element of that array to iterate through each individual word in the array created by split().
//Then we have a callback function that iterates through each word and returns the combined value of our two string method values. This is where the first letter of each word is capitalized.
//After we concatenate the words we chain join() to combine the words of each array back into one sentence.
//Since that is all within the first map chain it applies everything within that callback function to each element (each sentence) the array that is passed returned in the titleCased function.
// const titleCased = array => array.map( mySentence => mySentence.split(' ').map((word) => {
//   return word[0].toUpperCase() + word.substring(1)
// }).join(' '));
// console.log(titleCased(tutorials))