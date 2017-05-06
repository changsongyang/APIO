import { List,stop,start,restart,change} from '../plugins/aliyun_ECS'

let getECSList = async (config) => {
  return List()
}

let stopECSInstance = async (config) => {
  return stop()
}
let startECSInstance = async (config) => {
  return start()
}

let restartECSInstance = async (config) => {
  return restart()
}
let changeECSInstance = async (config) => {
  return change(config)
}
export default (ctx) => {
  switch (ctx.params.action) {
    case 'list': {
      return getECSList(ctx.request.body.config).then(result => { ctx.body = result })
    };
    case 'stop':{
    	return stopECSInstance(ctx.request.body.config).then(result => { ctx.body = result })
    };
     case 'start':{
    	return startECSInstance(ctx.request.body.config).then(result => { ctx.body = result })
    };
    case 'restart':{
    		return restartECSInstance(ctx.request.body.config).then(result => { ctx.body = result })
    };
    case 'change':{
    		return changeECSInstance(ctx.request.body.fields.config).then(result => { ctx.body = result })
    }
  }
}
