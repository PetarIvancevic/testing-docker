'use strict';

const error = require('../utils/error');

function catch404(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}

function ErrorHandler(options) {
  return function _errorHandler(err, req, res, next) {
    res.status(err.status || 500);

    res.json({
      message: err.message,
      debugInfo: err.debugInfo,
      error: (options.env === 'development') ? err : undefined
    });
  };
}

module.exports = {
  catch404: catch404,
  ErrorHandler: ErrorHandler
}
