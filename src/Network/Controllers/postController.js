import { createPostAsync, getPostsAsync, getNetworkPostsAsync, getSpecificPostAsync, commentPostAsync, likeUnlikePostAsync } from "../Services/postService";

export async function createPostController(NetworkId, PostBody, PostMedia, props) {
    let formData = new FormData();
    formData.append("NetworkId", NetworkId);
    formData.append("PostBody", PostBody);
    if (PostMedia.path) {
        if (PostMedia.mime.split('/')[0] === "image") {
            formData.append("PostImage", {
                uri: PostMedia.path,
                name: "PostImage",
                type: "image/png",
            })
            formData.append("PostType", "image")
        }
        else {
            formData.append("PostImage", {
                uri: PostMedia.path,
                name: "PostImage",
                type: "video/mp4",
            })
            formData.append("PostType", "video")
        }
    }
    const response = await createPostAsync(formData);
    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            resolve("POSTED");
            getPostsController(0, 0, props);
        } else {
            reject(response.message);
        }
    });
}

export async function getPostsController(pageNo, pageSize, props) {
    const response = await getPostsAsync(pageNo, pageSize);
    if (response.code === 102 || response.code === 101) {
        props.setFeedPostsList(response.data.data);
        return response;
    } else {
        reject(response.message);
    }
}

export async function getNetworkPostsController(networkId, pageNo, pageSize) {
    const response = await getNetworkPostsAsync(networkId, pageNo, pageSize);
    if (response.code === 102) {
        return response;
    }
}

export async function getSpecificPostController(postId, props) {
    const response = await getSpecificPostAsync(postId);
    if (response.code === 102) {
        return response;
    }
}

export async function commentPostController(postId, commentValue, props) {
    const body = {
        postId,
        comment: commentValue
    }
    const response = await commentPostAsync(body);
    return response;
}

export async function likeUnlikePostController(postId, props) {
    const body = {
        postId
    }
    const response = await likeUnlikePostAsync(body);
    // console.log(response);
    // if (response.code === 101) {
    //     //fetching and then updating this post over home feeds redux-store array's index
    //     console.log(props.feedPostsList.length);
    //     const specificPostResponse = await getSpecificPostAsync(postId);
    //     for (let index = 0; index < props.feedPostsList.length; index++) {
    //         if (postId === props.feedPostsList[index].id) {
    //             const tempArray = [...props.feedPostsList];
    //             tempArray[index] = specificPostResponse.data.data;
    //             props.setFeedPostsList(tempArray);
    //             break;
    //         }
    //     }
    // }
    return response;
}