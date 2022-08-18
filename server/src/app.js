const express = require('express');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();


app.use(express.json());
// app.use(planetsRouter); 

app.get('/', (req, res) => {
    res.send({
        id: 1
    });
})

module.export = app;