const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.post('/login', (req, res) => {
    res.send('Login Request Received');
});

app.put('/user/:id', (req, res) => {
    res.send(`Update user ${req.params.id}`);
});

app.delete('/user/:id', (req, res) => {
    res.send(`Delete user ${req.params.id}`);
});

app.listen(3000);


