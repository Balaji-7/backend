const express = require('express');
const bodyParser = require('body-parser');
const userroutes = require('./userRoutes');
const cors = require('cors');
const app = express();
app.use(cors());
// app.use(express.static('frontend'))
// const jsonParser = bodyParser.json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',userroutes);

const port = process.env.PORT || 3000;

app.listen((port),()=>{
    console.log(`Server is Running on ${port}`)
})