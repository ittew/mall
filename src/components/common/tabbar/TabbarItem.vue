<template>
    <div class="tabbar-item" @click="linkHandle">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :class="{'active':isActive}" :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'rgba(254, 87, 119, 1)'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.link) > -1
    },
    activeStyle () {
      return this.isActive ? { 'color': this.activeColor } : {}
    }
  },
  methods: {
    linkHandle () {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabbar-item img{
  width: 22px;
  height: 22px;
  margin-bottom: 4px;
}
</style>
