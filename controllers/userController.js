const userModel = require('../models/userModel');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userModel.find({},{name:1,email:1});
        res.status(200).json({users});
    },
    getUserById : async(req, res) => {
        const users = await userModel.findById(req.params.id,{name:1,email:1});
        res.status(200).json({users});
    },
    postUser : async(req, res) => {
        const user = await userModel.create(req.body);
        res.status(201).json({user});
    },
    updateUser : async(req, res) => {
        const user = await userModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({user});
    },
    deleteUser : async(req, res) => {
        const user = await userModel.findByIdAndDelete(req.params.id);
        res.status(204).json({user});
    }
}