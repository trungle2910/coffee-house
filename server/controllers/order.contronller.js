const { clearScreenDown } = require("readline");
const  orderModel = require("../models/Order.js")

  //  get order by id
const  getOrderById = async (req, res, next) => {
    const { id } = req.params;
    try {
      //  SELECT * FROM orders WHERE id = ?
      const order = await orderModel.getOrderById(id);
      // if order = null
      if (!order) {
        return res.status(404).json({ message: `order with id ${id} not found` });
      }
      // return dirnk like json
      res.json(order);
    } catch (err) {
      console.error(`Error getting order with id ${id}:`, err);
      res.status(500).json({ message: `Failed to get order with id ${id}` });
    }
  };
const  getAllOrders = async (req, res, next) => {
    try {
      const orders = await orderModel.getAllOrders();
      //return all orders like json
      console.log(orders)
      res.json(orders)
    } catch (err) {
      console.error('Error getting all orders:', err);
      res.status(500).json({ message: 'Failed to get all orders' });
    }
  };

const updateStatus = async(req, res, next) =>{
  const orderId = req.params.id;
  const {status} = req.body
  try {
    const update = await orderModel.updateStatus(orderId,status);
    res.json(update)
  } catch (err) {
    console.error('ERROR :', err);
    res.status(500).json({ message: 'Failed to update' });
  }}


module.exports = {getOrderById, getAllOrders,updateStatus};
