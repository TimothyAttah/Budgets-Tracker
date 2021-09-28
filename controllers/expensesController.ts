const Expenses = require('../config/db');

const expensesControllers = {
	createExpenses: async (req: any, res: any) => {
		try {
			const { content, value } = req.body;
			if (!content || !value)
				return res.status(422).json({ error: 'Please enter all fields' });
			const expenses = await Expenses.query(
				'INSERT INTO expenses(userId, content, value ) VALUES($1,$2,$3) RETURNING *',
				[req.user.id, content, value]
			);
			res
				.status(200)
				.json({ message: 'New expenses added', results: expenses.rows[0] });
		} catch (err) {
			console.log(err.message);
			res.status(500).json({ error: err });
		}
	},
	getExpenses: async (req: any, res: any) => {
		try {
			const expenses = await Expenses.query(
				'SELECT * FROM users LEFT JOIN expenses ON users.userId = expenses.userId WHERE users.userId = $1 ',
				[req.user.id]
			);
			res.status(200).json({ expenses: expenses.rows });
		} catch (err) {
			console.log(err.message);
			res.status(500).json({ error: err });
		}
  },
  getMyExpenses: async (req: any, res: any) => {
    try {
      const expenses = await Expenses.query(
        'SELECT * FROM expenses WHERE userId = $1',
        [req.user.id]
      )
      	res.status(200).json({
					total: expenses.rows.length,
					expenses: expenses.rows,
				});
    } catch (err) {
      res.status(500).json({ error: err.message });
			console.error(err);
    }
  },
	updateExpenses: async (req: any, res: any) => {
		try {
			const { content, value } = req.body;
			const { id } = req.params;
			const expenses = await Expenses.query(
				'UPDATE expenses SET (content, value) = ($1,$2) WHERE expensesId = $3 AND userId = $4 RETURNING *',
				[content, value, id, req.user.id]
			);
			if (expenses.rows.length === 0)
				return res
					.status(403)
					.json({ error: 'This expenses is not yours. Authorization denied.' });
			res.status(200).json({
				message: 'Expenses updated successfully',
				results: expenses.rows[0],
			});
		} catch (err) {
			console.log(err.message);
			res.status(500).json({ error: err });
		}
	},
	deleteExpenses: async (req: any, res: any) => {
		try {
			const { id } = req.params;
			const deleteExpenses = await Expenses.query(
				'DELETE FROM expenses WHERE expensesId = $1 AND userId = $2 RETURNING *',
				[id, req.user.id]
			);
			if (deleteExpenses.rows.length === 0) {
				return res
					.status(403)
					.json({
						error: 'This expenses is not yours. Authorization denied.',
					});
			}
			res.status(200).json({
				message: 'Income deleted successfully',
				results: deleteExpenses.rows[0],
			});
		} catch (err) {
			console.log(err.message);
			res.status(500).json({ error: err });
		}
	},
};

module.exports = expensesControllers;
