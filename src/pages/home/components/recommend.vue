<template>
  <div>
    <div class="recommand-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommandList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommandList: [
        {
          id: '0001',
          imgUrl: 'http://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
          title: '郑州-丽江 5天自由行',
          desc: '含往返飞机票+4晚住宿'
        },
        {
          id: '0002',
          imgUrl: 'http://imgs.qunarzz.com/p/p12/201302/28/83ba8aa24931fbe493835fbb.jpg_256x160_7331b3d5.jpg',
          title: '郑州-陶城亚丁 9天跟团游',
          desc: '含往返飞机票+8晚住宿'
        },
        {
          id: '0003',
          imgUrl: 'http:////imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
          title: '郑州-三亚 5天自由行',
          desc: '含往返飞机票（含税）+4晚住宿'
        },
        {
          id: '0004',
          imgUrl: 'http:////imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg',
          title: '郑州-重庆 4天自由行',
          desc: '含往返飞机票+3晚住宿'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommand-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    text-align: left
  .item
    display: flex
    height: 1.9rem
    .item-img
      width: 2.5rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      text-align: left
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
