#firebase-rolling-log
A "rolling log" for Firebase.  It captures Firebase log messages and stores them in an in-memory 
buffer.  The buffer will "roll over" when it gets full so that it only keeps the most recent 
messages (by default 2,500).

## Usage
To use it, just `npm install firebase-rolling-log` and then require it:

``` javascript
var FirebaseRollingLog = require('firebase-rolling-log');
```

It automatically starts capturing Firebase log messages.  To get the most recent messages and clear the buffer:

``` javascript
console.log(FirebaseRollingLog.getAndClear());
```

That's basically all there is to it!

## More
Okay, there are two other methods you can call:

``` javascript
    // Get the log but don't clear it.
    var log = FirebaseRollingLog.get();

    // Set the size to something other than the default of 2500 messages.
    FirebaseRollingLog.setSize(100000);
```

## Changelog
* 0.0.0 (2015-07-01) - Initial release.
* 0.1.0 (2015-07-01) - Added timestamps to log messages.
