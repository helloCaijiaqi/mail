/**
 * Created by admint on 2019/10/3.
 */
import axios from 'axios'
export function httpRequest(config){
    const instance = axios.create({
        baseURL:'',
        timeout:5000
    })
    //interceptor
    instance.interceptor.request.use((config) => { return config},(err) => {})
    instance.interceptor.response.use((res) => { return res},(err) => {})
    return instance(config)
}