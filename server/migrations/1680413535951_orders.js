/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('orders',{
        order_id: "id",
        user_id:{type: 'integer', references:'users', onDelete:'cascade', notNull:'true'},
        total_price:{type:'integer', notNull:'true'},
        status:{type: 'varchar(50)', notNull:'true', default:'pending'},
        created_at: {type: "timestamp", notNull: 'true', default: pgm.func("current_timestamp")},
    })
};

exports.down = pgm => {};
