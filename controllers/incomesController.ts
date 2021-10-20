const Incomes = require('../config/db');

const incomeControllers = {
  createIncomes: async (req: any, res: any) => {
    try {
      const { content, value } = req.body;
      if (!content || !value)
        return res.status(422).json({ error: 'Please enter all fields' });
      const incomes = await Incomes.query(
        'INSERT INTO incomes(userId, content, value ) VALUES($1,$2,$3) RETURNING *',
        [req.user.id, content, value]
      );
      res.status(200).json({ message: 'New income added', results: incomes.rows[0] });
    } catch (err) {
      console.log(err.message)
      res.status(500).json({error: err})
    }
  },
  getIncomes: async (req: any, res: any) => {
    try {
      const incomes = await Incomes.query(
        'SELECT * FROM users LEFT JOIN incomes ON users.userId = incomes.userId WHERE users.userId = $1 ',
        [req.user.id]
      );
      res.status(200).json({ incomes: incomes.rows });
    } catch (err) {
      console.log(err.message);
			res.status(500).json({ error: err });
    }
  },
  updateIncomes: async (req: any, res: any) => {
    try {
      const { content, value } = req.body;
      const { id } = req.params;
      const incomes = await Incomes.query(
        'UPDATE incomes SET (content, value) = ($1,$2) WHERE incomesId = $3 AND userId = $4 RETURNING *',
        [content, value, id, req.user.id]
      );
      if (incomes.rows.length === 0)
        return res
					.status(403)
          .json({ error: 'This income is not yours. Authorization denied.' });
      	res.status(200).json({
					message: 'Income updated successfully',
					results: incomes.rows[0],
				});
    } catch (err) {
      console.log(err.message);
			res.status(500).json({ error: err });
    }
  },
  deleteIncomes: async (req: any, res: any) => {
    try {
      	const { id } = req.params;
				const deleteIncome = await Incomes.query(
					'DELETE FROM incomes WHERE incomesId = $1 AND userId = $2 RETURNING *',
					[id, req.user.id]
        );
      if (deleteIncome.rows.length === 0) {
				return res
					.status(403)
					.json({ error: 'This Income is not yours. Authorization denied.' });
			}
			res.status(200).json({
				message: 'Income deleted successfully',
				results: deleteIncome.rows[0],
			});
    } catch (err) {
      console.log(err.message);
			res.status(500).json({ error: err });
    }
  }
}

module.exports = incomeControllers;