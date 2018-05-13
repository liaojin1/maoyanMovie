<template>
  <div>
      {{datas.cat}}
  </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                 datas:{}
            }
           
        },
        created(){
            axios.get(API_PROXY+'http://m.maoyan.com/movie/'+this.$route.params.id+'.json')
            .then((res)=>{
                this.datas = res.data.data.MovieDetailModel;
            }).catch(()=>{

            })
        }
    }
</script>
<style scoped>

</style>
