<template>
  <div class="navbar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.navbar{
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 5px rgba(0,0,0,.1);
}
.nav-left,.nav-right{
  width: 60px;
}
.nav-center{
  flex: 1;
}
</style>
