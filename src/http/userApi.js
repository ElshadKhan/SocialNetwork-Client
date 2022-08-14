import { $host, $authHost} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (email, password, username) => {
    const {data} = await $host.post('api/user/regist', 
    {email, password, username, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token) 
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', 
    {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const deleteUser = async (id)=> {
    const {data} = await $host.delete('api/user/delete/' + id)
    return 
}
export const updateUserLogin = async (id, username)=> {
    const {data} = await $host.put('api/user/update/' + id, {username})
    return data
}