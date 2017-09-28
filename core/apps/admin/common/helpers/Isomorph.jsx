/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-26T11:23:26+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: Isomorph.jsx
 * @Last modified by:   xf
 * @Last modified time: 2017-09-26T16:19:23+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */
import React, {PropTypes} from 'react'
import { Router, IndexRoute, createMemoryHistory, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'

import configureStore from '../../redux/configureStore'
// import routes from '../../redux/routes'

export default class Isomorph extends React.Component {
  static propTyps = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  static createStore = initialState => configureStore(initialState);
  // static createHistory = (store, path) => path === undefined
  //   ? syncHistoryWithStore(browserHistory, store)
  //   : createMemoryHistory(path)

  render() {
    const {store, history} = this.props
    return (
      <Provider store={store}>
        <Router history={{}} routes={{}}/>
      </Provider>
    )
  }
}
