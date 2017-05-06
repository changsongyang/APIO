import Api from '../../lib/api'
import moment from 'moment-timezone'
import Signature from './signature'

import {
  AliyunEmail as AliyunEmailConfig,
  System as SystemConfig
} from '../../config'

moment.locale(SystemConfig.System_country) // 设置当地时间格式

let signature = new Signature()

export default () => {
  console.log('阿里云Email插件已加载')
}

const QueryURL = 'https://dm.aliyuncs.com' // 请求地址

export let SendTest = async () => {
  let CommonParams = {
    Format: 'JSON', // 返回值的类型，支持JSON与XML。默认为XML
    Version: AliyunEmailConfig.Version, // API版本号
    AccessKeyId: AliyunEmailConfig.AccessKeyId,
    SignatureMethod: 'HMAC-SHA1',
    Timestamp: moment().utc().format(), // 时间戳
    SignatureVersion: '1.0', // 签名算法版本，目前版本是1.0
    SignatureNonce: (Math.random() * 900000 | 100000).toString() // 唯一随机数，用于防止网络重放攻击。用户在不同请求间要使用不同的随机数值
  }

  let SingleSendMail = {
    Action: 'SingleSendMail', // 操作接口名，系统规定参数，取值：SingleSendMail
    AccountName: AliyunEmailConfig.SingleSendMail.AccountName, // 管理控制台中的发信地址 (默认首选地址)
    ReplyToAddress: AliyunEmailConfig.SingleSendMail.ReplyToAddress, // 是否使用管理控制台中配置的回信地址（状态必须是验证通过）
    AddressType: AliyunEmailConfig.SingleSendMail.AddressType, // 取值范围0~1: 0为随机账号;1为发信地址
    ToAddress: 'a@wyr.me',
    FromAlias: '轶哥系统',
    Subject: '测试自制发信API',
    HtmlBody: '<h1>Ok</h1>'
  }

  let params = Object.assign(CommonParams, SingleSendMail)

  params.Signature = signature._getSignature('POST', params, AliyunEmailConfig.AccessKeySecret) // 签名结果字符串

  let result = null
  try {
    result = await Api.post(QueryURL, params)
  } catch (err) {
    return {
      status: err.response.status,
      result: {
        errInfo: '请求错误！',
        errMessage: err.response.data
      }
    }
  }

  return result.data
}
