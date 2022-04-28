/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../VoiceControl.TranscriptionSession/index.d.ts" />


/**
[{"kind":"capability","capability":"assistant","orCapability":""}]
*/


/**
The `VoiceControlModule` class allows you to respond to commands from people's
voices by providing access to Assistant.
*/
declare interface VoiceControl extends Module {

/**
```
(get) deviceWakeWord: StringSignal
(set) (Not Available)
```

Returns the wake word required to activate voice control on this device
*/
deviceWakeWord: StringSignal

/**
```
(get) intents: VoiceControlIntents
(set) (Not Available)
```

Returns an object that allows you to query the intent definitions contained within your effect.
*/
intents: VoiceControlIntents

/**
```
(get) transcriptionState: StringSignal
(set) (Not Available)
```

Returns the state presents if wake word less is available and if it is active
*/
transcriptionState: StringSignal

/**
```
monitorCommand(command: string): EventSource<void>
```

Returns an `EventSource` object that fires when Assistant can match a voice to the command string.
*/
monitorCommand(command: string): EventSource<void>

/**
```
monitorIntent(intentSpec: IntentSpec, slotSpecFilter: EntitySlotSpec): EventSource<Object>
```

Returns an `EventSource` object that fires when Assistant infers that a given intent has been invoked.
*/
monitorIntent(intentSpec: IntentSpec, slotSpecFilter: EntitySlotSpec): EventSource<Object>

/**
```
registerEntity(name: string, tag: string, synonyms: Array<string>): Promise<DynamicEntity>
```

Adds a new entity that is a possible value for slots in this effect
*/
registerEntity(name: string, tag: string, synonyms: Array<string>): Promise<DynamicEntity>

/**
```
startTranscription(): Promise<TranscriptionSession>
```

Start transcription mode
*/
startTranscription(): Promise<TranscriptionSession>

}
