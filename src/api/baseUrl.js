//Are we running in development or somewhere else?
export default function getBaseUrl(){
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3007/' : '/';
}