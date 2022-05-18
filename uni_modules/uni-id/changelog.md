## 3.3.5（2021-08-10）
- 修复版本号错误
## 3.3.4（2021-08-10）
- 微信、QQ、支付宝登录新增type参数用于指定当前是登录还是注册
## 3.3.3（2021-08-04）
- 修复使用数组形式的配置文件报错的Bug
## 3.3.2（2021-08-03）
- 修复上3.3.0版本引出的createInstance接口传入配置不生效的Bug 感谢[hmh](https://gitee.com/hmh)
## 3.3.1（2021-07-30）
- 修复 将设置用户允许登录的应用列表时传入空数组报错的Bug
## 3.3.0（2021-07-30）
- 新增 不同端应用配置隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
- 新增 不同端用户隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
  + 此版本升级需要开发者处理一下用户数据，请参考 [补齐用户dcloud_appid字段](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
- 新增 QQ登录、注册相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
- 调整 不再支持绑定手机、邮箱时不填验证码直接绑定
## 3.2.1（2021-07-09）
- 撤销3.2.0版本所做的调整
## 3.2.0（2021-07-09）
- 【重要】支持不同端（管理端、用户端等）用户隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
- 支持不同端（管理端、用户端等）配置文件隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
## 3.1.3（2021-07-08）
- 移除插件内误传的node_modules
## 3.1.2（2021-07-08）
- 修复 微信小程序绑定微信账号时报错的Bug
## 3.1.1（2021-07-01）
- 使用新的错误码规范，兼容旧版 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
- 修复微信登录、绑定时未返回用户accessToken的Bug
## 3.1.0（2021-04-19）
- 增加对用户名、邮箱、密码字段的两端去空格
- 默认忽略用户名、邮箱的大小写 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=case-sensitive)
- 修复 customToken导出async方法报错的Bug
## 3.0.12（2021-04-13）
- 调整bindTokenToDevice默认值为false
## 3.0.11（2021-04-12）
- 修复3.0.7版本引出的多个用户访问时可能出现30201报错的Bug
## 3.0.10（2021-04-08）
- 优化错误提示
## 3.0.9（2021-04-08）
- bindMobile接口支持通过一键登录的方式绑定
- 优化错误提示
## 3.0.8（2021-03-19）
- 修复 3.0.7版本某些情况下生成token报错的Bug
## 3.0.7（2021-03-19）
- 新增 支持uni-config-center，更新uni-id无须再担心配置被覆盖 [详情](https://uniapp.dcloud.io/uniCloud/uni-id?id=uni-config-center)
- 新增 自定义token内容，可以缓存角色权限之外的更多信息到客户端 [详情](https://uniapp.dcloud.io/uniCloud/uni-id?id=custom-token)
- 新增 支持传入context获取uni-id实例，防止单实例多并发时全局context混乱 [详情](https://uniapp.dcloud.io/uniCloud/uni-id?id=create-instance)
## 3.0.6（2021-03-05）
- 新增[uniID.wxBizDataCrypt](https://uniapp.dcloud.io/uniCloud/uni-id?id=%e5%be%ae%e4%bf%a1%e6%95%b0%e6%8d%ae%e8%a7%a3%e5%af%86)方法
- 优化loginByApple方法，提高接口响应速度
## 3.0.5（2021-02-03）
- 调整为uni_modules目录规范
