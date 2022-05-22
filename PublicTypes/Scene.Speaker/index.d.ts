/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
declare interface Speaker extends SceneObjectBase {
/**
* ```
(get) volume: ScalarSignal
(set) volume: ScalarSignal
```

Specifies the volume of the speaker in the range of [0.0, 1.0].
Note: To access this property you need to enable the AudioSourceVolume API capability.
*/
volume: ScalarSignal;
}
