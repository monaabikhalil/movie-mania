const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/users');
app.use('/users', users);

const movies = require('./routes/movies');
app.use('/movies', movies);


app.get('/', (req, res) => {
    res.send("root is listening");
});

app.listen(process.env.PORT || 8081, () => {
    console.log("Server is listening");
});