const express = require('express');
const router = express.Router();

// Middleware das rotas
router.use((req, res, next) => {
    console.log("User route accessed");
    next();
});

router.get('/', (req, res) => {
    res.send('All users');
});

router.get('/:id', (req, res) => {
    res.send(`User ${req.params.id}`);
});

module.exports = router;