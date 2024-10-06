
// Write a function Write a function to convert temperature from Celsius to Fahrenheit..

function convert(temperatureInCel) {
    const temperatureInFahr = (temperatureInCel * 9 / 5) + 32;
    return temperatureInFahr;
}
const temperatureInCel = 20;
console.log(convert(temperatureInCel));