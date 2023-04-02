/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users',{
        user_id: "id",
        name: {type:'varchar(50)', notNull:"true"}
    })
};

exports.down = pgm => {};
