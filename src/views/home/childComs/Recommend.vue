<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: ['recommends'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  justify-content: space-around;
  padding: 12px 0 20px;
  text-align: center;
  border-bottom: 10px solid #eee;
}
.recommend img{
  width: 64px;
  height:64px;
  margin-bottom: 10px;
}
.recommend a{
  font-size: 14px;
  color: #333;
}
.recommend .item{
  flex: 1;
}
</style>
