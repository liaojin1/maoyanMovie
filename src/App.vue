<template>
  <div id="app">
    <Comon></Comon>
    <router-view></router-view>

  </div>
</template>
<script>
  import Comon from '@/components/comon/Comon'
  export default{
    name:'App',
    components:{
      Comon
    }
  }
</script>
<style scoped>
  #app{
    padding: 1rem 0;
  }
</style>
