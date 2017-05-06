import { List } from '../plugins/qcloud_CVM'

let getCVMList = async (config) => {
  return List()
}

export default (ctx) => {
  switch (ctx.params.action) {
    case 'list': {
      return getCVMList(ctx.request.body.config).then(result => { ctx.body = result })
    }
  }
}
