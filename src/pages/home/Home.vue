<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {HomeWeekend, HomeRecommend, HomeSwiper, HomeHeader, HomeIcons},
  mounted () {
    // 生命周期函数，这里写ajax数据的获取
    this.lastCity = this.city
    this.getHomeInfo()
  },
  data () {
    return {
      lastCity: '',
      swiperList: [], // 用来存储轮播图信息
      iconList: [], // 用来存储图标信息
      recommendList: [], // 用来存储推荐信息
      weekendList: [] // 用来存储周末去哪儿的信息
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  activated () {
    // 使用keep-alive时，才会有这个声明周期函数
    // 当页面被重新显示的时候会被执行
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      // 重新发ajax
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>
</style>
