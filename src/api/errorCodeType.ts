export const errorCodeType = function (code: string): string {
  let errMessage = '未知错误'
  switch (code) {
    case 400:
      errMessage = '请求失败！请您稍后重试'
      break
    case 401:
      errMessage = '未授权，请重新登录'
      break
    case 403:
      errMessage = '当前账号无权限访问！'
      break
    case 404:
      errMessage = '你所访问的资源不存在！'
      break
    case 405:
      errMessage = '请求方式错误！请您稍后重试'
      break
    case 408:
      errMessage = '请求超时！请您稍后重试'
      break
    case 500:
      errMessage = '服务器端出错'
      break
    case 501:
      errMessage = '网络未实现'
      break
    case 502:
      errMessage = '网络错误'
      break
    case 503:
      errMessage = '服务不可用'
      break
    case 504:
      errMessage = '网络超时'
      break
    case 505:
      errMessage = 'http版本不支持该请求'
      break
    default:
      errMessage = `其他连接错误 --${code}`
  }
  return errMessage
}
