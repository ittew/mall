<template>
  <Tabbar>
    <TabbarItem link="home" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </TabbarItem>
    <TabbarItem link="category" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TabbarItem>
    <TabbarItem link="cart" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabbarItem>
      <TabbarItem link="profile" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from '../common/tabbar/Tabbar'
import TabbarItem from '../common/tabbar/TabbarItem'
export default {
  data () {
    return {}
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
</style>
