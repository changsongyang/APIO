import {
  QcloudCVM as QcloudCVMConfig
} from '../../config'
import Api from '../../lib/api'
var Capi = require('qcloudapi-sdk')

// 通过构造函数传入的参数将作为默认配置
var capi = new Capi({
  SecretId: QcloudCVMConfig.SecretId,
  SecretKey: QcloudCVMConfig.SecretKey,
  serviceType: 'account'
})

// 传入配置以覆盖默认项
// capi.request({
//   Region: 'sh',
//   Action: 'DescribeInstances'
//   // otherParam: 'otherParam'
// }, {
//   serviceType: 'cvm'
// }, function (error, data) {
//   if (error) {
//     console.log(error)
//   }
//   console.log(data)
// })

// 生成 querystring
var qs = capi.generateQueryString({
  Region: 'gz',
  Action: 'DescribeInstances',
  otherParam: 'otherParam'
}, {
  serviceType: 'cvm'
})

export let List = async () => {
  capi.request({
    Region: 'sh',
    Action: 'DescribeInstances'
    // otherParam: 'otherParam'
  }, {
    serviceType: 'cvm'
  }, function (error, data) {
    if (error) {
      console.log(error)
    }
    console.log(data)
  })
  // let result = null
  // try {
  //   let params = qs
  //   console.log(params)
  //   result = await Api.get('', params)
  // } catch (err) {
  //   return {
  //     status: err.response.status,
  //     result: {
  //       errInfo: '请求错误！',
  //       errMessage: err.response.data
  //     }
  //   }
  // }
  //
  // return result.data
}
