const pgData = require("../pgData");
 // find table by id
 const getTableById = async (id) => {
    const { rows } = await pgData.query('SELECT * FROM  user_tables WHERE table_id = $1', [id]);
    return rows[0];
};
const createTable= async ( name) => {
      const { rows } = await pgData.query(`
        INSERT INTO user_tables (name)
        VALUES ($1)
        RETURNING *
      `, [name]);
    return rows[0]
}

module.exports = {
  getTableById,createTable
} ;