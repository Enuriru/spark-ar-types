/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Textures.ExternalTextureMediaBase/index.d.ts" />


/**
[{"kind":"introducedBy","version":3806254723}]
*/


/**
`ExternalTextureMediaVideo` represents "video" media that was that was created from the URL.
It exposes a set of APIs that are specifically tailored for controlling video playback.
*/
declare interface ExternalTextureMediaVideo extends ExternalTextureMediaBase {

/**
```
(get) duration: ScalarSignal
(set) (Not Available)
```

Specifies a 'ScalarSignal' that returns the duration of the video media in
seconds.
*/
duration: ScalarSignal

/**
```
(get) looping: BoolSignal
(set) looping: BoolSignal
```

Specifies a 'BoolSignal' that is representing if playback should be looping.
Note that setting 'looping' to true while playback has stopped at the end will
implicitly restart playback at the beginning.
*/
looping: BoolSignal

/**
```
(get) onCompleted: EventSource<void>
(set) (Not Available)
```

Returns an EventSource that will fire once playback has been completed, ie.
reached the end of the media and stopped.
This event will only be emitted when looping is disabled.
*/
onCompleted: EventSource<void>

/**
```
(get) onLooped: EventSource<void>
(set) (Not Available)
```

Returns an EventSource that will fire once playback has reached the end and has
been wrapped around to the beginning while still playing.
This event will only be emitted when looping is enabled.
*/
onLooped: EventSource<void>

/**
```
(get) playing: BoolSignal
(set) playing: BoolSignal
```

Specifies a 'BoolSignal' that is representing the current 'playing' state of the
video.  Will evaluate to true if playing or false if paused or the video reached
the end and is not looping.
Note that a true 'playing' signal has no effect if the playback has completed and
looping is disabled.
*/
playing: BoolSignal

/**
```
(get) progress: ScalarSignal
(set) (Not Available)
```

Specifies a 'ScalarSignal' that is representing the current progress while
playing back the ExternalTexture. Note that the progress normalized and
is in [0.0, 1.0].
Also cf. seek() API.
*/
progress: ScalarSignal

/**
```
seek(value: number): Promise<void>
```

Seeks video playback position to 'value' for the current media.
Note that the value normalized and is in [0.0, 1.0] and that this API
is causing a seek operation in the underlying Video Player.

Note that seeking a paused video won't implicitly start it.
*/
seek(value: number): Promise<void>

/**
```
setVolume(leftVolume: number, rightVolume: number): Promise<void>
```

Set volume of the media. Volume range is [0.0 1.0]
*/
setVolume(leftVolume: number, rightVolume: number): Promise<void>

}
