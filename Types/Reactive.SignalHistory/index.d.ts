/// <reference path="../Reactive.ISignal/index.d.ts" />

/**
The `SignalHistory<T>` class encapsulates methods for accessing values from previous frames.
*/
declare interface SignalHistory {

/**
```
(get) length: number
(set) (Not Available)
```

Returns how many frames are being tracked by this history object.
*/
length: number

/**
```
at(index: number): ISignal
```

Returns a `Signal` for the history value at given index.
For example, `SignalHistory.at(0)` returns value of signal at previous frame, while `SignalHistory.at(1)` returns the value of the signal from two frames ago.

Note: See also `SignalHistory.frame` method which uses more intuitive negative indexing.

Note: You can use `SignalHistory[0]` to achieve the same effect as calling `SignalHistory.at(0)`

* `index` - the index of the frame to retrieve the signal value from.
*/
at(index: number): ISignal

/**
```
frame(frame: number): ISignal
```

Returns a `Signal` for the history value at given frame relative to current one.
For example, `SignalHistory.frame(-1)` returns value of signal at previous frame, while `SignalHistory.frame(-2)` returns the value of the signal from two frames ago.

Note: See also `SignalHistory.at` method for approach which is index based.

Note: You can use `SignalHistory[-1]` to achieve same effect as calling `SignalHistory.frame(-1)`

* `frame` - the frame to retrieve the signal value from.
*/
frame(frame: number): ISignal

}
