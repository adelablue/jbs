<template>
<div>
  <search />
  <section class="script-container">
    <div class="script-item" v-for="(item, i) in listTmp" :key="item">
      <img src="/static/images/dts.png" mode="aspectFill" />
      <h2>{{ item.name }}</h2>
      <ul class="tag-list">
        <li v-for="(tag, j) in item.tags" :key="tag">
          {{ tag }}
        </li>
      </ul>
    </div>
  </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
    }
  },
  beforeMount() {
    console.log('before dispatch');
    console.log(this.$store);
    this.$store.dispatch('getScriptList');
  },
  computed: {
    listTmp () {
      console.log('computed listTmp');
      console.log(this.$store.state.listTmp);
      return this.$store.state.listTmp;
    }
  }
}
</script>

<style lang="scss" scope>
search {
  width:100%;
  float:left;
  clear:both;
}
.script-container  {
  display: grid;
  grid-template-columns: auto auto;
}

.script-item {
  width:100%;
  border:1px solid red;
  margin:10rpx;
  height:auto;
  
  img {
    margin:5rpx;
    width:300rpx;
    height:300rpx;
  }
}

.tag-list{
  display: inline-block;
  font-size:24rpx;
  
  li {
    float:left;
    padding:5rpx 10rpx;
    margin:0 10rpx 0 0;
    background-color:pink;
  }
}

</style>
