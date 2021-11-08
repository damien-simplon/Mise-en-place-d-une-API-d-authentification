const userModel = require('../models/userModel');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userModel.find();
        res.status(200).json({users});
    }
}