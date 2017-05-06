import path from 'path'

// 系统配置
export let System = {
  API_server_type: 'http://', // API服务器协议类型,包含"http://"或"https://"
  API_server_host: 'localhost', // API服务器暴露的域名地址,请勿添加"http://"
  API_server_port: '3000', // API服务器监听的端口号
  HTTP_server_type: 'http://', // HTTP服务器协议类型,包含"http://"或"https://"
  HTTP_server_host: 'www.XXX.com', // HTTP服务器地址,请勿添加"http://" （即前端调用使用的服务器地址，如果是APP请设置为 * ）
  HTTP_server_port: '65534', // HTTP服务器端口号
  System_country: 'zh-cn', // 所在国家的国家代码
  System_plugin_path: path.join(__dirname, './plugins'), // 插件路径
  Session_Key: 'RESTfulAPI', // 生产环境务必随机设置一个值
  db_type: 'mysql' // 数据库类型
}

export let DB = {
  host: 'localhost', // 服务器地址
  port: 3306, // 数据库端口号
  username: 'admin', // 数据库用户名
  password: 'admin888', // 数据库密码
  database: 'development', // 数据库名称
  prefix: 'api_' // 默认"api_"
}

export let SendEmail = {
  service: 'smtp.abcd.com', // SMTP服务提供商域名
  username: 'postmaster%40abcd.com', // 用户名/用户邮箱
  password: 'password', // 邮箱密码
  sender_address: '"XX平台 👥" <postmaster@abcd.com>'
}

const AliyunAccessKey = {
  accessKeyId: '',
  accessKeySecret: ''
}

const QcloudAccessKey = {
  SecretId: '',
  SecretKey: ''
}

export const Vultr = {
  Key: ''
}

// 阿里云OSS
export const OSS = {
  xxxx: {
    region: 'oss-cn-shanghai',
    accessKeyId: AliyunAccessKey.accessKeyId,
    accessKeySecret: AliyunAccessKey.accessKeySecret,
    bucket: 'xxxx'
  }
}

// 阿里云邮件发送接口
export let AliyunEmail = {
  Version: '2015-11-23', // 阿里云邮件发送API版本号
  accessKeyId: AliyunAccessKey.accessKeyId,
  accessKeySecret: AliyunAccessKey.accessKeySecret,
  SingleSendMail: { // 单一发信接口
    AccountName: 'system@xxx.com', // 管理控制台中的发信地址 (默认首选地址)
    ReplyToAddress: true, // 是否使用管理控制台中配置的回信地址（状态必须是验证通过）
    AddressType: 1 // 取值范围0~1: 0为随机账号;1为发信地址
  },
  BatchSendMail: { // 批量发信接口
    Action: 'BatchSendMail',
    AccountName: '', // 管理控制台中的发信地址 (默认首选地址)
    ReplyToAddress: true, // 是否使用管理控制台中配置的回信地址（状态必须是验证通过）
    AddressType: 1 // 取值范围0~1: 0为随机账号;1为发信地址
  }
}

// 阿里云ECS接口
export let AliyunECS = {
  Version: '2014-05-26', // API版本号
  accessKeyId: AliyunAccessKey.accessKeyId,
  accessKeySecret: AliyunAccessKey.accessKeySecret
}

// 腾讯云CVM接口
export let QcloudCVM = {
  SecretId: QcloudAccessKey.SecretId,
  SecretKey: QcloudAccessKey.SecretKey
}
