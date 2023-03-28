const express = require("express");
const router = express.Router();
const drinkController =  require ("../controllers/drink.controller.js");

/**
 * **
 * @route GET /drink
 * @description Get all Drinks
 * @access Public
*/
router.get("/" ,drinkController.getAllDrinks);
/**
 * **
 * @route GET /drink/:id
 * @description Get Drink by ID
 * @access Public
*/
router.get("/:id", drinkController.getDrinkById);
/**
 * **
 * @route POST /drink
 * @description create new Drink
 * @access Public
*/
router.post("/", drinkController.createDrink);

module.exports = router;
