const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefInfo = require('./data/chefInfo.json');
const receipeInfo = require('./data/receipeInfo.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running')
});

app.get('/chefinfo', (req, res) => {
    res.send(chefInfo);
})

app.get('/receipeinfo', (req, res) => {
    res.send(receipeInfo);
})




app.listen(port, () => {
    console.log(`Server API is running on port: ${port}`)
})