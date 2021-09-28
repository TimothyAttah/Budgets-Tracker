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
      const users = await User.query('SELECT * FROM users WHERE userId = $1', [email])
      if (users.rows.length !== 0)
        return res.status(422).json({ error: 'User with that email already exists' });
      
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.query(
        'INSERT INTO users (firstName, lastName, email, password) VALUES($1, $2, $3, $4) RETURNING *',
        [firstName, lastName, email, hashedPassword]
      )
      res.status(200).json({ message: 'Signup successfully', user: user.rows[0] });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({error: err})
    }
  }
}

module.exports = authControllers;
