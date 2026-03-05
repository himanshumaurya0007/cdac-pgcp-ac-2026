// ------- Program 1 -------
// ------- Different types of functions -------

// 1. General way to declare the function
// Function definition
function sayHello(name = "User") {
    console.log("Hello, " + name);
}

// Function call
sayHello();
sayHello("Manvendra");

// 2. Storing function in a variable
function square(n) {
    return (n * n);
}

// square() function is stored in a
let a = square;

console.log(typeof (a));
console.log(a);
console.log(a(5));

// 3. Anonymous function
let b = function () {
    console.log("Annonymous function is called");
}

console.log(b);
console.log(b());

// 4. Lambda function 
let c = (n) => (n * n * n);

console.log(c(5));


// ------- Program 2 -------
let dataArray = [];

function addToArray() {
    let inputValue = document.getElementById("txt").value.trim();

    if (inputValue === "") {
        alert("Please enter a value first.");
        return;
    }

    dataArray.push(inputValue);

    document.getElementById("txt").value = "";
    alert("Value added successfully!");
}

function displayArray() {
    let ul = document.getElementById("result");

    ul.innerHTML = "";

    dataArray.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// ------- Program 3 -------
// Email Validation

function validateEmail() {
    let email = document.getElementById("email").value;

    // Check if email is empty
    if (email == "") {
        alert("Enter email first");
        return false;
    } else {
        // Check if '@' exists and is not at the start of the email
        let atPosition = email.indexOf("@");
        if (atPosition <= 0) {
            alert("Invalid email address (@ symbol is missing or at the start)");
            return false;
        }

        // Now check if '.' is after the '@' and has at least one character after it
        let dotPosition = email.lastIndexOf(".");
        if (dotPosition > atPosition + 1 && dotPosition < email.length - 1) {
            alert("Valid email address");
            return true;
        } else {
            alert("Invalid email address (. symbol is misplaced or missing after @");
            return false;
        }
    }
}

// ------- Program 4 -------
function add(...a) {
    console.log("inside add() function");

    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }

    console.log("Sum: " + sum);
}

add();
add(1, 2);
add(1, 2, 4);
add(1, 2, 3, 4, 5);

// ------- Program 5 -------
let radios = document.getElementsByName("textOption");

// Add event listener to each radio button
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", convertText);
}

function convertText() {
    let textInput = document.getElementById("nTxt");
    let paragraph = document.getElementById("paragraph");

    let text = textInput.value;
    let selectedOption = "";
    let result = "";

    // Check which radio button is selected
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedOption = radios[i].value;
            break;
        }
    }

    // Validate input
    if (text.trim() === "") {
        paragraph.textContent = "Please enter text first.";
        return;
    }

    // Convert text based on selected option
    if (selectedOption === "upper") {
        result = text.toUpperCase();
    }
    else if (selectedOption === "lower") {
        result = text.toLowerCase();
    }
    else {
        result = text;
    }

    // Display result
    paragraph.textContent = result;
}