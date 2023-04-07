/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable(`orders`,{
        order_id: "id",
        table_id: {type: 'integer', notNull:"true", references:'user_tables', onDelete: 'cascade'},
        table_name:{type:'varchar(10)', notNull:'true'},
        status:{type: 'varchar(50)', notNull:'true', default:'pending'},
        total_price:{type:'integer',notNull:'true'},
        note:{type: 'text'},
        order_time: {type: "timestamp", notNull: 'true', default: pgm.func("current_timestamp")},
    })
};

exports.down = pgm => {
    pgm.dropTable('orders')
};
