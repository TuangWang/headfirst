/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-14T20:05:05+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: beforeEach.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-14T20:06:01+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

 var Promise = require('bluebird');

 module.exports = function beforeEach() {
     return Promise.resolve();
 };
