/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T17:21:11+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: health.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-08T17:27:08+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


let KnexMigrator = require('knex-migrator');
import config from '../../config';

//  errors = require('../../errors');
// models = require('../../models');

function healthCheck() {

  let knexMigrator = new KnexMigrator({
    knexMigratorFilePath: config.get('paths:appRoot') // path to migrator config file (optional)
  });

  return knexMigrator.isDatabaseOK()
    .then(() => {
      console.log("database is ok.")
    })
    .catch((err) => {
      // err contains a specific code, based on that code you decide (err.code)

      // database is not initialised?
      knexMigrator.init();

      // database is not migrated?
      knexMigrator.migrate();
    })
};

export default healthCheck;
