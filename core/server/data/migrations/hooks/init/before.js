/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-14T19:57:39+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: before.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-14T20:03:53+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


var Promise = require('bluebird')
var models = require('../../../../models')

module.exports = function before() {
  models.init()
  return Promise.resolve()
}
