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

app.use(cors({credentials: true, origin: true}));

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