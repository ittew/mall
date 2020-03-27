<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#tabbar{
  display: flex;
  background-color: #f5f5f5;
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 5px rgba(0,0,0,.1);
}

</style>
