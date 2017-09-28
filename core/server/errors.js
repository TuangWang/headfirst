/**
 * Created by xf on 11/9/2017.
 */

var _ = require('lodash'),
  util = require('util'),
  errors = require('ghost-ignition').errors;

function HfError(options) {
  options = options || {};
  this.value = options.value;

  errors.IgnitionError.call(this, options);
}

// jscs:disable
var hfErrors = {
  DataExportError: function DataExportError(options) {
    HfError.call(this, _.merge({
      statusCode: 500,
      errorType: 'DataExportError'
    }, options));
  },
  DataImportError: function DataImportError(options) {
    HfError.call(this, _.merge({
      statusCode: 500,
      errorType: 'DataImportError'
    }, options));
  },
  DatabaseVersionError: function DatabaseVersionError(options) {
    HfError.call(this, _.merge({
      hideStack: true,
      statusCode: 500,
      errorType: 'DatabaseVersionError'
    }, options));
  },
  DatabaseNotPopulatedError: function DatabaseNotPopulatedError(options) {
    HfError.call(this, _.merge({
      statusCode: 500,
      errorType: 'DatabaseNotPopulatedError'
    }, options));
  },
  DatabaseNotSeededError: function DatabaseNotSeededError(options) {
    HfError.call(this, _.merge({
      statusCode: 500,
      errorType: 'DatabaseNotSeededError'
    }, options));
  },
  EmailError: function EmailError(options) {
    HfError.call(this, _.merge({
      statusCode: 500,
      errorType: 'EmailError'
    }, options));
  },
  ThemeValidationError: function ThemeValidationError(options) {
    HfError.call(this, _.merge({
      statusCode: 422,
      errorType: 'ThemeValidationError',
      errorDetails: {}
    }, options));
  },
  DisabledFeatureError: function DisabledFeatureError(options) {
    HfError.call(this, _.merge({
      statusCode: 409,
      errorType: 'DisabledFeatureError',
    }, options));
  },
  UpdateCollisionError: function UpdateCollisionError(options) {
    HfError.call(this, _.merge({
      statusCode: 409,
      errorType: 'UpdateCollisionError',
    }, options));
  }
};

util.inherits(HfError, errors.IgnitionError);
_.each(hfErrors, function (error) {
  util.inherits(error, HfError);
});

// we need to inherit all general errors from HfError, otherwise we have to check instanceof IgnitionError
_.each(errors, function (error) {
  if (error.name === 'IgnitionError' || typeof error === 'object') {
    return;
  }

  util.inherits(error, HfError);
});

module.exports = _.merge(hfErrors, errors);
module.exports.GhostError = HfError;
