require('dotenv').config({ path: './config/.env' });
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/incomes', require('./routes/incomesRoutes'));
app.use('/api/v1/expenses', require('./routes/expensesRoutes'));


const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}


app.listen(PORT, () => {
  console.log(`Server is set and running on port: ${PORT}`);
});
