import { $authHost } from './index';

export const createPost = async (post) => {
  const { data } = await $authHost.post('api/post/create', post);
  return data;
};
export const fetchPosts = async () => {
  const { data } = await $authHost.get('api/post/findAllPosts');
  return data;
};
export const fetchUserPosts = async (id) => {
  const { data } = await $authHost.get(`api/post/findAllUserPosts/${id}`);
  return data;
};
