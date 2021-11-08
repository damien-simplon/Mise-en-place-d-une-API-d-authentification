const userModel = require('../models/userModel');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userModel.find().select('-password');
        res.status(200).json({users});
    },
    getUserById : async(req, res) => {
        const users = await userModel.findById(req.params.id).select('-password');
        res.status(200).json({users});
    }
}