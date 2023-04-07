const pgData = require("../pgData");

const createOrder = async ({
    tableId, tableName, total, note
})=>{
    const{rows} = await pgData.query(`
    INSERT INTO orders (table_id, table_name, total_price, note)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [ tableId, tableName,total, note]);


  return rows[0]
}

const getOrderById = async (id)=>{
    const {rows} = await pgData.query(`
    SELECT o_items.drink_name, o_items.quantity, o_items.item_price, orders.table_name
    FROM o_items
    JOIN orders on o_items.order_id=orders.order_id
    WHERE orders.order_id= $1
    `,[id]);
    return rows

}

const getAllOrders = async () =>{
    const {rows} = await pgData.query('SELECT * FROM orders')
    return rows;
}

const getActiveOrderByTableId = async (tableId)=>{
    const {rows} = await pgData.query(`
    SELECT *
    FROM orders
    WHERE
        orders.table_id= $1
        AND orders.status <> $2
    `,[tableId, 'paid']);
    if (rows.length == 0) {
        return null;
    }
    return rows[0];
}

const updateStatus = async (orderId, status)=>{
    const {rows} = await pgData.query(`
    UPDATE orders
    SET orders.status = s1
    WHERE order_id = $2;
    `,[`${status}`,orderId]);
    return rows[0];

}

module.exports = {
    createOrder,
    getOrderById,
    getActiveOrderByTableId,
    getAllOrders,
    updateStatus
} ;
