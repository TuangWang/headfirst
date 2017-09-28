/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-27T16:42:54+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-27T18:10:46+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AdminApp from '../index'


export default (
  <Route path="/" >
    <IndexRoute component={AdminApp} />
  </Route>
)
