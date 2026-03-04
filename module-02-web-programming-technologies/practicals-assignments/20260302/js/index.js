function table(data) {
    for (var i = 1; i <= 10; i++) {
        console.log(data + " X " + i + " = " + (i * data));
    }
}

table(5);

console.log("\n");

function pattern() {
    for (var i = 4; i > 0; i--) {
        let row = "";
        for (var j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
pattern();

console.log("\n");

function square() {
    // Value must be fetched in function only
    let n = document.getElementById("num").value;

    console.log(n * n);
}



