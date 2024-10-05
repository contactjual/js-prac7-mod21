
function oddAvg(numbers) {
    const odd = [];
    for (const num of numbers) {
        if (num % 2 !== 0) {
            odd.push(num);
        }
    }
    let sum = 0;
    for (const finalNum of odd) {
        // sum = sum + finalNum;
        sum += finalNum;
    }
    const count = odd.length;
    // console.log(sum, count);
    if (count === 0) return 0;
    const avg = sum / count;
    return avg;
}
const numbers = [22, 45, 66, 77, 99];
console.log(oddAvg(numbers));



