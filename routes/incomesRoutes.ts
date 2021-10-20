const incomesRouter = require('express').Router();
const incomesAuth = require('../middlewares/auth');
const incomeController = require('../controllers/incomesController');

incomesRouter.post('/create', incomesAuth, incomeController.createIncomes);

incomesRouter.get('/', incomesAuth, incomeController.getIncomes);

incomesRouter.put('/:id/update', incomesAuth, incomeController.updateIncomes);

incomesRouter.delete('/:id/delete', incomesAuth, incomeController.deleteIncomes);


module.exports = incomesRouter;
