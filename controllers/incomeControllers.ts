const Incomes = require('../config/db');

const incomeControllers = {
  createIncomes: async (req: any, res: any) => {
    try {
      const { description, values } = req.body;
      if (!description || !values)
        return res.status(422).json({ error: 'Please enter all fields' });
      const incomes = await Incomes.query(
        'INSERT INTO incomes(user_id, description, values) VALUES($1, $2, $3) RETURNING * ',
        [req.user.id, description, values]
      );
      res.status(200).json({message: 'New income added', results: incomes.rows[0]})
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: err })
    }
  }
}

module.exports = incomeControllers;
