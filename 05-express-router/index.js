const express = require('express');
const app = express();

const userRoutes = require('./user-routes');

app.use('/api/users', userRoutes);

// Middleware de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!'
    });
});

app.listen(3000);