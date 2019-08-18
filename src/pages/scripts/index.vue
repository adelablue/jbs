<template>
<div class="container-container">
  <section class="container-searchbar">
    <van-search :value="search" placeholder="请输入搜索关键词"
    @change="onChange" 
    @search="onSearch"
    @clear="onClear"
    @cancel="onCancel"
     use-action-slot
    >
    <view slot="action" @click="onClear">取消</view>
  </van-search>
  </section>
  <section class="container-scriptlist">
    <div class="item-script" v-for="(item, i) in listTmp" :key="item" @tap="toDetail(i)">
      <img :src="'/static/images/' + item.id + '.png'" mode="aspectFill" />
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
var QQMapWX = require('qqmap-wx-jssdk')

export default {
  data() {
    return {
      search: '',
      qqmapsdk: {}
    }
  },
  beforeMount() {
    console.log('before dispatch');
    console.log(this.$store);
    this.$store.dispatch('getScriptList');
  },

  mounted() {   
    this.qqmapsdk = new QQMapWX({
        key: 'HWFBZ-R533F-GNYJ5-NHBFJ-CCYDH-U6BFD'
    });
  },
  methods: {
    onSearch(e) {
      console.log("onSearch ----- ");
      console.log(e.mp.detail);
      this.search = e.mp.detail;
    },
    onChange(e) {
      console.log("onChange ----- ");
      console.log(e.mp.detail);
    },
    onClear(e) {
      console.log("onClear ----- ");
      console.log(e.mp.detail);
      this.search = '';
    },
    onCancel(e) {
      console.log("onCancel ----- ");
      console.log(e.mp.detail);
    },
  /*  toDianping() {
      wx.navigateToMiniProgram({
        appId: '',
        path: 'https://g.dianping.com/app/app-page-backroom-on-order/theme.html?shopid=110228849&productid=6867151&_social_u=opjejxo4TMKdpFtLOlHoNg==',
        extraData: {
          foo: 'bar'
        },
        envVersion: 'develop',
        success(res) {
          // 打开成功
        }
      })
    },*/
    toDetail (i) {
      console.log('to Detail');
      console.log(this.listTmp[i].name);

      this.qqmapsdk.search({
            keyword: this.listTmp[i].shop,
            success: function(res) {
                console.log('success ---------')
                console.log(res)
                if (res.count) {
                    console.log(res.data[0].location);
                    let location = res.data[0].location;

                wx.navigateTo({
                  url: '/pages/script_detail/main?index=' + i 
                  + '&lat=' + location.lat + '&lng=' + location.lng
                })
                }
            }, 
            fail: function(res) {
                console.log('fail ---------')
                console.log(res)
            }, 
            complete: function(res) {
               // console.log('complete ---------')
               // console.log(res)
            },
        });

    }
  },
  computed: {
    listTmp () {
      console.log('computed listTmp');
      console.log(this.$store.state.list);
      if (this.search == '') {
        console.log("== ''");
        this.$store.state.listTmp =this.$store.state.list;
      } else {
        this.$store.state.listTmp =  this.$store.state.list.filter(item => {
          if (item.tags.includes(this.search.toLowerCase())
          || item.name.toLowerCase().includes(this.search.toLowerCase())
          || item.shop.toLowerCase().includes(this.search.toLowerCase()))
            return true;
        });
      }
      return this.$store.state.listTmp;
    }
  }
}
</script>

<style lang="scss" scope>
.clearfix {
  clear:both;float:left;width:100%;
}

.container-searchbar {
  width: 100%;
  position: fixed;
  background-color: #FFF;
}

.container-scriptlist  {
  padding-top:100rpx;
  display: grid;
  grid-template-columns: auto auto;
}

.item-script {
  width:100%;
  padding:12rpx 24rpx;
  height:auto;
  box-sizing: border-box;
  
  img {
    margin:5rpx;
    width:320rpx;
    height:320rpx;
    border-radius: 20rpx;
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
