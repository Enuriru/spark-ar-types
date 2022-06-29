/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../VoiceControl.TranscriptionSessionData/index.d.ts" />


/**
[{"kind":"capability","capability":"assistant","orCapability":""}]
*/


/**
The `TranscriptionSession` class represents a session that gets transcriptions
*/
declare interface TranscriptionSession {

/**
```
(get) active: BoolSignal
(set) (Not Available)
```

Returns if the session is active
*/
active: BoolSignal

/**
```
(get) data: TranscriptionSessionData
(set) (Not Available)
```

Returns the TranscriptionSessionData
*/
data: TranscriptionSessionData

/**
```
stop(): void
```

Stop the session
*/
stop(): void

}
