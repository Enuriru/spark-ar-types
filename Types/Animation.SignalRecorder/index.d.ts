/// <reference path="../Animation.SignalRecord/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"recordedSignalsForSamplers","orCapability":""}]
*/


/**
The `SignalRecorder` class enables recording and playback of signal values.
*/
declare interface SignalRecorder {

/**
```
(get) durationMs: ScalarSignal
(set) (Not Available)
```

Returns duration of SignalRecorder recording so far, in milliseconds.
**NOTE**: There may be up to a 2 frame delay in this value.
*/
durationMs: ScalarSignal

/**
```
(get) recordCount: ScalarSignal
(set) (Not Available)
```

Returns number of records taken in this SignalRecorder so far.
**NOTE**: There may be up to a 2 frame delay in this value.
*/
recordCount: ScalarSignal

/**
```
stop(): SignalRecord
```

Stops this recorder and returns a Signal Record.
*/
stop(): SignalRecord

}
