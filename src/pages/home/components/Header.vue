<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe685;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      输入城市景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe688;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']), // 把vuex中的数据映射到计算属性上，...是展开符
    ...mapGetters(['doubleCity'])
  }
}
</script>
<!--scoped表示该样式只对当前文件有效-->
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      height: .64rem
      line-height: .64rem
      width: .64rem
      margin-top: .12rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      text-align: left
      padding-left: .2rem
    .header-right
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      min-width: 1.04rem
      padding 0 .2rem
      float: right
      color: #fff
      .arrow-icon
        font-size: .24rem
</style>
