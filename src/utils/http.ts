// 封装 axios

import axios from 'axios'

const httpInstance = axios.create({
    baseURL: "",
    timeout: 5000
})
// 拦截器
httpInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return error;
    }
);
httpInstance.interceptors.response.use(
    (config) => {
        return config;
    },
    (error) => {
        return error;
    }
)

export {httpInstance}
