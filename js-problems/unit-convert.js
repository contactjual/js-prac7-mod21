
// conver inch to feet math 

// function inchToFeet(inch) {
//     const feet = inch / 12;
//     return feet;
// }
// const inch = 62;
// console.log(inchToFeet(inch));



// doshomik er porer number golo inch te rakbo

function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const floatNumber = inch-(feetNumber*12);
    // const floatNumber = inch % 12;
    console.log(feetNumber);
    const result = feetNumber + ' ft ' + floatNumber + ' inch '
    return result;
}
// const inchInput = inchToFeet(62);
const inch = 71;
console.log(inchToFeet(inch));