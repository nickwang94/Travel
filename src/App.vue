<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>  <!--路由的内容加载过一次之后，就把内容存在内存中-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
