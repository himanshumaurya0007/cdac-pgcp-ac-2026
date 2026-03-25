// ------- Program 6 -------
const http = require('http');

let users = [
    { id: 1, name: "Himanshu" }
];

// Helper function (JSON response)
const sendResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/users') {
        return sendResponse(res, 200, {
            success: true,
            data: users
        });
    }

    if (method === 'POST' && url === '/users') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const parsedData = JSON.parse(body);
                const { name } = parsedData;

                if (!name) {
                    return sendResponse(res, 400, {
                        success: false,
                        message: 'Name is required'
                    });
                }

                const newUser = {
                    id: users.length + 1,
                    name
                };

                users.push(newUser);

                return sendResponse(res, 201, {
                    success: true,
                    data: newUser
                });
            } catch (error) {
                return sendResponse(res, 400, {
                    success: false,
                    message: 'Invalid JSON'
                });
            }
        });
        return;
    }

    sendResponse(res, 404, {
        success: false,
        message: 'Route not found'
    });
});

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});