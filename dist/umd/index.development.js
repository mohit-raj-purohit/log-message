'use strict';

// logger.ts

var noop = function noop() {};
var createLogger = function createLogger(_ref) {
  var shouldDisableNativeLogs = _ref.shouldDisableNativeLogs;
  if (shouldDisableNativeLogs) {
    return {
      info: noop,
      warn: noop,
      error: noop,
      log: noop
    };
  } else {
    return {
      info: console.info.bind(console),
      warn: console.warn.bind(console),
      error: console.error.bind(console),
      log: console.log.bind(console)
    };
  }
};
var traceline = function traceline(options) {
  return createLogger(options);
};

exports.traceline = traceline;
//# sourceMappingURL=index.development.js.map
