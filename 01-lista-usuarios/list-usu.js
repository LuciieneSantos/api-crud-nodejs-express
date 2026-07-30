const express = require('express');
const app = express();


//Middleware para parsear o body de requisicoes JSON
app.use(express.json());


let users = [
    {id:1, name:'Alice',email:'alice@example.com'},
    {id:2, name:'Bob',email:'bob@example.com'}
];


// GET: Recupera todos os usuarios
app.get('/api/users', (req, res) => { res.json(users); });


// GET: Recupera um usuario especifico
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({message: 'User not found'});
    res.json(user);
});


// POST: Cria um novo usuario
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});


// PUT: Atualiza um usuario existente
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({message: 'User not found'});
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});


// DELETE: Apaga um usuario especifico
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});


app.listen(3000, () => console.log('API running on http://localhost:3000'));


