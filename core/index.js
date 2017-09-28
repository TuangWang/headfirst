/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T15:49:29+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-26T11:37:01+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

 var server = require('./server');

 // Set the default environment to be `development`
 process.env.NODE_ENV = process.env.NODE_ENV || 'development';

 function makeHf(options) {
     options = options || {};

     return server(options);
 }

 module.exports = makeHf;
