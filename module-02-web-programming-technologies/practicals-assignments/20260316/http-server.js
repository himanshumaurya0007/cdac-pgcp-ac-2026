// ------- Program 3 -------
const http = require('http');

const PORT = 8000 || 5000; // If port 8000 is not available then select port 5000.

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/') {
        console.log(req.method);
        res.write("Hello, I'm server... (Index Page)");
        res.write("<h1>I am being displayed as a HTML tag");
    }

    if (req.url == '/about') {
        console.log(req.method);
        res.write("<p><strong><i>About us</i></strong></p>");
    }

    if (req.url == '/home') {
        console.log(req.method);
        res.write("Home Page");
    }

    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});