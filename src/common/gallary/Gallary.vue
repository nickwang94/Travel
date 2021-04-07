<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="gallary-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.gallary-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true // 这两个属性解决Swiper宽度计算的问题
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
      .gallary-pagination
        color #fff
        bottom -1rem
        text-align center
        padding-top .2rem
</style>
