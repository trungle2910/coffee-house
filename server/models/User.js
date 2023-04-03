const pgData = require("../pgData");
 // Hàm để lấy một user theo id
 const getUserById = async (id) => {
    // Thực hiện truy vấn SELECT * FROM Users WHERE id = ?
    const { rows } = await pgData.query('SELECT * FROM  public.users WHERE user_id = $1', [id]);
    // Trả về user 
    return rows[0];
};
const createUser = async ( name) => {
      const { rows } = await pgData.query(`
        INSERT INTO public.users (name)
        VALUES ($1)
        RETURNING *
      `, [name]);
    return rows[0]
}

module.exports = {
    getUserById,createUser
} ;