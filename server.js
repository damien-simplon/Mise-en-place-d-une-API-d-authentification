require('dotenv').config();

const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.API_PORT || 3500;
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const registerLoginRoutes = require('./routes/registerLoginRoutes');

// express url encoded
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://damien-api-jwt.herokuapp.com/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const start = async () => {
	try {
		await connectDB();
		app.listen(port, function (err) {
			if (err) console.log(err);
			console.log('Server listening on port : ' + port);
		});
	} catch (error) {
		console.log(error);
	}
};

start();

app.options('/api/users/', cors());
app.use('/api/users/', userRoutes);

app.options('/api/', cors());
app.use('/api/', registerLoginRoutes);