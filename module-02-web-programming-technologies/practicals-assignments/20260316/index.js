// ------- Program 1 -------
console.log(process.argv);

// Get command line arguments (skip first two default values)
const args = process.argv.slice(2);
console.log(args);

// Convert string arguments to numbers
const numbers = args.map(Number);

// Filter even numbers
const evenNumbers = numbers.filter(num => num %
    2 === 0);

// Calculate sum of even numbers
const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

// Display results
console.log("Input Numbers:", numbers);
console.log("Even Numbers:", evenNumbers);
console.log("Sum of Even Numbers:", sum);