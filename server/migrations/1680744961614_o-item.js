/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('o_items',{
        order_item_id: 'id',
        order_id:{type:'integer', references:'orders', onDelete:'cascade'},
        drink_id:{type:'integer', references:'drinks', onDelete:'cascade'},
        drink_name:{type:"varchar(500)", notNull:"true"},
        quantity: { type: "integer", notNull: true },
        item_price: { type: "integer", notNull: true },
    })
};

exports.down = pgm => {
    pgm.dropTable('o_items')

};
