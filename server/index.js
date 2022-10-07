const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/key');

/* mongodb */
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //mongoose 버전이 6이상인 경우는 필요없음
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))


/* middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* cors */
app.use(cors());
app.use("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', (req, res) => res.send('Hello World! 안녕하세요~'));

/* users */
const userRouter = require('./routes/users');
app.use('/api/users', userRouter); // router로 분리



const port = 8000;
app.listen(port, () => {console.log(`Example app listening on port ${port}`)})