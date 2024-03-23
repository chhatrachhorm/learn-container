const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to docker file demo app!');
})

app.listen(3000, () => {
    console.log('Server listening...')
})