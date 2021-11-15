const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if(!token) {
        return res.status(403).json({
            message: 'No token provided.'
        });
    }

    try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
    } catch(err) {
        return res.status(500).json({
            message: 'Error while verifying token.'
        });
    }
    return next();
};

module.exports = verifyToken;