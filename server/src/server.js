const PORT = process.env.PORT;
const http = require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);

// const app = require('express')
// const server = app()

// server.get('/', (req, res) =>{
//     res.send('ok')
// })




server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});

