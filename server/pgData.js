const {Pool} = require("pg");
const pgData = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Coffe_House',
    password: `${process.env.PGPASS}`,
    port: 5432,
  });
  module.exports = pgData;
