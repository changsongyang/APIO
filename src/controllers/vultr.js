import { List } from '../plugins/vultr'

let getList = async (config) => {
  return List()
}

export default (ctx) => {
  switch (ctx.params.action) {
    case 'list': {
      return getList(ctx.request.body.config).then(result => { ctx.body = result })
    }
  }
}
