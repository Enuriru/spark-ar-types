/// <reference path="../GalleryTexture.GalleryTextureMediaBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":821887510}]
*/


/**
`GalleryTextureMediaVideo` represents "video" media that was picked from the gallery that is being used by a given GalleryTexture.
It exposes a set of APIs that are specifically tailored for controlling video playback.
*/
declare interface GalleryTextureMediaVideo extends GalleryTextureMediaBase {

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
(set) progress: ScalarSignal
```

Specifies a 'ScalarSignal' that is representing the current progress while
playing back the GalleryTexture. Note that the progress normalized and
is in [0.0, 1.0].
Note that setting an out of bounds progress value (ie. < 0.0 or > 1.0) will
be ignored and playback continues unchanged.

Note that setting the progress signal on a paused video won't implicitly
start it.
*/
progress: ScalarSignal

}
