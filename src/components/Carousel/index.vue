<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel,index) in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
//引入Swiper
import Swiper from "swiper";
export default {
  name: "Carousel",
  props:['list'],
  watch: {
    //监听bannerList数据的变化，因为这条数据发生过改变---由空数组变为数组里面有四个元素
    list: {
      immediate: true, //立即监听
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(
            // document.querySelector(".swiper-container"),
            //通过ref获取DOM结点
            this.$refs.cur,
            {
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true
              },
              navigation: {
                nextEl: ".swiper-button-next",
                preEl: ".swiper-button-pre"
              }
            }
          );
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>
