/// <reference path="../AudioGraphApi.AudioOutputNode/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


declare interface AudioPlayerNode extends AudioOutputNode {

/**
```
(get) assetName: string
(set) (Not Available)
```
*/
assetName: string

/**
```
(get) currentPosition: ScalarSignal
(set) (Not Available)
```
*/
currentPosition: ScalarSignal

/**
```
(get) looping: BoolSignal
(set) looping: BoolSignal
```
*/
looping: BoolSignal

/**
```
(get) mediaDuration: ScalarSignal
(set) (Not Available)
```
*/
mediaDuration: ScalarSignal

/**
```
(get) (Not Available)
(set) playState: ScalarSignal
```
*/
playState: ScalarSignal

/**
```
pause(): Promise<void>
```

*/
pause(): Promise<void>

/**
```
play(): Promise<void>
```

*/
play(): Promise<void>

/**
```
reset(): Promise<void>
```

*/
reset(): Promise<void>

/**
```
setCurrentPosition(positionMs: number): Promise<void>
```

*/
setCurrentPosition(positionMs: number): Promise<void>

/**
```
stop(): Promise<void>
```

*/
stop(): Promise<void>

}
