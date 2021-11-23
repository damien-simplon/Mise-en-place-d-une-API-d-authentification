require("dotenv").config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies;
    console.log(token);

    if (token) {

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            res.cookie('token', token, { httpOnly: true });
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = verifyToken;