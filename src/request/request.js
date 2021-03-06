import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置项
const axiosOption = {
  baseURL: 'http://124.223.172.34:3000',
  timeout: 5000
}

// 创建一个单例
const instance = axios.create(axiosOption);

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  Nprogress.start()
  let token = localStorage.getItem('cms-token')
  if (token) {
    config.headers = {
      'cms-token': token
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  Nprogress.done()
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;
