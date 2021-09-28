const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../config/db');

const authControllers = {
	signUp: async (req: any, res: any) => {
		try {
			const userData = req.body;
			const { firstName, lastName, email, password } = userData;
			if (!firstName || !lastName || !email || !password)
				return res.status(422).json({ error: 'Please enter all fields.' });
			const users = await User.query('SELECT * FROM users WHERE email = $1', [
				email,
			]);
			if (users.rows.length !== 0)
				return res
					.status(422)
					.json({ error: 'User with that email already exists' });

			const hashedPassword = await bcrypt.hash(password, 12);
			const user = await User.query(
				'INSERT INTO users (firstName, lastName, email, password) VALUES($1, $2, $3, $4) RETURNING *',
				[firstName, lastName, email, hashedPassword]
			);
			res
				.status(200)
				.json({ message: 'Signup successfully', user: user.rows[0] });
		} catch (err) {
			console.log(err.message);
			return res.status(500).json({ error: err });
		}
	},
	signIn: async (req: any, res: any) => {
		try {
			const userData = req.body;
			const { email, password } = userData;
			if (!email || !password)
				return res.status(422).json({ error: 'Please enter all fields.' });
			const users = await User.query('SELECT * FROM users WHERE email = $1', [
				email,
			]);
			if (users.rows.length === 0)
				return res.status(422).json({ error: 'Wrong email or password ' });
			const comparePassword = await bcrypt.compare(
				password,
				users.rows[0].password
			);
			if (!comparePassword)
				return res.status(400).json({ error: 'Wrong password or email' });
			const payload = {
				user: { id: users.rows[0].userId },
			};
			const token = await jwt.sign(payload, process.env.JWT_SECRET, {
				expiresIn: '1day',
			});
			res
				.status(201)
				.json({
					message: 'Signin successfully',
					token,
					results: users.rows[0],
				});
		} catch (err) {
			console.log(err.message);
			return res.status(500).json({ error: err });
		}
	},
	getUsers: async (req: any, res: any) => {
		try {
			const savedUsers = await User.query('SELECT * FROM users');
			res.status(200).json(savedUsers.rows);
		} catch (err) {
			res.status(500).json({ error: err.message });
			console.error(err);
		}
	},
};

module.exports = authControllers;
