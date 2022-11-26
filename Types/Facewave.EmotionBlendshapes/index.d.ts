/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignalSource/index.d.ts" />

declare interface EmotionBlendshapes {

/**
```
(get) signalSources: Array<ScalarSignalSource>
(set) signalSources: Array<ScalarSignalSource>
```
*/
signalSources: Array<ScalarSignalSource>

/**
```
(get) signals: Array<ScalarSignal>
(set) signals: Array<ScalarSignal>
```
*/
signals: Array<ScalarSignal>

/**
```
faceExpressions(emotion: ScalarSignal): Array<ScalarSignal>
```

*/
faceExpressions(emotion: ScalarSignal): Array<ScalarSignal>

/**
```
uniqueSignalSourceName(num: number): string
```

*/
uniqueSignalSourceName(num: number): string

}
