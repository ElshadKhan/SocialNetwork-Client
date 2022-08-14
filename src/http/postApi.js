import { $host } from './index'

export const createPost = async (post) => {
    const {data} = await $host.post('api/post/create', post)
    return data
}
export const fetchPosts = async () => {
    const {data} = await $host.get('api/post/findAllPosts')
    return data
}
export const fetchUserPosts = async (id) => {
    const {data} = await $host.get('api/post/findAllUserPosts/' + id)
    return data
}
