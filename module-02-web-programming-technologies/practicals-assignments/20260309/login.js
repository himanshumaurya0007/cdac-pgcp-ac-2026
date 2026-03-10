// ------- Program 2 -------
console.log("Hello, User!");
console.log("Starting to run predefined callback functions...");

setTimeout(() => {
    console.log("Running setTimeout() predefined callback function...");
}, 2000);

let intervalID = setInterval(() => {
    console.log("Running setInterval() predefined callback function...");
}, 4000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log("Interval stopped.");
}, 10000);

// ------- Program 3 -------
Object.prototype.print = function (...s) {
    console.log("Prototype " + s);
};

let studentData1 = {
    name: "S1",
    marks: 97
};

studentData1.print(studentData1.name, studentData1.marks, 34);

let studentData2 = {
    name: "S2",
    marks: 100
};

studentData2.print(studentData2.name, studentData2.marks, 46);

// ------- Program 4 -------
let updatedStudentData = {
    studentId: 26,
    studentName: "Himanshu",
    grade: "A"
};

console.log(updatedStudentData);
console.log(typeof updatedStudentData);

let objectData = JSON.stringify(updatedStudentData);

console.log(objectData);
console.log(typeof objectData);

