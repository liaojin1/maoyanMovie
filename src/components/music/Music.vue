<template>
  <h1>music</h1>
</template>
<script>
    import store from '@/vuex/store'
    export default{
        store,
        created(){  
                this.$store.commit('routerLinks',{
                    title:'music',
                    color:'green'
                })
            }
        }
</script>

<style scoped>

</style>