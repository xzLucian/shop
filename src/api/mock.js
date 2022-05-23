//对axios二次封装
import axios from 'axios';

const requests = axios.create({
    //配置对象
    //基础路径，发送请求是路径中会出现api
    baseURL: "/mock",
    //代表请求超时的时间
    timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
    return config;
})
//响应拦截器
requests.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(new Error(error.message));
});
export default requests;