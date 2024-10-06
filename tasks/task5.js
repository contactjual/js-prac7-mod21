
// Generate a random number between 10 to 20.

// the formula: Math. random() * (max - min) + min 
// const randomNumber = Math.random() * (20 - 10 + 1) + 10;

for (let i = 10; i >= 9; i++) {
    const randomNumber = Math.floor(Math.random() * (20 - 10)) + 10;
    console.log(randomNumber);
}