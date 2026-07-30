const express = require('express');
const app = express();


// Middleware especifico
const logger = (req, res, next) => {
    console.log(`${req.method}${req.url}`);
    next(); // move para o proximo middleware ou manipuladr de rota
};


app.use(logger); // Aplica o middleware globalmente


app.get('/', (req, res) => { res.send('Home Page'); });
app.get('/about', (req, res) => { res.send('About Page'); });


app.listen(3000, () => console.log('Server is running on port 3000'));

