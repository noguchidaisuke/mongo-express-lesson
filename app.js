const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require ('body-parser')
const cors = require ('cors')
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());
//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

// routes
app.get('/', (req, res) => {
  res.send ('hello world')
})

//connect
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB'));

// how to web start listening
app.listen(3000);
