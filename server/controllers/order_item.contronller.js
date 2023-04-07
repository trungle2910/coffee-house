const { clearScreenDown } = require("readline");
const  orderModel = require("../models/Order.js")
const  orderItemModel = require("../models/Order_Item.js")
const  tableModel = require("../models/Tables.js")

  //  get order by id
const  createOrderItem = async (req, res, next) => {
    const {
      tableId,
    } = req.params;
    const { 
      drinkId,
      drinkName,
      quantity,
      itemPrice } = req.body;
    try {
      let currentOrder = orderModel.getActiveOrderByTableId(tableId);
      if (currentOrder === null) {
        const tableData = tableModel.getById(tableId);
        currentOrder = orderModel.createOrder({ tableId, tableName: tableData.name, total: 0, note: "" });
      }
      const orderItem = orderItemModel.createOrderItem({
        orderID: currentOrder.id,
        drinkId,
        drinkName,
        quantity,
        itemPrice
      })
      if (!orderItem) {
        return res.status(404).json({ message: `can not create order item` });
      }
      res.json(orderItem);
    } catch (err) {
      console.error(`Error getting order with id ${id}:`, err);
      res.status(500).json({ message: `Failed to get order with id ${id}` });
    }
  };

module.exports = {createOrderItem}
