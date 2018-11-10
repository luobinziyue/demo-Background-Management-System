import axios from 'axios';
const baseURL = "http://localhost:8888/api/private/v1/"
axios.defaults.baseURL = baseURL;

import {getToken} from '@/api/cookies';

//axios拦截器的作用：在每一次发送请求的时候，都会先给请求头配置上token，将token传送到后台进行校验
axios.interceptors.request.use(config => {
    let token = getToken();
    if(token) {
        config.headers['Authorization'] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

//登录验证
export const checkUser = params => {
  return axios.post('login', params).then(res => res.data)
}

//获取用户列表
export const getUserList = params=>{
    return axios.get('users',params).then(res=>res.data);
}
