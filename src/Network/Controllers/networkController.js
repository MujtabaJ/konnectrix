//create constants for networks codes UNAUT_ERROR
//check on based on constants
import { connectNetwork, createNetwork, createNetworkAdminRequest, getNetworkDetailsAsync, getNetworkPostsAsync, getNetworksList, getNetworksListByUserAsync } from "../Services/networkService";

export async function getNetworksListByUserController(pageNo, pageSize, props) {
    const response = await getNetworksListByUserAsync(pageNo, pageSize);
    if (response.code === 102) {
        props.setUserConnectedNetworksList(response.data.data);
    }
}

export async function getNetworkDetailsController(networkId, pageNo, pageSize) {
    const response = await getNetworkDetailsAsync(networkId, pageNo, pageSize);
    if (response.code === 102 || response.code === 101) {
        return response.data;
    } else {
        return response.message;
    }
}
// export async function getNetworkPostsController(networkId, pageNo, pageSize) {
//     const response = await getNetworkPostsAsync(networkId, pageNo, pageSize);
//     if (response.code === 102) {
//         return response;
//     }
// }

export async function connectNetworkController(networkID) {
    const response = await connectNetwork(networkID);
    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            resolve(response.data);
        } else {
            reject(response.message);
        }
    });
}

export async function getNetworkListController(page, pageSize) {
    const response = await getNetworksList(page, pageSize);
    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            resolve(response.data);
        } else {
            reject(response.message);
        }
    });
}

export async function createNetworkAdminRequestController(state) {

    const { name, email, phone, designation, message } = state;

    const body = {
        SecondaryFullName: name,
        SecondaryEmail: email,
        SecondaryPhone: phone,
        SecondaryDesignation: designation,
        Message: message,
    }

    const response = await createNetworkAdminRequest(body);
    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            resolve(response.message);
        } else {
            reject(response.message);
        }
    });

}
