import axios from '../utils/request'
import qs from 'qs'

export const toLogin = (params) => {
    return axios({
        url: '/api/login',
        method: 'post',
        data: qs.stringify(params),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

// user
export const toRegister = (params) => {
    return axios({
        url: '/api/user/createUser',
        method: 'post',
        data: params
    })
}

export const getAllUsers = () => {
    return axios({
        url: '/api/user/getAllUsers',
        method: 'get',
    })
}

// potentialCustomer
export const getAllClients = () => {
    return axios({
        url: '/api/potentialCustomer/findAllPotentialCustomer',
        method: 'get',
    })
}

export const getClientsByCondition = (params) => {
    console.log(params)
    return axios({
        url: '/api/potentialCustomer/findPotentialCustomerByCustomerName',
        method: 'post',
        data: qs.stringify(params),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}