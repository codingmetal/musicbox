<template>
  <div id="home">
    <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <swipe-item v-for="item in swipeItems">
        <img :src="item.pic" :href="item.url"/>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import {Swipe, SwipeItem} from 'vant'
import {getSwipe} from "@/network/homeRequest";

export default {
  name: 'Home',
  data() {
    return {
      swipeItems: []
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods:{
    async setSwipe() {
      const data = await getSwipe()
      console.log(data,'getSwipe')
      this.swipeItems = data.banners
    }
  },
  created() {
    this.setSwipe()
  }

}
</script>

<style lang="scss">
@import "../../assets/css/swipe.scss";

.my-swipe img{
  width: 100%;
  border-radius: 10px;
}

</style>
