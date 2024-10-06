
// You are given an array of numbers. Count how many times the a number is repeated in the array.
function findRepeat(numbers) {
    const singleNum = [];
    let count = 0;
    for (const key of numbers) {
        if (singleNum.includes(key) /** === true */) {
            count++;
        }
        else{
            singleNum.push(key);
        }
    }
    // return singleNum;
    return count;
}
const numbers = [2, 3, 45, 6, 7, 7, 8, 2, 3, 6, 0];
console.log(findRepeat(numbers));



