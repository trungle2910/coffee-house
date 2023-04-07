const { clearScreenDown } = require("readline");
const  TableModel = require("../models/Tables.js")

  //  để lấy một Table theo id
const   getTableById = async (req, res, next) => {
    const { id } = req.params;
    try {
      // T SELECT * FROM Tables WHERE id = ?
      const Table = await TableModel.getTableById(id);
      // if table = null 404
      if (!Table) {
        return res.status(404).json({ message: `Table with id ${id} not found` });
      }
        //  Table like JSON
        res.json(Table);

    } catch (err) {
      console.error(`Error getting Table with id ${id}:`, err);
      res.status(500).json({ message: `Failed to get Table with id ${id}` });
    }
  };
const createTable = async (req, res, next) => {
    try {
        const {name} = req.body;
        const Table = await TableModel.createTable(name);
        res.status(201).json(Table);
      } catch (err) {
        console.error('Error creating Table:', err);
        next(err);
      }
  }

module.exports = { getTableById, createTable} ;
