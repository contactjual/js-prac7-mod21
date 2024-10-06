const today = new Date("2024-10-26"); 
console.log(today);
console.log(today.getMonth());
console.log(today.getDay());

const specificDate = new Date(2024, 0, 20); // string use korle month 1 theke start hoy.
console.log(specificDate);
specificDate.setMonth(10); // changed month
console.log(specificDate);
console.log(specificDate.toLocaleDateString('en-GB'));
console.log(specificDate.toLocaleDateString('en-US'));



// unix epoc ----> date er modde parthokko