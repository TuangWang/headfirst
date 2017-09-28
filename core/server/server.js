/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T15:54:33+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: server.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-26T16:24:34+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

 import Promise from 'bluebird';
 import config from './config';

class Server {

  constructor(rootApp) {
    this.rootApp = rootApp;
    this.httpServer = null;
    this.connections = {};
    this.connectionId = 0;
  }

  start(externalApp) {
    let self = this,
      rootApp = externalApp ? externalApp : self.rootApp;

    return new Promise((resolve, reject) => {
      rootApp.use(ctx => {
        ctx.body = 'hello world';
      });

      self.httpServer = rootApp.listen(
        config.get('server').port,
        config.get('server').host
      );

      self.httpServer.on('error', (error) => {
        reject(error);
      });

    });
  }
}

export default Server;
