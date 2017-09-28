/**
 * Created by xf on 12/9/2017.
 */
// NOTICE: if we dimiss the get keyword here,
// what we get is not the object specified file exported instead of
// the function. config() {.....}
// you can try it out in jsbin
module.exports = {
  get config() {return require('./lib/config');},
  get debug() {return require('./lib/debug');},
  get errors() {return require('./lib/errors');},
  get server() {return require('./lib/server');},
  get logging() {return require('./lib/logging');}
};

