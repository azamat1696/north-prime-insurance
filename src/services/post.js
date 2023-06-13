import {post,get,postJson} from './request'

export const getPosts = () => get('posts');
export const getPost = (id) => get(`posts/${id}`);
export const createPost = (data) => post('posts',data);
export const updatePost = (id,data) => post(`posts/${id}`,data);

export const getPostsJson = (data) => postJson('posts',data,'POST','JSON')