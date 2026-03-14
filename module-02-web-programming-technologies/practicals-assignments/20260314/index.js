// ------- Program 1 -------
console.log("Hello from Program 1!");

async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();

    console.log("data", data);
    console.log("data.userId: ", data.userId);
    console.log("data.id: ", data.id);
    console.log("data.title: ", data.title);
    console.log("data.body: ", data.body);
}

fetchData();

async function call1() {
    data = await "Sample data here...";
    console.log(data);
}
call1();

// ------- Program 2 -------
const Employee = require("./Employee.js");

const emp1 = new Employee(
    "Himanshu",
    "Maurya",
    "himanshumaurya7781@gmail.com",
    "Full-Stack Software Developer",
    79843
);

emp1.display();

// ------- Program 3 -------
const calculateSumOfStringofNumber = require("./calc.js");

// Function call
calculateSumOfStringofNumber("12345qw67p89knm");

// ------- Program 4 -------
// view npmDemoProject directory

// ------- Program 5 -------
const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (error, data) => {
    if (error)
        console.log("ERROR: ", error);
    else
        console.log(data);
});

let readFileContent = fs.readFileSync("sample.txt", "utf-8");
console.log(readFileContent);

// ------- Program 6 -------
fs.writeFile("product.txt", "This product definition is being added by the means of writeFile() function.", (err) => {
    if (err) console.log(err);
    else console.log("File written successfully. (1)")
});

fs.writeFile("product.txt", "This product definition is being added viz., writeFile() function.", (err) => {
    if (err) console.log(err);
    else console.log("File written successfully. (2)")
});

fs.writeFile("product.txt", "This product definition is being added via writeFile() function.", (err) => {
    if (err) console.log(err);
    else console.log("File written successfully. (3)")
});

fs.writeFileSync("product.txt", "Product definition added using writeFileSync() function.");

// ------- Program 7 -------
const employee = {
    id: 101,
    name: "Himanshu",
    department: "IT",
    salary: 89983
};

// Convert object to JSON string
const employeeData = JSON.stringify(employee) + "\n";

fs.appendFile("employees.txt", employeeData, (err) => {
    if (err) {
        console.log("Error writing file:", err);
    } else {
        console.log("Employee data appended successfully.");
    }
});

// ------- Program 8 ------- (Other fs modules...)
const path = require("path");
const fsPromises = require("fs").promises;

async function runFSOperations() {

    const dirPath = path.join(__dirname, "data");
    const filePath = path.join(dirPath, "employees.txt");

    try {

        // 1. Create directory
        await fsPromises.mkdir(dirPath, { recursive: true });
        console.log("Directory created");

        // 2. Append employee data
        await fsPromises.appendFile(filePath, JSON.stringify(employee) + "\n");
        console.log("Employee data appended");

        // 3. Read directory
        const files = await fsPromises.readdir(dirPath);

        console.log("Files in directory:");
        files.forEach(file => console.log(file));

        // 4. File statistics
        const stats = await fsPromises.stat(filePath);

        console.log("File Size:", stats.size);
        console.log("Is File:", stats.isFile());

        // 5. Delete file
        await fsPromises.unlink(filePath);
        console.log("File deleted");

        // 6. Remove directory
        await fsPromises.rmdir(dirPath);
        console.log("Directory removed");

    } catch (error) {
        console.log("Error:", error);
    }
}

runFSOperations();