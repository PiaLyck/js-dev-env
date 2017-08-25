/* If 'useMockApi' is found in the query string, it will use the Mock API at localhost:3007,
otherwise it will point to the real API (in this case hosted by Express) */

export default function getBaseUrl(){
    return getQueryStringParameterByName('useMockApi' ? 'http://localhost:3007/' : '/');
}

function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
