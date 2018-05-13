<template>
  <div>
      <ul>
          <li v-for='(val,index) in datas' :key='index' @click='goPage(val.id)'>
              <div item-left>
                  <img :src="val.img" alt="">
              </div>
              <div item-right>
                  <ul>
                      <li >
                         <p>{{val.nm}}</p>
                          <p>{{val.dir}}</p>
                          <p>{{val.cat}}</p>
                          <p>{{val.star}}</p>  
                      </li>
                  </ul>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
    import axios from 'axios'
    import store from '@/vuex/store'

    export default{
        data(){
            return{
                datas:[],
                i:0,
                isLoading:false,
            }
        },
        store,
        created(){
            this.$store.commit('routerLinks',{
                title:'Movie',
                color:'dodgerblue'
            });
            this.getData();//???

        },
        mounted(){
            window.onscroll=()=>{
             let scrollTopval = document.documentElement.scrollTop || document.body.scrollTop;
                
                if(scrollTopval+document.documentElement.clientHeight+10>=document.documentElement.scrollHeight){
                    if(this.isLoading){
                       this.getData(); 
                       this.isLoading=false;
                    }
                }
            }
        },
        methods:{
            goPage(Id){
                this.$router.push({name:'MoviePage',params:{id:Id}});
            },
            getData(){
                axios.get(API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&offset='+this.i+'&limit=10')
                .then((res)=>{
                    this.datas = this.datas.concat(res.data.data.movies);
                    this.i+=10;
                    this.isLoading=true;
                })
                .catch(()=>{

                })
            }
        }
    }
</script>

<style scoped>
  
</style>
