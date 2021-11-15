const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userModel.find({},{name:1,email:1});
        res.status(200).json({users});
    },
    getUserById : async(req, res) => {
        const users = await userModel.findById(req.params.id,{name:1,email:1});
        res.status(200).json({users});
    },
    createUser : async(req, res) => {
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
    },
    register : async(req, res) => {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({msg: 'Please enter all fields'});
        }
        
        const alreadyExists = await userModel.findOne({email});

        if(alreadyExists) {
            return res.status(400).json({msg: 'User already exists'});
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        const token = jwt.sign(
            { userId: user._id, email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' },
        );

        user.token = token;

        res.status(201).json({user});
        
    }
}