/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.AudioTransformWrapper/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `Speaker` class encapsulates an speaker for a scene. Old class name is `AudioSource`.
*/
declare interface Speaker extends SceneObjectBase {

/**
```
(get) volume: ScalarSignal
(set) volume: ScalarSignal
```

Specifies the volume of the speaker in the range of [0.0, 1.0].
Note: To access this property you need to enable the AudioSourceVolume API capability.
*/
volume: ScalarSignal

/**
```
audioTransformAtIndex(index: number): AudioTransformWrapper
```

*/
audioTransformAtIndex(index: number): AudioTransformWrapper

/**
```
audioTransformsCount(): number
```

*/
audioTransformsCount(): number

/**
```
isPlaying(): BoolSignal
```

Returns a `BooleanSignal` indicating whether this audio source is playing.
*/
isPlaying(): BoolSignal

/**
```
minProgress(): ScalarSignal
```

Returns a `ScalarSignal` indicating the timestamp of the played audio source instance with lowest timestamp. A value of zero is returned if the audio source is not currently playing.
*/
minProgress(): ScalarSignal

}
