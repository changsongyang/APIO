import {
  QcloudCOS as QcloudCOSConfig
} from '../../config'
import crypto from 'crypto-js'

let sign = (str, secretKey) => {
  let sha1Res = crypto.HmacSHA1(str, secretKey) // 这里使用CryptoJS计算sha1值，你也可以用其他开源库或自己实现
  let strWordArray = crypto.enc.Utf8.parse(str)
  let resWordArray = sha1Res.concat(strWordArray)
  let res = resWordArray.toString(crypto.enc.Base64)
  return res
}

/**
 * 生成多次有效签名
 * @param  {[type]} expiration 过期时间（有效期，单位s）
 * @param  {[type]} bucket     [description]
 * @param  {[type]} filepath   [description]
 * @return {[type]}            可选
 */
export let createReusableSignature = (bucket, expiredTime = 1800) => {
  let Timestamp = parseInt(new Date().getTime() / 1000) // 时间戳

  if (expiredTime <= 7776000) {
    expiredTime = Timestamp + expiredTime
  } else {
    expiredTime = Timestamp + 7776000
  }

  // 拼接多次有效签名串
  let Original = `a=${QcloudCOSConfig.appid}&b=${bucket}&k=${QcloudCOSConfig.SecretId}&e=${expiredTime}&t=${Timestamp}&r=${(Math.random() * 900000 | 100000)}&f=`

  return sign(Original, QcloudCOSConfig.SecretKey)
}

/**
 * 生成单次有效签名
 * @param  {[type]} bucket   [description]
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
export let createNonreusableSignature = (bucket, filepath) => {
  var random = parseInt(Math.random() * Math.pow(2, 32))
  var now = parseInt(new Date().getTime() / 1000)
  var e = 0 // 单次签名 expire==0
  var Original = 'a=' + QcloudCOSConfig.appid + '&k=' + QcloudCOSConfig.SecretId + '&e=' + e + '&t=' + now + '&r=' + random + '&f=' + filepath + '&b=' + bucket

  return sign(Original, QcloudCOSConfig.SecretKey)
}
