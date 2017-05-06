import {
  Vultr
} from '../../config'
import axios from 'axios'

const URL = 'https://api.vultr.com/'
const Key = Vultr.Key

export let Account = async () => {
  try {
    let tmp = await axios.request({
      baseURL: URL,
      url: '/v1/account/info',
      method: 'get',
      headers: {'API-Key': Key}
    })
    return tmp.data
  } catch (err) {
    return {
      status: err.response.status,
      result: {
        errInfo: '请求错误！',
        errMessage: err.response.data
      }
    }
  }
}

export let List = async () => {
  try {
    let tmp = await axios.request({
      baseURL: URL,
      url: '/v1/server/list',
      method: 'get',
      headers: {'API-Key': Key}
    })
    return tmp.data
  } catch (err) {
    return {
      status: err.response.status,
      result: {
        errInfo: '请求错误！',
        errMessage: err.response.data
      }
    }
  }
}
