## 简介
vue-element-perfect 是一个后台前端解决方案, 基于Vue3.0+TS+Element-plus实现。它使用了最新的前端技术栈、动态路由，权限验证，并且有着丰富的组件。

### 在线预览点击 —— [企业级、通用型中后台前端解决方案 ](http://182.61.5.190:8889/)

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

## 安装
- Clone
```
 # 克隆项目
  git clone https://github.com/zouzhibin/vue-admin-perfect.git
```

## 分支管理
- master 技术采用 vite + vue3.0 + Typescript + pinia
  ```
  注意：使用 Vite 构建工具，需要 Node.js 版本 >= 12.0.0  查看 Node.js 版本 node-v
  ```
- vite-vuex vite + vue3.0 + Typescript + vuex
- vue-i18n 语言切换版本
- webpack 技术采用 webpack + vue3.0 + Typescript + vuex
- uniapp uniapp版本 uniapp +vuex +element scss
  ```
  # 本地开发 启动项目
  借助hbuilder工具运行浏览器启动
  ```

## 下载依赖
```
 npm install
 cnpm install
 yarn 
```
## 运行
```
 npm run build 
```
## eslint+prettier
```
# eslint 检测代码
npm run lint

#prettier 格式化代码
npm run lint:prettier
```

## 文件目录结构
```
vue-admin-perfect
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ hooks               # 常用 Hooks
│  ├─ language            # 语言国际化
│  ├─ layout              # 框架布局
│  ├─ routers             # 路由管理
│  ├─ store               # pinia store
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 入口页面
│  └─ main.ts             # 入口文件
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.config.js         # prettier 配置
├─ index.html             # 入口 html
├─ yarn.lock      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```




