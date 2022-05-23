//home模块  
import {
    reqCategoryList,
    reqGetBannerList,
    reqGetFloorList
} from '@/api'
const state = {
    //三级菜单数据
    categoryList: [],
    //轮播图数据
    bannerList: [],
    //floor
    floorList:[]
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state, floorList){
        state.floorList = floorList;
    }
};
const actions = {
    //通过api里面的接口函数调用，向服务器发送请求
    async categoryList({
        commit
    }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    //获取首页轮播图
    async getBannerList({
        commit
    }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("BANNERLIST", result.data);
        }
    },
    //获取Floor
    async getFloorList({
        commit
    }) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            commit("FLOORLIST", result.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}