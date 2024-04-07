const express = require('express');
const app = express();
const port = 3000;

// Set up a route for serving the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Set up a route to handle form submission
app.get('/calculate', (req, res) => {
    const { num1, num2, operation } = req.query;
    let result;

    switch (operation) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            result = 'Invalid operation';
    }

    res.send(`Result: ${result}`);
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// End the connection after 30 seconds
setTimeout(() => {
    server.close(() => {
        console.log('Server connection closed after 30 seconds');
    });
}, 30000);
