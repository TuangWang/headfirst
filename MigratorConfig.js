/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T17:06:45+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: MigratorConfig.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-08T17:52:41+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

 var config = require('./core/server/config');

// /Users/xf/WorkStudio/headfirst/core/server/data/migrations/
 module.exports = {
     database: config.get('database'),
     migrationPath: config.get('paths:migrationPath'),
     currentVersion: '1.0',  // your current database version
 };
