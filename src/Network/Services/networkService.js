import EndPoint from '../../Constants/EndPoints';
import { GetAsync, PostAsync } from './httpRequests';

export async function getNetworksListByUserAsync(pageNo, pageSize) {
    const { getNetworksListByUser } = EndPoint;
    return await GetAsync(getNetworksListByUser(pageNo, pageSize), true);
}
export async function createNetwork(body) {
    const { createNetwork } = EndPoint;
    return await PostAsync(createNetwork, body, true);
}
export async function createNetworkAdminRequest(body) {
    const { createNetworkAdminRequest } = EndPoint;
    return await PostAsync(createNetworkAdminRequest, body, true);
}
export async function getNetworksList(page, pageSize) {
    const { getNetworksList } = EndPoint;
    return await GetAsync(getNetworksList(page, pageSize), true);
}
export async function connectNetwork(networkId) {
    const { getNetworkConnect } = EndPoint;
    return await GetAsync(getNetworkConnect(networkId), true);
}
export async function getNetworkDetailsAsync(networkId, pageNo, pageSize) {
    const { getNetworkDetails } = EndPoint;
    return await GetAsync(getNetworkDetails(networkId, pageNo, pageSize), true);
}
// export async function getNetworkPostsAsync(networkId, pageNo, pageSize) {
//     const { getNetworkPosts } = EndPoint;
//     return await GetAsync(getNetworkPosts(networkId, pageNo, pageSize), true);
// }