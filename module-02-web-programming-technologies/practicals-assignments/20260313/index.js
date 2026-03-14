// ------- Program 1 -------
console.log("------- Program 1 -------");
function addition(n1, n2) {
    return n1 + n2;
};

function substraction(n1, n2) {
    return n1 - n2;
};

function multiplication(n1, n2) {
    if (n2 == 0)
        return "ERROR: Second parameter cannot be zero.";
    return n1 * n2;
};

function divide(n1, n2) {
    if (n2 == 0)
        return "ERROR: Division by zero is not possible.";
    return n1 / n2;
};

function result(a, b, callback) {
    console.log("Result: ", callback(a, b));
}

result(10, 5, addition);
result(10, 5, substraction);
result(10, 5, multiplication);
result(10, 5, divide);

// ------- Program 2 -------
console.log("\nIn file...");

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         callback();
//     }, 1000);
// };

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 completed");
//         callback();
//     }, 2000);
// };

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 completed");
//         callback();
//     }, 1000);
// };

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log();
//         });
//     });
// });

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed");
//         });
//     });
// });

// ------- Program 3 -------
console.log("\n------- Program 3 -------");
function newAddition(n1, n2, callback) {
    callback(null, n1 + n2);
};

function newSubstraction(n1, n2, callback) {
    callback(null, n1 - n2);
};

function newMultiplication(n1, n2, callback) {
    if (n2 == 0)
        callback("ERROR: Second parameter cannot be zero.");
    else
        callback(null, n1 * n2);
};

function newDivide(n1, n2, callback) {
    if (n2 == 0)
        callback("ERROR: Division by zero is not possible.", null);
    else
        callback(null, n1 / n2);
};

function newResult(err, res) {
    if (err)
        console.log(err);
    else
        console.log("Result: ", res);
}

newAddition(1000, 100, newResult);
newSubstraction(1000, 100, newResult);
newMultiplication(1000, 0, newResult);
newDivide(1000, 0, newResult);

// ------- Program 4 -------
// Example 1
let p = new Promise((res, rej) => {
    let n = 4;
    if (n % 2 === 0)
        res("Number is even number");
    else
        rej("Number is odd");
});

p.then(message => console.log(message))
.catch(err => console.log(err));


// Example 2
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10)
            resolve("Number is greater than 10");
        else
            reject("Number is equal to 10 or less");
    });
}

checkNumber(15)
.then(result => console.log(result))
.catch(error => console.log(error));


// Example 3
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(({ title, body }) => {
    console.log("Post title:", title);
    console.log("Post body:", body);
})
.catch(error => console.log("Error:", error.message));

// ------- Program 5 -------
// Uncomment 'Program 2' and then run the file. Observe the output and try to understand.