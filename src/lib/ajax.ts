export const GET: string = 'get';
export const POST: string = 'post';

export function ajax(url: RequestInfo, method: string = GET, body?: BodyInit) {
    return fetch(url, {method, body});
}

export function get(url: RequestInfo, body?: BodyInit) {
    return ajax(url, GET, body);
}

export function post(url: RequestInfo, body?: BodyInit) {
    return ajax(url, POST, body);
}