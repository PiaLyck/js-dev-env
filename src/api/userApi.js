//Import polyfill for browsers that does not support Fetch natively yet. Consider using polyfill.io 
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();
console.log(baseUrl);

//Public function
export function getUsers() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

//Private functions
function get(url) {
    return fetch(baseUrl + url).then(OnSuccess, OnError);
}

//Can't name the function "delete" because that is a keyword in JavaScript, so "del" it is.
function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });
    return fetch(request).then(OnSuccess, OnError);
}

function OnSuccess(response) {
    return response.json();
}

function OnError(error) {
    console.log(error); //eslint-disable-line no-console
}