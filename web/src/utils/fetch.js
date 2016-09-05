'use strict';

import fetch from 'isomorphic-fetch';
import store from './store.js';

var Promise = require('es6-promise').Promise;

function checkStatus(response) {
  console.log(response);
  if (!response.error) return response;
  let error = new Error(response.message);

  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

export default function (options, headers, body) {
  return new Promise((resolve, reject) =>
    fetch(options, headers, body)
    .then(parseJSON)
    .then(checkStatus)
    .then(resolve)
    .catch(function (error) {
      const {response} = error;

      switch (response.error.status) {
        case 401:
          store.dispatch(logout(localStorage.token, {redirect: true}));
          break;
        default:
          reject(response);
      }
    })
  );
}
