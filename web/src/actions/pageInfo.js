'use strict';

import fetch from '../utils/fetch';
import {
  PAGE_INFO_GET_ONE_SUCCESS, PAGE_INFO_GET_ONE_FAILURE
} from '../constants/actions';
import {API_URL} from '../constants/globals';

function getPageInfoSuccess(page) {
  return {
    type: PAGE_INFO_GET_ONE_SUCCESS,
    pageInfo: page
  };
}

function getPageInfoFailure(err) {
  return {
    type: PAGE_INFO_GET_ONE_FAILURE,
    error: err
  };
}

export function getPageInfo(id) {
  return dispatch =>
    fetch(`${API_URL}pageInfo/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(page => dispatch(getPageInfoSuccess(page)))
    .catch(err => dispatch(getPageInfoFailure(err)));
}
