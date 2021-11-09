const userModel = require('../models/userModel');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userModel.find({},{_id:0,name:1,email:1});
        res.status(200).json({users});
    },
    getUserById : async(req, res) => {
        const users = await userModel.findById(req.params.id,{_id:0,name:1,email:1});
        res.status(200).json({users});
    }
}