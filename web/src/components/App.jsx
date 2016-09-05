'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPageInfo} from '../actions/pageInfo';

@connect(state => ({
  pageInfo: state.pageInfo.getIn(['pageDetails'])
}))
export default class App extends Component {

  componentWillMount() {
    const {dispatch} = this.props;

    dispatch(getPageInfo(1));
  }

  render() {
    const {pageInfo} = this.props;

    return (
      <div>
        <h1>This is an awesome heading!</h1>
        <p>Hot reloading is working.</p>

        {pageInfo && <p>{pageInfo.get('description')}</p>}
      </div>
    );
  }
}
