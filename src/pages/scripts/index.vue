<template>
<div>
  <input class="search-bar" placeholder="输入关键词……" v-model="search"/>
  <section class="script-container">
    <div class="script-item" v-for="(item, i) in listTmp" :key="item" @tap="toDetail(i)">
      <img src="/static/images/dts.png" mode="aspectFill" />
      <h2>{{ item.name }}</h2>
      <ul class="tag-list">
        <li v-for="(tag, j) in item.tags" :key="tag">
          {{ tag }}
        </li>
      </ul>
      <div class="clearfix">
        <span class="person-num">{{item.minperson}} - {{item.maxperson}}</span>
        <span class="price">{{item.weekdayprice}} / {{item.weekendprice}}</span>
      </div>

      <div class="shop-name clearfix">
        {{item.shop}}
      </div>

    </div>
  </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      search: ''
    }
  },
  beforeMount() {
    console.log('before dispatch');
    console.log(this.$store);
    this.$store.dispatch('getScriptList');
  },
  methods: {
    toDetail (i) {
      console.log('to Detail');
      console.log(this.listTmp[i].name);
      wx.navigateTo({
        url: '/pages/script_detail/main?index=' + i
      })
    }
  },
  computed: {
    listTmp () {
      console.log('computed listTmp');
      console.log(this.$store.state.list);
      this.$store.state.listTmp =  this.$store.state.list.filter(item => {
        if (item.tags.includes(this.search.toLowerCase())
        || item.name.toLowerCase().includes(this.search.toLowerCase())
        || item.shop.toLowerCase().includes(this.search.toLowerCase()))
          return true;
      });
      return this.$store.state.listTmp;
    }
  }
}
</script>

<style lang="scss" scope>
.clearfix {
  clear:both;float:left;width:100%;
}
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
  padding:15rpx;
  height:auto;
  box-sizing: border-box;
  
  img {
    margin:5rpx;
    width:320rpx;
    height:300rpx;
  }

  .person-num, .price{
    font-size:24rpx;
  }

  .person-num{
    float:left;
  }

  .price{
    float:right;
  }

  .shop-name {
    font-size:20rpx;
  }

}

.tag-list{
  font-size:24rpx;
  clear:both;
  float:left;
  width:100%;
  
  li {
    display: inline-block;
    padding:5rpx 10rpx;
    margin:0 10rpx 0 0;
    background-color:pink;
  }
}

</style>
