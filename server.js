const express = require('express');
const path = require('path');

const app = express();

// Middleware to serve static directory
const staticPath = path.resolve(__dirname, 'frontend', 'static');
app.use('/static', express.static(staticPath));

// Other requests
app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

// Serve
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
