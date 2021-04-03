//no need to pass same value for detault parameters
import EndPoint from "../../Constants/EndPoints";
import { GetAsync, PostAsync, PostWithFormDataAsync } from "./httpRequests";

export async function createPostAsync(formData) {
    const { createPost } = EndPoint;
    return await PostWithFormDataAsync(createPost, formData, true);
}

export async function getPostsAsync(pageNo, pageSize) {
    const { getPosts } = EndPoint;
    return await GetAsync(getPosts(pageNo, pageSize), true);
}

export async function getNetworkPostsAsync(networkId, pageNo, pageSize) {
    const { getNetworkPosts } = EndPoint;
    return await GetAsync(getNetworkPosts(networkId, pageNo, pageSize), true);
}

export async function getSpecificPostAsync(postId) {
    const { getSpecificPost } = EndPoint;
    return await GetAsync(getSpecificPost(postId), true);
}

export async function commentPostAsync(body) {
    const { commentPost } = EndPoint;
    return await PostAsync(commentPost, body, true);
}

export async function likeUnlikePostAsync(body) {
    const { likeUnlikePost } = EndPoint;
    return await PostAsync(likeUnlikePost, body, true);
}