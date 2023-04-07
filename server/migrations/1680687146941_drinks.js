/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('drinks',{
        drink_id: 'id',
        type:{type:"varchar(500)", notNull: "true"},
        name: {type:"varchar(500)", notNull:"true"},
        picture_url:{type:"text", notNull:"true"},
        decsription:{type:"text", notNull:"true"},
        price:{type:"integer", notNull:"true"}
    });
};

exports.down = pgm => {
    pgm.dropTable('drinks')

};
