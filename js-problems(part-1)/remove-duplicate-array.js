
function list (numbers){
    const unique = [];
    for (const key of numbers){
        if (unique.includes(key)===false){  //true dile kaj kortesena kenu?
            unique.push(key);
        }
    }
    return unique;
}
const numbers = [12,34,5,12,5,67,88,34,5];
console.log(list(numbers));