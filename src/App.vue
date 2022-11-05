<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import '@/assets/fonts/iconfont.js'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 获取全部商品分类，比起在TypeNav中发请求更好，优化性能
    this.$store.dispatch("getCategoryList");
  }
}
</script>

<style>
body {
  min-width: 908px;
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
