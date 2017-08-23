//Import polyfill for browsers that does not support Fetch natively yet. Consider using polyfill.io 
import 'whatwg-fetch';

//Public function
export function getDogs() {
    return get('dogs');
}

//Private functions
function get(url) {
    return fetch(url).then(OnSuccess, OnError);
}

function OnSuccess(response) {
    return response.json();
}

function OnError(error) {
    console.log(error); //eslint-disable-line no-console
}