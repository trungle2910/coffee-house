const express = require("express");
const router = express.Router();
const userController =  require ("../controllers/user.controller.js");

/**
 * **
 * @route GET /user/:id
 * @description Get user by ID
 * @access Public
*/
router.get("/:id", userController.getUserById);
/**
 * **
 * @route POST /user
 * @description create new user
 * @access Public
*/
router.post("/", userController.createUser);

module.exports = router;
