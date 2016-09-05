'use strict';

function CustomError(status, message, debugInfo) {
  Error.call(this, message);
  this.message = message;
  this.status = status;
  if (debugInfo) this.debugInfo = debugInfo;
}

CustomError.prototype.constructor = CustomError;
CustomError.prototype = Object.create(Error.prototype);

function BaseError(status, msg) {
  return new CustomError(status, msg);
}

function Error400(msg) {
  return BaseError(400, msg);
}

function ParametersError(debug) {
  return BaseError(400, 'Parameters error', debug);
}

module.exports = {
  Error400: Error400,
  ParametersError: ParametersError
};
