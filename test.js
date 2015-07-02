var FirebaseRollingLog = require('./index.js');
FirebaseRollingLog.setSize(10);
var Firebase = require('firebase');

var ref = new Firebase('https://mike.firebaseio-demo.com/rolling_log');
var done = 0;
for(var i = 0; i < 5; i++) {
  ref.push(i, function() {
    done++;
    if (done == 5) {
      console.log(FirebaseRollingLog.get());
    }
  });
}
