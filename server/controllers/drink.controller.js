
const {Pool} = require("pg");
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Coffe_House',
    password: `${process.env.PGPASS}`,
    port: 5432,
  });

pool.query(`
  CREATE TABLE IF NOT EXISTS drinks_cf.drinks(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    name VARCHAR(255),
    pictureURL TEXT,
    decsription TEXT,
    price INT
  )  
`)

const  drinkController ={}

drinkController.getAllDrinks = async (req, res, next) => {
    try {
      // Thực hiện truy vấn SELECT * FROM Drinks
      const { rows } = await pool.query('SELECT * FROM drinks_cf.drinks');
      // Trả về tất cả người dùng dưới dạng JSON
      res.json(rows);
    } catch (err) {
      console.error('Error getting all Drinks:', err);
      res.status(500).json({ message: 'Failed to get all Drinks' });
    }
  };
  
  // Hàm để lấy một người dùng theo id
  drinkController.getDrinkById = async (req, res, next) => {
    const { id } = req.params;
    try {
      // Thực hiện truy vấn SELECT * FROM Drinks WHERE id = ?
      const { rows } = await pool.query('SELECT * FROM drinks_cf.drinks WHERE id = $1', [id]);
      // Nếu không tìm thấy người dùng thì trả về lỗi 404
      if (!rows.length) {
        return res.status(404).json({ message: `Drink with id ${id} not found` });
      }
      // Trả về người dùng dưới dạng JSON
      res.json(rows[0]);
    } catch (err) {
      console.error(`Error getting Drink with id ${id}:`, err);
      res.status(500).json({ message: `Failed to get Drink with id ${id}` });
    }
  };
drinkController.createDrink = async (req, res, next) => {
    try {
        const { type, name, pictureURL, decsription, price} = req.body;
        const { rows } = await pool.query(`
          INSERT INTO drinks_cf.drinks (type, name, pictureURL, decsription, price)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *
        `, [type, name, pictureURL, decsription, price]);
        res.status(201).json(rows[0]);
      } catch (err) {
        console.error('Error creating Drink:', err);
        next(err);
      }
  }

module.exports = drinkController ;
