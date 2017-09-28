var HFLogger = require('./HFLogger');

/**
 * @TODO:
 * - explain the options
 */
module.exports = function createNewInstance(options) {
    options = options || {};

    var adapter = new HFLogger({
        domain: options.domain,
        env: options.env,
        mode: options.mode,
        level: options.level,
        transports: options.transports,
        rotation: options.rotation,
        path: options.path,
        loggly: options.loggly
    });

    return adapter;
};

module.exports.GhostLogger = HFLogger;
