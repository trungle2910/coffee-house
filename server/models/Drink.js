const pgData = require("../pgData");

const getAllDrinks = async () => {
    const pgcoffee = await pgData.connect();
      // Thực hiện truy vấn SELECT * FROM Drinks
      const {rows} = await pgcoffee.query('SELECT * FROM  public.drinks');
      // Trả về tất cả drink 
      return rows;    
  };
  
  // Hàm để lấy một drink theo id
  const getDrinkById = async (id) => {
      // Thực hiện truy vấn SELECT * FROM Drinks WHERE id = ?
      const { rows } = await pgData.query('SELECT * FROM  public.drinks WHERE id = $1', [id]);
      // Trả về drink 
      return rows[0];
  };
const createDrink = async (type, name, picture_url, decsription, price) => {
        const { rows } = await pgData.query(`
          INSERT INTO public.drinks (type, name, picture_url, decsription, price)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *
        `, [type, name, picture_url, decsription, price]);
      return rows[0]
  }

module.exports = {
    getAllDrinks, createDrink, getDrinkById
} ;