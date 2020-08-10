/*
 * @Author: Paul.Tse 
 * @Date: 2020-08-10
 * @Last Modified by: Paul.Tse 
 * @Last Modified time: 2020-08-10
 * @Description: user router
 */

const Router = require('koa-router');
const router = new Router();
const user_controller = require('../../app/controllers/userController');

router.post('/login',user_controller.login);

module.exports = router;