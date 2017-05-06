import { List } from '../plugins/aliyun_ECS'

let getECSList = async (config) => {
  return List()
}

export default (ctx) => {
  switch (ctx.params.action) {
    case 'list': {
      return getECSList(ctx.request.body.config).then(result => { ctx.body = result })
    }
  }
}
