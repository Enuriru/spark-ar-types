/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"facewave","orCapability":""},{"kind":"introducedBy","version":3745275114}]
*/


/**
The `FacewaveModule` class allows you to get visemes from microphone input.
*/
declare interface Lipsync extends Module {

/**
```
viseme(viseme: VisemeType): ScalarSignal
```

Returns a `ScalarSignal` representing the viseme.
*/
viseme(viseme: VisemeType): ScalarSignal

}



/**

TODO

*/