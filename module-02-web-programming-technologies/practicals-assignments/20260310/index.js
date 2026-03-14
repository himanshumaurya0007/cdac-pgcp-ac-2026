// ------- Program 1 -------
let data = [12, 20, 60, 30, 90, 33, 97, 99];

let evenNumberArray = [];
let oddNumberArray = [];

console.log("Printing even number array elements: ");
data.forEach(element => {
    if (element % 2 == 0) {
        console.log(element);
        evenNumberArray.push(element);
    }
    else {
        oddNumberArray.push(element);
    }
});


console.log("Printing even number array elements: ");
console.log(evenNumberArray);

console.log("Printing odd number array elements: ");
console.log(oddNumberArray);

let sortedArray = [];

sortedArray = data.sort((n1, n2) => (n1 - n2));

console.log("Printing sorted array elements: ");
console.log(sortedArray);

// ------- Program 2 -------
let obj = {
    id: 100,
    name: "abc",
    email: "abc@gmail.com",
    arr: [12, 655.5]
};

console.log("Performing operations on object...");
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    // console.log(obj);          // Prints the whole object
    console.log(obj[key]);        // Prints elements of the object
    // console.log(obj[key].id);  // Error: Trying to access something like 'obj.id.id' which does not exist
}

console.log("Priting elements of array of object");
obj.arr.forEach(e => console.log(e));