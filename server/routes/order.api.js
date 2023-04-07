const express = require("express");
const router = express.Router();
const orderController =  require ("../controllers/order.contronller.js");

/**
 * **
 * @route GET /order/:id
 * @description Get order by ID
 * @access Public
*/
router.get("/:id", orderController.getOrderById);
/**
 * **
 * @route Put /order/:id
 * @description Put update order status by ID
 * @access Public
*/
router.put("/:id", orderController.updateStatus);
/**
 * **
 * @route GET /order
 * @description get all order
 * @access Public
*/
router.get("/", orderController.getAllOrders);

module.exports = router;
