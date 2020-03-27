<template>
  <div class="tab-control">
    <div class="item"
      :class="{'active':curIndex===index}"
      @click="itemClick(index)"
      v-for="(item, index) in titles" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabcontrol',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      curIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.curIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
.tab-control{
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
  border: 1px solid #efefff;

  position: sticky;
  top: 44px;
}
.tab-control .item{
  flex:1;
  font-size: 16px;
}
.tab-control  span{
  padding: 5px;
}
.tab-control .item.active span{
  border-radius:1px;
  border-bottom: 2px solid rgba(254, 87, 119, 1);
  color: rgba(254, 87, 119, 1)
}
</style>
