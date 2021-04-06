# travel

> 使用Vue进行的一个旅游网页开发

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

# 一些用到的知识点总结
## 1. Ajax请求
```bash
# ajax请求的发送有很多第三方，现在官方推荐使用axios
npm install axios --save
```
Ajax请求数据的位置应该在Home.vue中，而不是每一个小的组件中，
这样做的好处是网页请求的次数少，然后Home.vue获取到请求数据后，
再将数据传递给各个子组件。

使用`static/mock/index.json`来进行后端数据模拟，但是在Home.vue中请求ajax时写成`/api`路径，
而不是`/static/mock`，然后在index.js中进行配置代理转发，这是因为项目如果上线的话修改路径会有风险。
- 发送请求
```vue
axios.get('/api/index.json')
```
- 配置转发

文件地址：`/config/index.js`
配置内容：
```javascript
dev: {
  // Paths
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    // 在开发环境进行配置
    '/api': {
      target: 'http://localhost:8080',
      pathRewrite: {
        '^/api': '/static/mock'
      }
    }
  }
  // ......
}
```

## 2. Home组件的数据分发
Home组件发送Ajax请求获取数据后，需要将数据发送给不同的组件。
首先在data中创建对应json数据的数据：
```vue
data () {
  return {
    city: '', // 用来存储城市信息
    swiperList: [], // 用来存储轮播图信息
    iconList: [], // 用来存储图标信息
    recommendList: [], // 用来存储推荐信息
    weekendList: [] // 用来存储周末去哪儿的信息
  }
},
```
在ajax请求数据处理函数中，对数组进行填充：
```vue
getHomeInfoSucc (res) {
  res = res.data
  if (res.ret && res.data) {
    const data = res.data
    this.city = data.city
    this.swiperList = data.swiperList
    this.iconList = data.iconList
    this.recommendList = data.recommendList
    this.weekendList = data.weekendList
  }
  console.log(res)
}
```
填充好数据后，需要通过数据绑定将数据传送给不同的组件：
```vue
<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
```
随后子组件通过`props`来接收数据，并使用：
```vue
props: {
  list: Array
}
```
## 3. Better-scroll
- 安装
```bash
npm install better-scroll --save
```
- 使用

Dom元素应该被一个`div`包裹住，然后导入better-scroll
```vue
import Bscroll from 'better-scroll'
```
然后在声明周期函数中进行创建：
```vue
mounted () {
  // 在页面挂在完毕执行
  this.scroll = new Bscroll(this.$refs.wrapper)
}
```
- 不能滚动的问题

> 不能滚动是现象，我们得搞清楚这其中的根本原因。在这之前，我们先来看一下浏览器的滚动原理： 浏览器的滚动条大家都会遇到，当页面内容的高度超过视口高度的时候，会出现纵向滚动条；当页面内容的宽度超过视口宽度的时候，会出现横向滚动条。也就是当我们的视口展示不下内容的时候，会通过滚动条的方式让用户滚动屏幕看到剩余的内容。

## 4. 组件之间的数据传递
Alphabet组件监听`click`事件，并在事件中发送一个`change`事件，并传递点击的字母
```vue
handleLetterClick (e) {
  this.$emit('change', e.target.innerText)
}
```
然后在其父组件`City`中，在`Alphabet`组件上监听change事件。
```html
<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
```
并在事件中将点击字母保存至data中：
```vue
handleLetterChange (letter) {
  this.letter = letter
}
```
最后将data数据传递给子组件`List`，完成兄弟组件的数据传递。
```html
<city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
```
