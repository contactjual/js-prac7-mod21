
// year will be a leap year if the year is divisible by 4

// function leapYear(year){
//     if(year%4===0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const isLeap = leapYear(38934);
// console.log(isLeap);



// those year that is not divisible by 100 but they divisible by 4, they are leap year

function leapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeap = leapYear(2004);
console.log(isLeap);