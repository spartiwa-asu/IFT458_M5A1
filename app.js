const express = require('express');
const loggerMiddleware = require('./Mid');

const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Middleware is working!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});