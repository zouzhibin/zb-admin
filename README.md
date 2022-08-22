# 简介
vue-element-perfect 是一个后台前端解决方案, 基于Vue3.0+TS+Element-plus实现。它使用了最新的前端技术栈、动态路由，权限验证，并且有着丰富的组件。

## 效果预览

### 在线预览点击 —— [企业级、通用型中后台前端解决方案 ](http://182.61.5.190:8889/)

### 附上github地址点击跳转 [vue-admin-perfect](https://github.com/zouzhibin/vue-admin-perfect)


## 项目功能
- 使用Vue3.0开发，单文件组件采用＜script setup＞
- 登录逻辑，使用vue-router进行路由权限拦截，判断，路由懒加载
- 使用 keep-alive 对整个页面进行缓存，支持多级嵌套页面
- 侧边栏导航动态的显示
- 集成各种打印功能，图片打印、表格打印、普通打印
- 各种可视化地图组件
- 头像裁剪、图片上传
- 导出excel,自定义样式导出excel、多表头导出
- 表单、表格
- 水印  
- 多标签显示
- 使用 Prettier 统一格式化代码，集成 Eslint、代码校验规范
- 其他各组件

## 分支管理
- master 技术采用 vite + vue3.0 + Typescript + vuex + vue-router + Element-Plus scss
  ```
  注意：使用 Vite 构建工具，需要 Node.js 版本 >= 12.0.0  查看 Node.js 版本 node-v
  
  # 克隆项目
  git clone https://github.com/zouzhibin/vue-admin-perfect.git
  # 安装依赖
  yarn
  # 本地开发 启动项目
  yarn dev
  ```
- webpack 技术采用 webpack + vue3.0 + Typescript + vuex + vue-router + Element-Plus scss
- uniapp 技术采用 uniapp +vuex +element scss
  ```
  # 克隆项目 切换 uniapp分支
  git clone https://github.com/zouzhibin/vue-admin-perfect.git
  # 安装依赖
  yarn
  # 本地开发 启动项目
  借助hbuilder工具运行浏览器启动
  ```

## eslint+prettier
```
# eslint 检测代码
npm run lint

#prettier 格式化代码
npm run lint:prettier
```

## 目录结构介绍

```
├─assets    放置一些静态文件
├─components 放置组件
├─layout 首页布局
│  ├─components
│  │  ├─Sidebar 侧边栏配置
│  │  ├─TagsView 标签栏配置
│  │  └─UHeader 头部内容配置
│  └─hooks
├─router   路由配置
├─store    数据存储
├─styles   样式文件
├─utils   工具方法
└─views    页面配置方法
└─permission  路由拦截 权限配置
```




