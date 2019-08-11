<template>
    <div>
        script_detail page for

        {{detailObj.name}}
        {{detailObj.address}}

    </div>
</template>

<script>

export default {
    data() {
        return {
            detailObj: {},
            index: ''
        }
    }
    ,
    beforeMount() {
        console.log('beforeMount -------')
        this.index = this.$mp.query.index
        console.log('this.index' + this.index)
    },
    mounted() {
        console.log('mounted -------')
        console.log('this.$store.state.listTmp')
        console.log(this.$store.state.listTmp)
        console.log('this.$store.state.listTmp[this.index]')
        console.log(this.$store.state.listTmp[this.index])
        this.detailObj = this.$store.state.listTmp[this.index]
    },
    computed: {
    },
    
}
</script>

<style lang="scss" scoped>

</style>