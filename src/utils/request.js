import axios from 'axios'
import qs from 'qs'
import config from '../../config'

axios.interceptors.request.use(config => {
    // Do something before request is sent
    config.withCredentials = true  // 需要跨域打开此配置
    // post提交 data存在 并且 data不是FormData对象时对数据进行json化处理
    // if(config.method==='post' && config.data && config.data.constructor !== FormData){
    //   config.data = qs.stringify(config.data)
    //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // }
    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(response => {
    // Do something with response data
    return response.data
}, function(error) {
    // Do something with response error
    return Promise.reject(error)
})

const baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl)

export default {
    get(url, params) {
        return axios({
            method: 'get',
            url: baseURL + url,
            params,
            timeout: 30000
        })
    },
    getextra(url, params) {
      return axios({
        method: 'get',
        url: url,
        params,
        timeout: 30000
      })
    },
    post(url, data) {
        return axios({
            method: 'post',
            url: baseURL + url,
            data: qs.stringify(data),
            timeout: 30000,
            headers: {
                'Comtent-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    }
}
