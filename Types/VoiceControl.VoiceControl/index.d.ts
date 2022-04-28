/// <reference path="../Reactive.BoolSignal/index.d.ts" />
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
(get) active: BoolSignal
(set) active: BoolSignal
```

Set a signal to control if the current VoiceModule should be active.
VoiceModule will respond to voice input only when active
Get the signal if the current VoiceModule is active.
VoiceModule activation is controlled the the corresponding setter and AR Engine.
AR Engine may deactivate the current VoiceModule if it is conflicting with
other modules in the system.
*/
active: BoolSignal

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
registerEntity(keyword: string, entity: string, synonyms: Array<string>): Promise<DynamicEntity>
```

Adds a new entity that is a possible value for slots in this effect
*/
registerEntity(keyword: string, entity: string, synonyms: Array<string>): Promise<DynamicEntity>

/**
```
startTranscription(): Promise<TranscriptionSession>
```

Start transcription mode
*/
startTranscription(): Promise<TranscriptionSession>

}
