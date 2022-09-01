import request from './request'

export function login(data) {
    return request({
        url: '/vue-element-perfect/user/login',
        method: 'post',
        data
    })
}
