/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T15:39:04+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-08T16:56:46+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

const mount = require('koa-mount');
const Koa = require('koa');
let core = require('./core');
let utils = require('./core/server/utils');
let parentApp = new Koa();

core().then((server) => {
  // mount our instance on our desired subdirectory path if it exists
  parentApp.use(mount("/", server.rootApp));

  return server.start(parentApp).then(()=>{
    console.log('apps boots');
  });
}).catch((err) => {
  console.log(err)
});
