/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-26T14:27:19+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: user.reducer.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-26T14:52:43+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import Immutable from 'immutable'

const $initialState = Immutable.fromJS({
  name: 'username'
});

export default function user($$state = $initialState, action){
  switch (action.type) {
    case "initialization":
      break;
    default:
      return $$state
  }
}
