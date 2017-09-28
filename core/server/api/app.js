/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-22T11:18:51+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: app.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-22T21:39:11+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import Koa from 'koa'
import Router from 'koa-router'
var bodyParser = require('koa-bodyparser');
var json = require('koa-json');
var apiRouter = require("./routes")


function setupApiApp() {
  let apiApp = new Koa();

  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  apiApp.use(bodyParser());
  apiApp.use(json());

  //Routing
  apiApp.use(apiRouter().routes());
  return apiApp;
}

export default setupApiApp
