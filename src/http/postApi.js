import { $host } from './index'
import jwt_decode from 'jwt-decode'
// const {user} = useContext(Context)

export const createPost = async (post) => {
    const {data} = await $host.post('api/post/create', post)
    console.log(data)
    return data
}
export const fetchPosts = async () => {
    const {data} = await $host.get('api/post/find')
    return data
}
