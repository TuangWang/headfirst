/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-26T14:24:57+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: configureStore.jsx
 * @Last modified by:   xf
 * @Last modified time: 2017-09-26T16:15:06+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import rootReducer from './reducer'
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'

export default function configureStore(initialState) {
  // add middleware thunk
  let middlewares = [thunk]

  // config and push middleware redux-logger


  // push middleware rootEpic

  const store = createStore(rootReducer)

  return store
}
