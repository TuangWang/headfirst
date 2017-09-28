/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-14T19:57:45+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: after.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-14T20:02:40+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

var config = require('../../../../config');
var database = require("../../..db");

module.exports = function after(){
  // do not close database connection in test mode, because all tests are excuted one after another
  // this check is not nice, but there is only one other solution i can think of:
  // foward a custom object to knex-migrator, which get's forwarded to the hooks
  if(config.get('env').match(/testing/g)) {
    return
  }
  // we need to close the database connection
  // the after hook signals the last step of a knex-migrator command
  return database.knex.destroy();
}
