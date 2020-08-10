/*
 * @Author: Paul.Tse 
 * @Date: 2020-08-10
 * @Last Modified by: Paul.Tse 
 * @Last Modified time: 2020-08-10
 * @Description: user api
 */

 const passport = require('../utils/passport');

 const get = async(ctx, next) => {
     ctx.status = 200;
     ctx.body = {
         msg: 'Get request!',
         data: {
             data: ctx.request.query
         }
     }
 }

 const post = async(ctx, next) => {
     ctx.status =200;
     ctx.body = {
        msg: 'Post request!',
        data: {
            data: ctx.request.body
        }
     }
 }

 // Login
const login = async(ctx, next) => {
    const req = ctx.request.body;

    let user = undefined;
     
     if(user === 'paul') {
         user = 'paul';
     }

     if(!user) {
        ctx.status = 200;
        ctx.body = {
            code: 0,
            msg: 'Account or Password error!'
        }
     }

     const match = await passport.validate(req.password);

     ctx.status = 200;

     if(match) {
         ctx.body = {
             code: 1,
             msg: 'Login success',
             data: user
         }
         return;
     }

     ctx.body = {
         code: 0,
         msg: 'Account or Password error!'
     }
}

module.exports = {
    get,
    post,
    login
}