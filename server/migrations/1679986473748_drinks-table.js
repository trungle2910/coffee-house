/* eslint-disable camelcase */

exports.shorthands = undefined;
// i use  node-pg-migrate
exports.up = pgm => {
    pgm.createTable('drinks',{
        id: 'id',
        type:{type:"varchar(500)", notNull: "true"},
        name: {type:"varchar(500)", notNull:"true"},
        picture_url:{type:"text", notNull:"true"},
        decsription:{type:"text", notNull:"true"},
        price:{type:"integer", notNull:"true"}
    });
};

exports.down = pgm => {};
