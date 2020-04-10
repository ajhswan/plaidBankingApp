const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys.js').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB successfully connected'))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

//Routes
app.use('/api/users', users);

//set port, use Heroku server in cloud else use localhost:5000
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on ${port} !`));
