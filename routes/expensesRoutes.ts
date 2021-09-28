const expensesRouter = require('express').Router();
const expensesAuth = require('../middlewares/auth');
const expensesController = require('../controllers/expensesController');

expensesRouter.post('/create', expensesAuth, expensesController.createExpenses);

expensesRouter.get('/', expensesAuth, expensesController.getExpenses);

expensesRouter.get('/:id', expensesAuth, expensesController.getExpenses);

expensesRouter.put('/:id/update', expensesAuth, expensesController.updateExpenses);

expensesRouter.delete(
	'/:id/delete',
	expensesAuth,
	expensesController.deleteExpenses
);

module.exports = expensesRouter;
