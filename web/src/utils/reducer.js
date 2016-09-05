'use strict';

import {fromJS} from 'immutable';

export function getInitialState(keys) { return fromJS(keys); }

export function mergeDeep(state, obj) { return state.mergeDeep(fromJS(obj)); }
