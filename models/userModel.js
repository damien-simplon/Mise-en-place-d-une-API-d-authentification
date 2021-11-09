const mongoose = require('mongoose');

// create a user schema with a name field and a password field and a unique email field
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"]
    },
    email: {
        type: String,
        required: [true,"email is required"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Merci de fournir un email valide',
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true,"password is required"]
    },
    admin: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('User', userSchema);