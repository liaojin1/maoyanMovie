<template>
  <h1>book</h1>
</template>
<script>
import store from '@/vuex/store'
    export default{
        store,
        created(){
            this.$store.commit('routerLinks',{
                title:'Book',
                color:'rgb(11,11,11)',
            })
        }
    }
</script>

<style scoped>

</style>