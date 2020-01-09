//Import Express, Body-Parser, CORS, Error Handler
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');

//API Route
const apiRouter = require('./api/api');

//Express App Instance
const app = express();

//PORT
const PORT = 4000;

//Routes for BodyParser, CORS, API, ErrorHandler
app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

app.use(errorhandler());

//Server PORT Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;