<template>
  <div>
    <router-view />
    <MainTabbar />
  </div>
</template>
<script>
import MainTabbar from 'components/content/MainTabbar'
export default {
  data () {
    return {}
  },
  components: {
    MainTabbar
  }
}
</script>
<style>
@import 'assets/css/reset.css'
</style>
