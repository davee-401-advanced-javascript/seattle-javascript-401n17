'use strict';

const cwd = process.cwd();

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require(`${cwd}/src/middleware/500.js`);
const notFound = require(`${cwd}/src/middleware/404.js`);
const v1Router = require(`${cwd}/src/api/v1.js`);

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(v1Router);

// Catchalls
app.use(notFound);
app.use(errorHandler);

let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = { app, start };
