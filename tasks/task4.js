
// Write a function to find the longest word in a given string. Sample-input: I am learning Programming to become a programmer sample-output: Programming

function longestWord(mySentence) {
    const sentenceSplit = mySentence.split(' ');
    let biggWord = '';
    for (const key of sentenceSplit) {
        if (key.length > biggWord.length) {
            biggWord = key;
        }
    }
    return biggWord;
}
const mySentence = "I am learning Programming to become a programmer";
console.log(longestWord(mySentence));


