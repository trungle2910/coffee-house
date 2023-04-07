const {Pool} = require("pg");
const pgData = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'coffee_db',
    password: `${process.env.PGPASS}`,
    port: 5432,
  });
  module.exports = pgData;
