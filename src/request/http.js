import axios from 'axios'
import router from '../router/index.js'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' //post请求头
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

//http request 拦截器
axios.interceptors.request.use(
    config => {
        config.isForm ?
            config.headers["content-type"] = "application/x-www-form-urlencoded" :
            config.headers["content-type"] = "application/json"

        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status){
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: '/login',
                    })
                    break
            }
        }
    }
)
export function apiget(url,params) {
    return new Promise((resolve,reject) =>{
        axios.get(url,{
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
export function apipost(url,params) {
    return new Promise((resolve,reject) =>{
        axios.post(url,JSON.stringify(params)
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
export function apiput(url,params) {
    return new Promise((resolve,reject) =>{
        axios.put(
            url,params
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
export function apidelete(url,params) {
    return new Promise((resolve,reject) =>{
        axios.delete(url,{
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
