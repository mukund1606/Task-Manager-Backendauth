require('dotenv').config();

const { Signup_user, Login_user } = require('./UserController');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', Login_user);

// Signin Route
app.post('/signup', Signup_user);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
