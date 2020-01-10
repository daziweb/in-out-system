const Router = require('koa-router');
const router = new Router();
const controller = require('../controllers/index');

router.prefix('/inout');

router.get('/list', controller.list);

module.exports = router;


