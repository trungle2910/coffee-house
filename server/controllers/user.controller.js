const { clearScreenDown } = require("readline");
const  UserModel = require("../models/User.js")

  //  để lấy một User theo id
  getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
      // Thực hiện truy vấn SELECT * FROM Users WHERE id = ?
      const User = await UserModel.getUserById(id);
      // Nếu không tìm thấy User thì trả về lỗi 404
      if (!User) {
        return res.status(404).json({ message: `User with id ${id} not found` });
      }
        // Lưu thông tin user vào localStorage
        // Trả về User dưới dạng JSON
        res.json(User);
        // localStorage.setItem('user_id', User.user_id);
        // localStorage.setItem('name', User.name);
    } catch (err) {
      console.error(`Error getting User with id ${id}:`, err);
      res.status(500).json({ message: `Failed to get User with id ${id}` });
    }
  };
createUser = async (req, res, next) => {
    try {
        const {name} = req.body;
        const User = await UserModel.createUser(name);
        res.status(201).json(User);
      } catch (err) {
        console.error('Error creating User:', err);
        next(err);
      }
  }

module.exports = { getUserById, createUser} ;
