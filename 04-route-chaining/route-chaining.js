const express = require('express');
const app = express();

app.route('/user')
    .get((req, res) => res.send("Get users"))
    .post((req, res) => res.send("Create user"));

app.listen(3000);