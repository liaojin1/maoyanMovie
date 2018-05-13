import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    title:'movie',
    color:'dodgerblue'
}
const mutations= {
    routerLinks(state,params){
        state.title = params.title;
        state.color = params.color;
    }
}
// vue固定语法这样把state和mutation暴露出来
export default new Vuex.Store({
    state,
    mutations
})