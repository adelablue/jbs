<template>

    <div class="welcomeContainer">
  <swiper indicator-dots indicator-color="pink" indicator-active-color="yellow">
    <swiper-item>
      <image src="/static/images/dts.png" mode="aspectFill" />
    </swiper-item>
    <swiper-item>
      <image src="/static/images/dts.png" mode="aspectFill"/>
    </swiper-item>
    <swiper-item>
      <image src="/static/images/dts.png" mode="aspectFill"/>
    </swiper-item>
    <swiper-item>
      <image src="/static/images/dts.png" mode="aspectFill"/>
    </swiper-item>
  </swiper>

      <div v-if="isShow">
        <img class="userImg" :src="userInfo.avatarUrl"/>
        <div>Hi, {{userInfo.nickName}}</div>
      </div>
       <Button v-else open-type="getUserInfo" @getuserinfo="getUserInfo">getUserInfo</Button>

       <div class="button" @tap="toScripts">搜索！</div>
    </div>

    
</template>

<script>

export default {
  data () {
    return {
      userInfo:{},
      isShow: false
    }
  },


  methods: {
    handleGetUserInfo() {
      wx.getUserInfo({
        success: (data) => {
          console.log(data);
          this.userInfo = data.userInfo;
          this.isShow = true;
        },
        fail: (data)=> {
          console.log("fail");
          console.log(data);
          console.log("--------");

          this.isShow = false;
        }
      })
    },

    getUserInfo(data) {
      this.handleGetUserInfo();
    },

    toScripts() {
      console.log("navigate");
      wx.switchTab({
        url: '/pages/scripts/main'
      })
    },
  },

  beforeMount() {

   console.log('index/index beforeMount')
   console.log(this.$store);

   this.handleGetUserInfo();
  }
}
</script>

<style>
page {
  background-color: #eee;
}

.welcomeContainer {
  width:100%;
 /* display: flex;
  flex-direction: row;
  justify-content: center;*/
}

.userImg{
  width:200rpx;
  height:200rpx;
  border-radius: 100rpx;
}

swiper{
  width:100%;
  height:400rpx;
  clear:both;
  float:left;
}

swiper image{
  width:100%;
  height:450rpx;
}

.button {
  background-color: yellow;
  display:block;
  width:180rpx;
  height:50rpx;
  border-radius: 5rpx;
  font-size:32rpx;
  font-weight:900;
  
}
</style>
