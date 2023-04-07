const express = require("express");
const router = express.Router();
const tableController =  require ("../controllers/table.controller.js");

/**
 * **
 * @route GET /table/:id
 * @description Get table by ID
 * @access Public
*/
router.get("/:id", tableController.getTableById);
/**
 * **
 * @route POST /table
 * @description create new table
 * @access Public
*/
router.post("/", tableController.createTable);

module.exports = router;
