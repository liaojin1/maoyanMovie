<template>
  <h1>photo</h1>
</template>
<script>
    import store from '@/vuex/store'
    export default{
        store,
        created(){
            this.$store.commit('routerLinks',{
                title:'Photo',
                color:'yellow'
            })
        }
    }
</script>

<style scoped>

</style>