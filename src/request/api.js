import request from './request'

// 登录接口
export const LoginApi = (params) => request.post('/login/match', params)

// 注册接口
export const RegisterApi = (params) => request.post('/1024/register', params)