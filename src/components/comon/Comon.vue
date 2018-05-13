<template>
  <div>
      <header :style="'background-color:'+$store.state.color">
          <p class='header-left'>首页</p>
          <p class='header-right'>{{$store.state.title}}</p>
      </header>
      <footer :style="'background-color:'+$store.state.color">
          <ul>
              <li @click="routerLink('/movie')">电影</li>
              <li @click="routerLink('/book')">书籍</li>
              <li @click="routerLink('/music')">音乐</li>
              <li @click="routerLink('/photo')">图片</li>
          </ul>
      </footer>
  </div>
</template>
<script>
// vuex是vue全家桶中的，因此需要固定语法，先引包import再注册export default
    import store from '@/vuex/store'
    export default{
        store,
        methods:{
            routerLink(path){
                this.$router.push(path);
            }
        }
    }
</script>

<style scoped>
    header{
        background-color: dodgerblue;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rem;
    }
    footer{
        background-color: dodgerblue;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
    }
    .header-left{
        float: left;
        line-height: 1rem;
        color: white;
    }
    .header-right{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: .7rem;
        color: white;
        text-align: center;
      
    }
    ul{
        height: 1rem;
      display: flex;
    }
    ul li{
        line-height: 1rem;
      flex-direction: row;
      flex-wrap: nowrap;/*一行排不下默认不换行*/
      flex-grow: 1;
      text-align: center;
      color: white;
    }

</style>
