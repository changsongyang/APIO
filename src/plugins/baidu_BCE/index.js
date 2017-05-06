import {
  BosClient
} from 'bce-sdk-js'
import {
  BaiduBCE as BaiduBCEConfig
} from '../../config'

const config = {
  endpoint: 'EndPoint', // 传入Bucket所在区域域名
  credentials: {
    ak: BaiduBCEConfig.AccessKeyID, // 您的AccessKey
    sk: BaiduBCEConfig.SecretAccessKey // 您的SecretAccessKey
  }
}

let bucket = 'my-bucket'
let key = 'hello.js'
let client = new BosClient(config)

client.putObjectFromFile(bucket, key, __filename)
  .then(response => console.log(response)) // 成功
  .catch(error => console.error(error)) // 失败
