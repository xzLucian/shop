//API进行统一管理
import requests from './request'
import mockRequest from './mock'
//三级联动接口
export const reqCategoryList = () => {
    //发送请求
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get',
    });
}
//获取banner
export const reqGetBannerList = () => {
    //发送请求
    return mockRequest({
        url: '/banner',
        method: 'get',
    });
}
//获取Floor组件的数据
export const reqGetFloorList = () => {
    //发送请求
    return mockRequest({
        url: '/floor',
        method: 'get',
    });
}

//获取搜索模块数据
//当前这个接口，至少给服务器传递一个空对象
export const reqGetSearchInfo = (params) => {
    //发送请求
    return requests({
        url: '/list',
        method: 'post',
        data: params
    });
}