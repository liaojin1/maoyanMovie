import Vue from 'vue'
import Router from 'vue-router'
import Comon from '@/components/comon/Comon'
import Movie from '@/components/movie/Movie'
import Photo from '@/components/photo/Photo'
import Book from '@/components/book/Book'
import Music from '@/components/music/Music'
import MoviePage from '@/components/movie/MoviePage'


Vue.use(Router)

export default new Router({
  routes: [{
    path:'/moviepage',
    name:'MoviePage',
    component:MoviePage,
  },{
      path:'/movie',
      name:'Movie',
      component:Movie,
    },{
      path:'/comon',
      name:'Comon',
      component:Comon,
    },{
      path:'/book',
      name:'Book',
      component:Book,
    },{
      path:'/music',
      name:'Music',
      component:Music,
    },{
      path:'/photo',
      name:'Photo',
      component:Photo,
    }
  ]
})
