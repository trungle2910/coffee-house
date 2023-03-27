require("dotenv").config();
const cors = require("cors");

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {Pool} = require("pg");

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/api', indexRouter);

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Coffe_House',
    password: `${process.env.PGPASS}`,
    port: 5432,
  });
// Test kết nối
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database', err.stack);
    } else {
      console.log('Connected to database at', res.rows[0].now);
    }
  });

  
  pool.query(`CREATE SCHEMA IF NOT EXISTS drinks_cf`);


module.exports = app;
