const express = require('express');
const path = require('path');

const app = express();

app.get('/*', (req, res) => {
	res.sendFile(path.resolve('frontend', 'index.html'));
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
	console.log('Server running...');
});
