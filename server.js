require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.API_PORT || 3500;
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
var jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

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

app.post('/api/login/', (req, res) => {
	// Read username and password from request body
	const { email, password } = req.body;

	// Filter user from the users array by email and password
	const user = user.find((u) => {
		return u.email === email && u.password === password;
	});

	if (user) {
		// Generate an access token
		const accessToken = jwt.sign({ email: user.email, admin: user.admin }, accessTokenSecret);

		res.json({
			accessToken,
		});
	} else {
		res.send('Username or password incorrect');
	}
});
