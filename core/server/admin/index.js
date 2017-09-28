/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T16:03:37+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-28T14:03:26+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


import Koa from 'koa'
import { viewhook } from './middleware'
import path from 'path'
import router from './router'
let serve = require("koa-static")


let setupAdminApp = () => {
  let adminApp = new Koa()
  adminApp.use(serve(path.join(process.cwd(), 'static/admin')))
  adminApp.use(viewhook({beautiful: true}))
  adminApp.use(router.routes())

  return adminApp
}

export default setupAdminApp
