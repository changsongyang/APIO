import {
  SystemConfig
} from '../config'

// 截取字符串，多余的部分用...代替
export let setString = (str, len) => {
  let StrLen = 0
  let s = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      StrLen += 2
    } else {
      StrLen++
    }
    s += str.charAt(i)
    if (StrLen >= len) {
      return s + '...'
    }
  }
  return s
}

// 格式化设置
export let OptionFormat = (GetOptions) => {
  let options = '{'
  for (let n = 0; n < GetOptions.length; n++) {
    options = options + '\'' + GetOptions[n].option_name + '\':\'' + GetOptions[n].option_value + '\''
    if (n < GetOptions.length - 1) {
      options = options + ','
    }
  }
  return JSON.parse(options + '}')
}

// 替换SQL字符串中的前缀
export let SqlFormat = (str) => {
  if (SystemConfig.mysql_prefix !== 'api_') {
    str = str.replace(/api_/g, SystemConfig.mysql_prefix)
  }
  return str
}

// 数组去重
export let HovercUnique = (arr) => {
  let n = {}
  let r = []
  for (var i = 0; i < arr.length; i++) {
    if (!n[arr[i]]) {
      n[arr[i]] = true
      r.push(arr[i])
    }
  }
  return r
}

// 获取json长度
export let getJsonLength = (jsonData) => {
  var arr = []
  for (var item in jsonData) {
    arr.push(jsonData[item])
  }
  return arr.length
}

export let instanceName=(data)=>{
	if(/^http[s]?:\/\//.test(data)){
		return false
	}
	if(/^[\u4e00-\u9fa5|a-zA-Z][\d\w._-]{1,127}$/.test(data)){
		return true
	}
	return false
}
export let instanceDescription=(data)=>{
	if(/^http[s]?:\/\//.test(data)){
		return false
	}
	if(data.length>256){
		return false
	}
	return true
}
export let instancePassword=(data)=>{
	if(data.length<8||data.length>30){
		return false
	}
	if(/[a-z]/g.test(data)&&/[A-Z]/g.test(data)&&/[\d]/g.test(data)){
		return true
	}

	return false
}
export let instanceHostName=(data,windowsPlatform)=>{
	if(windowsPlatform){
		 if(data.length>15||data.length<2){
		 	return false
		 }
		 if(data.indexOf('.')>-1){
		 	return  false
		 }
	
		 if(/^\d*$/gi.test(data)){
		 	return  false
		 }
	}else {
		if(data.length>30||data.length<2){
			return false
		 }
	};
	begin = data.substring(0,1);
	end = data.substring(data.length-1,1);
	if(begin === '.' || begin.substring(0,1) === '-' || end === '.' || end.substring(0,1) === '-' ){
		return false
	}
	if(data.indexOf('..')>-1||data.indexOf('--')>-1){
		return false
	}
	return true

}