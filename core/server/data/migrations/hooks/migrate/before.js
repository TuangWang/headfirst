/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-14T20:04:47+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: before.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-14T20:05:28+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


 var backup = require('../../../db/backup'),
     models = require('../../../../models');

 module.exports = function before(options) {
     models.init();
     return backup(options);
 };
