const express = require('express');
const data = require('./data.json');
const cors = require('cors')
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, 
  }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.send({'data':data});
})

app.listen(3000, () => {
    console.log('server is running at localhost:3000')
})