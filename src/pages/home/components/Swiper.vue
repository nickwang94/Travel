<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="swiper-img" src="../../../assets/images/1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../assets/images/2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../assets/images/3.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

// padding-bottom为31.25%是图片的宽比高
// 设置overflow: hidden是为了结局轮播图片下方的内容会在网页刷新的时候显示在网页最上方
// >>>样式穿透，不受scoped限制
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 34.8%
    background: #eee
    .swiper-img
      width: 100%
</style>
