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

var corsOptions = {
	origin: true,
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

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

app.use('/api/users/', cors(corsOptions), userRoutes);

app.use('/api/', cors(corsOptions), registerLoginRoutes);