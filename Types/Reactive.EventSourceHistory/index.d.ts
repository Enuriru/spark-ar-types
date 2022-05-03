/// <reference path="../Reactive.EventSource/index.d.ts" />

/**
The `EventSourceHistory` encapsulates methods for accessing values of `EventSource` from previous frames.
*/
declare interface EventSourceHistory<T> {

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
at(index: number): EventSource<T>
```

Returns an `EventSource` for the history value at given index.
For example, `EventSourceHistory.at(0)` returns value of signal at previous frame, while `EventSourceHistory.at(1)` returns the value of the signal from two frames ago.

**Note**: See also `EventSourceHistory.frame` method which uses more intuitive negative indexing.

**Note**: You can use `EventSourceHistory[0]` to achieve same effect as calling `EventSourceHistory.at(0)`

* `index` - the index of the frame to retrieve the signal value from.
*/
at(index: number): EventSource<T>

/**
```
frame(frame: number): EventSource<T>
```

Returns an `EventSource` for the history value at given frame relative to current one.
For example, `EventSourceHistory.frame(-1)` returns value of signal at previous frame, while `EventSourceHistory.frame(-2)` returns the value of the signal from two frames ago.

**Note**: See also `EventSourceHistory.at` method for approach which is index based.

**Note**: You can use `EventSourceHistory[-1]` to achieve same effect as calling `EventSourceHistory.frame(-1)`

* `frame` - the frame to retrieve the signal value from.
*/
frame(frame: number): EventSource<T>

}
