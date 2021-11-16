require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.API_PORT || 3500;
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const registerLoginRoutes = require('./routes/registerLoginRoutes');

// express url encoded
app.use(express.urlencoded({ extended: false }));

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

app.use('/api/users/', userRoutes);

app.use('/api/', registerLoginRoutes);