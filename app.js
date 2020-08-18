const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const mount = require('koa-mount');
const path = require('path');

const addTrailingSlashes = require('koa-add-trailing-slashes');

const app = new Koa();
const router = new Router();

app.use(addTrailingSlashes());
app.use(mount('/', serve(path.join(__dirname, 'public'))));

/*router.post('/login', (ctx) => {
    console.log(ctx);
    //ctx.body = '<h1>Ok this is epic</h1>';
    router.redirect('/login', '/');
    console.log(ctx);
});*/

router.post('/login', (ctx) => {
    console.log('Posting');
    console.log(ctx.request);
    ctx.body = ctx.request.body;
    ctx.body = '<h1>Ok this is epic</h1>';
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('App started');
});