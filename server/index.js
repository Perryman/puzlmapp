const express = require('express'); // Import Express
const app = express(); // Create an Express application

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000; // Set the port from the environment or default to 3000

console.log('Hello from puzlmapp src index!');

// Health check or root route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Define your API route
app.get('/api', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend listening at http://${HOST}:${PORT}`);
});
