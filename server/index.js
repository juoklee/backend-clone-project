const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/key');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //mongoose 버전이 6이상인 경우는 필요없음
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))



app.get('/', (req, res) => {res.send('Hello World!')})


app.listen(port, () => {console.log(`Example app listening on port ${port}`)})