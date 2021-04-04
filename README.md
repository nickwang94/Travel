# travel

> A Vue.js project

## 构建步骤

``` bash
# 安装依赖项
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目文件说明
- build（项目构建webpack相关代码）
- config（配置目录，例如端口号）
- node_modules（npm加载项目依赖模块）
- src（开发目录）
  - assets（放置样式和图片等资源）
  - pages（放置不同的组件）
  - router（路由信息）
  - App.vue（项目入口文件）
  - main.js（项目核心文件）
- static（放置静态资源）
- .babelrc（JavaScript语法的编译配置文件）
- .editorconfig（编码风格的配置文件）
- .eslintignore（指定eslint忽略文件和目录）
- .eslintrc.js（eslint配置项）
- .gitignore（指定哪些模块内容不进行git同步）
- .postcssrc.js（移动端适配方案）
- index.html（首页入口文件）
- package-lock.json（锁定安装时的包的版本号，以保证其他人在npm install时大家的依赖能保证一致）
- package.json（项目依赖）