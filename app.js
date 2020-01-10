const Koa = require('koa');
const Router = require('koa-router');
const onerror = require('koa-onerror');
const cors = require('@koa/cors');
const koaParser = require('koa-bodyparser');
const requireDirectory = require('require-directory');
require('./db/sequelize.db');
const app = new Koa();

onerror(app);

app.use(koaParser());

app.use(
  cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Content-Type'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'UPDATE', 'DELETE'],
    allowHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'Access-Control-Allow-Origin',
      'token',
      'username'
    ]
  })
);

requireDirectory(module, './routes', {
  visit: router => {
    if ( router instanceof Router ) {
      app.use(router.routes(), router.allowedMethods());
    }
  }
});

app.listen(6000, () => {
  console.log('server is starting at port 6000');
});