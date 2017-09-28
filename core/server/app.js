/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T15:54:44+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: app.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-22T14:41:26+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import Koa from 'koa'
import mount from 'koa-mount'
import setupApiApp from './api/app'
import setupAdminApp from './admin'

function setupParentApp() {
  let parentApp = new Koa()

  /**
    mount the apps on the parentApp
    */
  // API
  parentApp.use(mount('/api/v0.1', setupApiApp()))

  // Admin
  parentApp.use(mount('/admin', setupAdminApp()))

  // Blog
  // parentApp.use(mount('/blog', setupBlogApp()))

  return parentApp;
}

export default setupParentApp
