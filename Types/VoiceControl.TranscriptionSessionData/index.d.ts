/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"assistant","orCapability":""},{"kind":"introducedBy","version":2939567426}]
*/


/**
The `TranscriptionSessionData` class contains partial and full phrases as transcription
*/
declare interface TranscriptionSessionData {

/**
```
(get) currentPartialPhrase: StringSignal
(set) (Not Available)
```

Returns the current partial transcription phrase. It updates real time as the user speak.
*/
currentPartialPhrase: StringSignal

/**
```
(get) lastFullPhrase: StringSignal
(set) (Not Available)
```

Returns the full transcription phrase. It updates only when the user pause speaking.
*/
lastFullPhrase: StringSignal

}
