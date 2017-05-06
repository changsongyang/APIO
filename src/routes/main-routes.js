import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // HOME 路由
  .all('/upload', controllers.upload.default)
  .get('/api/:name', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delect)
  .post('/ecs/:action', controllers.ecs.default)
  .post('/cvm/:action', controllers.cvm.default)
  .post('/vultr/:action', controllers.vultr.default)

module.exports = router
