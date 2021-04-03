//use either await or then
import { validateAccessToken } from "./authService";


export async function GetAsync(baseUrl, authorize = true) {

    let headers = {
        "Accept": "application/json"
    }

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {//use either await or then
        return await fetch(baseUrl, {
            method: 'GET',
            headers: headers
        }).then(res => {
            // console.log(res);
            return res.json()
        });
    } catch (error) {
        console.error(error);
    }
}

export async function DeleteAsync(baseUrl, authorize = true) {

    let headers = {};

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: 'DELETE',
            headers: headers
        }).then(res => {
            res.json()
            // console.log(res);
        });
    } catch (error) {
        return console.error(error);
    }
}

export async function PostAsync(baseUrl, body, shouldUseToken = true) {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    if (shouldUseToken) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        }).then(res => {
            // console.log(res);
            return res.json();
        });
    } catch (error) {
        //console.log(error);
        console.error(error);
    }
}

export async function PostWithFormDataAsync(baseUrl, formData, authorize = true) {

    let headers = {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
    };

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: 'POST',
            body: formData,
            headers: headers,
        }).then(res => {
            // console.log('res', res);
            return res.json();
        });
    } catch (error) {
        console.error(error);
    }
}

export async function PutAsync(baseUrl, body, shouldUseToken = true) {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    if (shouldUseToken) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(body)
        }).then(res => {
            // console.log(res);
            return res.json();
        });
    } catch (error) {
        //console.log(error);
        console.error(error);
    }
}
export async function PutWithFormDataAsync(baseUrl, formData, authorize = true) {

    let headers = {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
    };

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: 'PUT',
            body: formData,
            headers: headers,
            redirect: 'follow'
        }).then(res => {
            // console.log(res);
            return res.json();
        });
    } catch (error) {
        console.error(error);
    }
}