/// <reference path="../Avatar.VisemeType/index.d.ts" />
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
emotions(): Array<ScalarSignal>
```

Returns an array of `ScalarSignal` containing all emotions.
*/
emotions(): Array<ScalarSignal>

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
