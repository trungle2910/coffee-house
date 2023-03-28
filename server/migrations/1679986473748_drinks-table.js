/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('drinks',{
        id: 'id',
        type:{type:"varchar(500)", notNull: "true"},
        name: {type:"varchar(500)", notNull:"true"},
        pictureURL:{type:"text", notNull:"true"},
        decsription:{type:"text", notNull:"true"},
        price:{type:"integer", notNull:"true"}
    });
};

exports.down = pgm => {};
