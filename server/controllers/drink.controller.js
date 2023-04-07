const { clearScreenDown } = require("readline");
const  drinkModel = require("../models/Drink.js")

const getAllDrinks = async (req, res, next) => {
    try {
      const drinks = await drinkModel.getAllDrinks();
      //return dirnk like json
      console.log(drinks)
      res.json(drinks)
    } catch (err) {
      console.error('Error getting all Drinks:', err);
      res.status(500).json({ message: 'Failed to get all Drinks' });
    }
  };

  //  get drink by id
  const getDrinkById = async (req, res, next) => {
    const { id } = req.params;
    try {
      //  SELECT * FROM Drinks WHERE id = ?
      const drink = await drinkModel.getDrinkById(id);
      // if drink = null
      if (!drink) {
        return res.status(404).json({ message: `Drink with id ${id} not found` });
      }
      // return dirnk like json
      res.json(drink);
    } catch (err) {
      console.error(`Error getting Drink with id ${id}:`, err);
      res.status(500).json({ message: `Failed to get Drink with id ${id}` });
    }
  };
const createDrink = async (req, res, next) => {
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
