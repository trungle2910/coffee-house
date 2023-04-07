const pgData = require("../pgData");

const getAllDrinks = async () => {
    const pgcoffee = await pgData.connect();
      //  SELECT * FROM Drinks
      const {rows} = await pgcoffee.query('SELECT * FROM  drinks');
      // retrun drink 
      return rows;    
  };
  

  const getDrinkById = async (id) => {
      //  SELECT * FROM Drinks WHERE id = ?
      const { rows } = await pgData.query('SELECT * FROM  drinks WHERE Drink_id = $1', [id]);
      // retrun drink 
      return rows[0];
  };
const createDrink = async (type, name, picture_url, decsription, price) => {
        const { rows } = await pgData.query(`
          INSERT INTO drinks (type, name, picture_url, decsription, price)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *
        `, [type, name, picture_url, decsription, price]);
      return rows[0]
  }

module.exports = {
    getAllDrinks, createDrink, getDrinkById
} ;