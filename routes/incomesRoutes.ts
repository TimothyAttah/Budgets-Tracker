const incomesRouter = require('express').Router();
const incomesAuth = require('../middlewares/auth');
const incomeController = require('../controllers/incomesController');

incomesRouter.post('/create', incomesAuth, incomeController.createIncomes);


module.exports = incomesRouter;
