<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    //派发action,获取商品三级列表(放在app.vue因为只会执行一次)性能优化
    this.$store.dispatch("categoryList");
  }
};
</script>

<style>
</style>
