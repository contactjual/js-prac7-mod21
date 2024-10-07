
// Write a function to count the number of vowels in a string.

function containsAllVowels(input) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    input = input.toLowerCase();
    let count = 0;

    for (const key of input) {
        if (vowels.includes(key)) {
            count++;
        }
    }

    return count;
}
const input = 'aaaeesdfgh';
console.log(containsAllVowels(input));



