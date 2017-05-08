import svgCaptcha from 'svg-captcha'
import Redis from 'ioredis'
import Chance from 'chance'

let redis = process.env.NODE_ENV !== 'production' ? new Redis() : new Redis(6379, 'redis')
let chance = new Chance()

export let get = async function (ctx) {
  let captcha = svgCaptcha.createMathExpr({
    noise: 10
  })
  let key = 'captcha_' + chance.guid()
  redis.set(key, captcha.text, 'EX', 20)
  // ctx.set('Content-Type', 'image/svg+xml')
  ctx.body = {
    status: 1,
    result: {
      key: key,
      captcha: captcha.data
    }
  }
}

export let checkCaptcha = async function (key, value) {
  if (value === (await redis.get(key))) {
    return true
  }
  return false
}
