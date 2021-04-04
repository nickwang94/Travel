<template>
  <div class="icons">
    <swiper ref="mySwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="item.desc">
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
          desc: '民宿客栈'
        },
        {
          id: '0002',
          imgUrl: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
          desc: '专车自驾'
        },
        {
          id: '0003',
          imgUrl: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png',
          desc: '信用卡'
        },
        {
          id: '0004',
          imgUrl: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
          desc: '团购旅游'
        },
        {
          id: '0005',
          imgUrl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
          desc: '一日游'
        },
        {
          id: '0006',
          imgUrl: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png',
          desc: '特惠酒店'
        },
        {
          id: '0007',
          imgUrl: 'https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png',
          desc: '行程设计'
        },
        {
          id: '0008',
          imgUrl: 'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png',
          desc: '周边短途'
        },
        {
          id: '0009',
          imgUrl: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png',
          desc: '借钱'
        },
        {
          id: '00010',
          imgUrl: 'https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png',
          desc: '铂金卡'
        }
      ]
    }
  },
  computed: {
    // 计算属性根据其他属性计算出来，自带缓存机制
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        // 计算当前的icon应该显示在轮播图的第几页
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          // 如果页面不存在
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<!--scoped表示该样式只对当前文件有效-->
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .30rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
