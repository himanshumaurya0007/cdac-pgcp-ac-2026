// ------- Program 1 -------
// Kindly, refer "cricket_scoreboard_data" directory.

// ------- Program 2 -------
// Kindly, refer "scoreboard-app" directory.

// ------- Program 3 -------
// Kindly, refer "news-app" directory.

// ------- Program 4 -------
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("foobar");
    } else if (i % 3 === 0) {
        console.log("foo");
    } else if (i % 5 === 0) {
        console.log("bar");
    } else {
        console.log(i);
    }
}

// ------- Program 5 -------
const fs = require("fs");

const fileName = 'twinkle_twinkle_poem.txt';

try {
    fs.writeFileSync(fileName,
        "Twinkle, twinkle, little star, " +
        "How I wonder what you are! " +
        "Up above the world so high, " +
        "Like a diamond in the sky."
    );
    console.log('Written in file successfully (using writeFileSync() method).');
} catch (error) {
    console.log('Cannot write into the file.\nError: ', error);
}

fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
        console.error("Error in reading the file: ", err);
        return;
    }

    console.log('Reading file content (using readFile() method).');
    console.log(data);
});

// ------- Program 6 -------
// Kindly, refer "node-http-server.js" file.

// ------- Program 7 -------
// Kindly, refer "express-js-app" directory.

// ------- Program 8 -------
// Kindly, refer "ejs-template-view-engine" directory.
