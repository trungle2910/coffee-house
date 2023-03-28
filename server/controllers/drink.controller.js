const { clearScreenDown } = require("readline");
const  drinkModel = require("../models/Drink.js")

getAllDrinks = async (req, res, next) => {
    try {
      const drinks = await drinkModel.getAllDrinks();
      //tra ve drink duoi dang json
      console.log(drinks)
      res.json(drinks)
    } catch (err) {
      console.error('Error getting all Drinks:', err);
      res.status(500).json({ message: 'Failed to get all Drinks' });
    }
  };
  
  //  để lấy một drink theo id
  getDrinkById = async (req, res, next) => {
    const { id } = req.params;
    try {
      // Thực hiện truy vấn SELECT * FROM Drinks WHERE id = ?
      const drink = await drinkModel.getDrinkById(id);
      // Nếu không tìm thấy drink thì trả về lỗi 404
      if (!drink) {
        return res.status(404).json({ message: `Drink with id ${id} not found` });
      }
      // Trả về drink dưới dạng JSON
      res.json(drink);
    } catch (err) {
      console.error(`Error getting Drink with id ${id}:`, err);
      res.status(500).json({ message: `Failed to get Drink with id ${id}` });
    }
  };
createDrink = async (req, res, next) => {
    try {
        const { type, name, picture_url, decsription, price} = req.body;
        const drink = await drinkModel.createDrink(type, name, picture_url, decsription, price);
        res.status(201).json(drink);
      } catch (err) {
        console.error('Error creating Drink:', err);
        next(err);
      }
  }

module.exports = {getAllDrinks, getDrinkById, createDrink} ;
