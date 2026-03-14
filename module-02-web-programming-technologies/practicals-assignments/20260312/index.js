// ------- Program 1 -------
let book = {
    bookId: 129,
    bookTitle: "The Intelligent Investor",
    bookAuthor: "Warren Buffet"
};

console.log("Object")
console.log(book);

let { bookId, bookTitle, bookAuthor } = book;
console.log("\nDestructuring method 1");
console.log(bookId);
console.log(bookTitle);
console.log(bookAuthor);

let { bookId: id, bookTitle: title, bookAuthor: author } = book;
console.log("\nDestructuring method 2");
console.log(id);
console.log(title);
console.log(author);

// ------- Program 2 -------
console.log("\nConvert Object to JSON");
let objectToJson = JSON.stringify(book);
console.log(objectToJson);

console.log("\nConvert JSON to Object");
let jsonToObject = JSON.parse(objectToJson);
console.log(jsonToObject);

// ------- Program 5 -------
console.log();
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("foobar");
    }

    else if (i % 3 === 0) {
        console.log("foo");
    }

    else if (i % 5 === 0) {
        console.log("bar");
    }

    else {
        console.log(i);
    }

}