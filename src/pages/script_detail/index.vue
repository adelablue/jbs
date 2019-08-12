<template>
    <div>
        script_detail page for

        <h4>{{detailObj.name}}</h4>
       <div class="address">{{detailObj.address}}</div> 

       <map
  id="citymap"
  name="citymap"
  :longitude="lng"
  :latitude="lat"
  :markers="markers"
  scale="13"
  show-location
  show-compass
  enable-rotate
  style="width:700rpx;height:500rpx;"
>
</map>


    </div>
</template>

<script>
export default {
    data() {
        return {
            detailObj: {},
            index: '',
            lat: '',
            lng: '',
            markers: []
        }
    },
    beforeMount() {
        console.log('beforeMount -------')
        this.index = this.$mp.query.index
        this.lat = this.$mp.query.lat
        this.lng = this.$mp.query.lng
        this.detailObj = this.$store.state.listTmp[this.index]
        this.markers = [{
            id: 0,
            latitude: this.lat,
            longitude: this.lng,
            width: 50,
            height: 50
        }]
    },
    mounted() {
    },
    computed: {
    },
    
}
</script>

<style lang="scss" scoped>

</style>