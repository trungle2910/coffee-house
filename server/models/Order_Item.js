const pgData = require("../pgData");

const createOrderItem = async ({
  orderId, drinkId,drinkName,quantity,itemPrice
}) =>{
  const {rows} = pgData.query(`
  INSERT INTO  o_items (order_id,drink_id,drink_name,quantity,item_price)
  VALUE ($1,$2,$3,$4,$5)
  RETURNING *
  `,[order_id, drinkId, drinkName, quantity, itemPrice])
  return rows[0]
}

module.exports = {
  createOrderItem
};
