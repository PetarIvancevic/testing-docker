'use strict';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import pageInfo from './pageInfo';

export default combineReducers({
  pageInfo: pageInfo,
  form: formReducer
});
