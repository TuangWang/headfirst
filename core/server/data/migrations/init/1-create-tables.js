/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T17:05:22+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: 1-create-tables.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-11T13:46:19+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

let Promise = require('bluebird'),
  commands = require('../../schema').commands;
let schema = require('../../schema').tables;
let schemaTables = Object.keys(schema);

module.exports = function createTables(options) {
  var transacting = options.transacting;

  return Promise.mapSeries(schemaTables, function createTable(table) {
    // logging.info('Creating table: ' + table);
    console.log('Creating table: ' + table);
    return commands.createTable(table, transacting);
  });
};
