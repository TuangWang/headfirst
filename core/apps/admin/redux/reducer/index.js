/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-26T14:26:11+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-26T14:54:30+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import user from './user.reducer'
import {combineReducers} from 'redux'

export default combineReducers({
  user: user
})
