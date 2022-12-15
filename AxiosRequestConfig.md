```
export interface AxiosRequestConfig {
  // `url` 是用于请求的服务器 URL
  url?: string;
  
  // `method` 是创建请求时使用的方法
  method?: Method;
  
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL?: string;
  
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  
  // `headers` 是即将被发送的自定义请求头
  headers?: any;
  
  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params?: any;
  
  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  paramsSerializer?: (params: any) => string;
  
  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data?: any;
  
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout?: number;
  
  // 超时提示消息
  timeoutErrorMessage?: string;
  
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials?: boolean;
  
  // `adapter` 允许自定义处理请求，以使测试更轻松
  adapter?: AxiosAdapter;
  
  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  auth?: AxiosBasicCredentials;
  
  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType?: ResponseType;
  
  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName?: string;
  
  // `xsrfHeaderName` 是携带 xsrf 令牌值的 http 标头的名称
  xsrfHeaderName?: string;
  
  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress?: (progressEvent: any) => void;
  
  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress?: (progressEvent: any) => void;
  
  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength?: number;
  
  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
  // promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus?: ((status: number) => boolean) | null;
  
  // 请求体最大尺寸
  maxBodyLength?: number;
  
  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects?: number;
  
  // `socketPath` 定义了一个在 node.js 中使用的 UNIX Socket。
  // 只能指定 `socketPath` 或 `proxy`。
  // 如果两者都指定，则使用 `socketPath`。
  socketPath?: string | null;
  
  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。
  httpAgent?: any;
  httpsAgent?: any;
  
  // 'proxy' 定义代理服务器的主机名称和端口
  proxy?: AxiosProxyConfig | false;
  
  // `cancelToken` 指定用于取消请求的 cancel token
  cancelToken?: CancelToken;
  
  // 将其设置为`false`，它将不会解压缩您的响应，而是保留原始的Content-Encoding头。
  // 默认是true
  decompress?: boolean;
  
  // 控制响应数据是否转换
  transitional?: TransitionalOptions
}

```
