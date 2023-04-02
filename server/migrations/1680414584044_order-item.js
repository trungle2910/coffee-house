/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('order_drink',{
        order_item_id: 'id',
        order_id:{type:'integer', references:'orders', onDelete:'cascade'},
        drink_id:{type:'integer', references:'drinks', onDelete:'cascade'},
        quantity: { type: "integer", notNull: true },
        price: { type: "integer", notNull: true },
        note:{type: 'text'},
    })
};

exports.down = pgm => {};
