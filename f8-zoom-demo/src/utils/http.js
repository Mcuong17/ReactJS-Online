import axios from "axios"

const httpClient = axios.create({
    baseURL: "https://api01.f8team.dev/api"
})

const _send = async (method, path, data, config) => {
    const respone = await httpClient.request({
        ...config,
        method,
        url: path,
        data
    })

    return respone.data
}

const get = async (path, config) => {
    const respone = await httpClient.get(path, config)
    return respone.data
}

const post = async (path, data, config) => {
    const respone = await httpClient.post(path, data, config)
    return respone.data
}

const put = async (path, data, config) => {
    const respone = await httpClient.put(path, data, config)
    return respone.data
}

const patch = async (path, data, config) => {
    const respone = await httpClient.patch(path, data, config)
    return respone.data
}

const del = async (path, config) => {
    const respone = await httpClient.del(path, config)
    return respone.data
}

const http = { get, post, put, patch, del}

export default http