/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable(`user_tables`,{
        table_id: "id",
        name: {type : 'varchar(10)', notNull:'true' },
    })
};

exports.down = pgm => {
    pgm.dropTable('user_tables')

};
