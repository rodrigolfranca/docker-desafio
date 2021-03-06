const express = require('express');
const app = express();
const { readData, writeData } = require('./controller/JSONController');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("chegou")

    try {
        const users = readData();
        res.status(200).json({'users' : users, 'message' : 'Data Received.'});
    } catch (error) {
        console.log(error);
        res.status(501).json({'message':'Error trying to read data bank.'});
    }
    
    
});

app.post('/send', (req, res) => {

    const { users } = req.body;
    console.log(users);
    try {
        writeData(users);
        res.status(200).json({'message':'Data Updated.'});
    } catch(error) {
        console.log(error);
        res.status(501).json({'message':'Error trying to update the data.'})
    }

});

app.listen(4000, () => console.log("Servidor Aberto em 4000"));