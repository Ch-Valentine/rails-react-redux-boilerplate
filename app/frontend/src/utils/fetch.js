import fetch        from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new TypeError('Request was failed');
  }
}

export function parseJSON(response) {
  return response.json();
}

export function httpGet(url) {
  return fetch( url, {
        method: 'get',
        headers:
         {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         }
  })
  .then(checkStatus)
  .then(parseJSON);
}
