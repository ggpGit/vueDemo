/*
 * @Author: Paul.Tse 
 * @Date: 2020-08-10
 * @Last Modified by: Paul.Tse 
 * @Last Modified time: 2020-08-10
 * @Description: entry file
 */ 

const http = require('http');
const https = require('https');
const bodyParser = require('koa-bodyparser');
const Koa = require('koa');

const app = new Koa();

app.use(bodyParser());

// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async ctx => {
    ctx.body = 'Hello World';
});

const userRouter = require('./routes/api/userRouter');

app.use(userRouter.routes()).use(userRouter.allowedMethods());

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);