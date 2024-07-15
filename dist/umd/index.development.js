'use strict';

// logger.ts

var noop = function noop() {};
var createLogger = function createLogger(isProduction) {
  if (isProduction()) {
    return {
      info: noop,
      warn: noop,
      error: noop,
      log: noop
    };
  } else {
    return {
      info: console.info,
      warn: console.warn,
      error: console.error,
      log: console.log
    };
  }
};
var createLoggerUtil = function createLoggerUtil(isProduction) {
  return createLogger(isProduction);
};

exports.createLoggerUtil = createLoggerUtil;
//# sourceMappingURL=index.development.js.map
