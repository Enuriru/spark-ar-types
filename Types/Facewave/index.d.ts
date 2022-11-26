/// <reference path="../Avatar.VisemeType/index.d.ts" />
/// <reference path="../Facewave.EmotionType/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"facewave","orCapability":""},{"kind":"introducedBy","version":3745275114},{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
The `FacewaveModule` class allows you to get visemes from microphone input.
*/
declare interface Lipsync extends Module {

/**
```
emotion(emotion: EmotionType): ScalarSignal
```

Returns a `ScalarSignal` representing the emotion.
*/
emotion(emotion: EmotionType): ScalarSignal

/**
```
emotionBlendshapes(emotion: ScalarSignal): Array<ScalarSignal>
```

Returns an array of scalar signals for given emotion signal,
i.e. output of `maxEmotion()` function or a constant signal.
These values can be passed directly to `Avatar.setFaceExpressions`.
*/
emotionBlendshapes(emotion: ScalarSignal): Array<ScalarSignal>

/**
```
emotions(): Array<ScalarSignal>
```

Returns an array of `ScalarSignal` containing all emotions.
*/
emotions(): Array<ScalarSignal>

/**
```
maxEmotion(threshold: number): ScalarSignal
```

Returns a `ScalarSignal` representing the index of the emotion with the
highest weight above the threshold. If no weights are above the threshold,
returns NEUTRAL.
*/
maxEmotion(threshold: number): ScalarSignal

/**
```
viseme(viseme: VisemeType): ScalarSignal
```

Returns a `ScalarSignal` representing the viseme.
*/
viseme(viseme: VisemeType): ScalarSignal

/**
```
visemes(): Array<ScalarSignal>
```

Returns an array of `ScalarSignal` containing all visemes.
*/
visemes(): Array<ScalarSignal>

}
