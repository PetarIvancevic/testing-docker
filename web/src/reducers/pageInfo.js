'use strict';

import {mergeDeep, getInitialState} from '../utils/reducer';
import {
  PAGE_INFO_GET_ONE_SUCCESS, PAGE_INFO_GET_ONE_FAILURE
} from '../constants/actions';

const initialState = getInitialState({
  error: null,
  pageDetails: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_INFO_GET_ONE_SUCCESS:
      return mergeDeep(state, {
        error: null,
        pageDetails: action.pageInfo
      });
    case PAGE_INFO_GET_ONE_FAILURE:
      return mergeDeep(state, {
        error: action.error,
        pageDetails: null
      });
    default:
      return state;
  }
}
