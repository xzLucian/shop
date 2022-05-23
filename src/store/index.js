//导入vuex
import Vuex from 'vuex';
import Vue from 'vue';
//使用vuex
Vue.use(Vuex);
//引入模块
import home from './home'
import search from './search'

//对外暴露一个store实例
export default new Vuex.Store({
    modules:{
        home,
        search,
    }
});

