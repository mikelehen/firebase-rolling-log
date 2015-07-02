var Firebase = require('firebase');

var FirebaseRollingLog = (function() {
  var DEFAULT_SIZE = 2500;
  var buffer, pos, size;

  function setSize(newSize) {
    buffer = new Array(newSize);
    pos = 0;
    size = 0;
  }

  function get() {
    var log = '';
    var start = (pos - size + buffer.length) % buffer.length;
    for (var i = 0; i < size; i++) {
      log += buffer[(start + i) % buffer.length] + '\n';
    }
    return log;
  }

  function getAndClear() {
    var log = get();
    size = 0;
    return log;
  }

  setSize(DEFAULT_SIZE);

  Firebase.enableLogging(function (msg) {
    buffer[pos] = new Date().toISOString() + ': ' + msg;
    pos = (pos + 1) % buffer.length;
    size = Math.min(size + 1, buffer.length);
  });

  return {
    setSize: setSize,
    get: get,
    getAndClear: getAndClear
  }
})();

module.exports = FirebaseRollingLog;
