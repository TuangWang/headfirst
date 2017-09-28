/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T15:53:51+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-08T17:25:29+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import setupParentApp from './app';
import Server from './server';
import healthCheck from './data/db/health';
let models = require('./models');

function init() {
  let server, parentApp;

  // set up our collection of koa apps
  parentApp = setupParentApp();
  server = new Server(parentApp);

  models.init();

  healthCheck()

  return new Promise((resolve) => {
    resolve(server)
  });
}

module.exports = init;
