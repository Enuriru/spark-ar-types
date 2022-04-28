
/**
Enables control of audio playback.
Ensure that the [Audio Playback Controller](https://sparkar.facebook.com/ar-studio/learn/documentation/articles/audio/audio-playback-controller) in the Spark AR Studio project has a supported audio file assigned.
*/
declare interface PlaybackController {

/**
```
loop(): void
```

Deprecated. Use the `setLooping()` method instead to loop the audio playback controller.
*/
loop(): void

/**
```
pause(): void
```

Pause the playback controller: sound is stopped but position is preserved
*/
pause(): void

/**
```
play(): void
```

Deprecated. Use the `setPlaying()` method instead to play the audio playback controller.
*/
play(): void

/**
```
reset(): void
```

Resets the audio playback controller to the beginning of the audio.
If the audio playback controller is currently playing, playback will restart immediately when `reset()` is called. Otherwise, playback will not start until `setPlaying(true)` is called.
*/
reset(): void

/**
```
resume(): void
```

Resume playing the playback controller from the paused state.
*/
resume(): void

/**
```
setLooping(looping: boolean): void
```

Sets whether the audio playback controller should loop. If `true` is passed in to the method the audio will loop infinitely.
Even if an audio playback controller is set to loop, `setPlaying(true)` still needs to be called for the audio to play.
* `looping` - a boolean value specifying whether the audio should loop.
*/
setLooping(looping: boolean): void

/**
```
setPlaying(playing: boolean): void
```

Sets whether the audio playback controller should play. If `true` is passed in to the method the audio will play, if `false` is passed in playback will pause.
Audio does not automatically reset when playback finishes. Use the `reset()` method to reset playback to the beginning of the audio.
* `playing` - a boolean value specifying whether the audio should play.
*/
setPlaying(playing: boolean): void

/**
```
stop(): void
```

Deprecated. Use the `setPlaying()` method instead to stop the audio playback controller.
*/
stop(): void

}



/**

//============================================================================
// The following example demonstrates basic audio playback control.
//
// Project setup:
// - Import an audio file (M4A, Mono, 44.1kHz, 16 bit)
// - Add an audio playback controller to the Assets panel and assign the
//   imported audio file to it
// - Add a Speaker to the Scene panel and assign the audio playback
//   controller to it
//
//============================================================================

// Load in the required modules
const Audio = require('Audio');
const TouchGestures = require('TouchGestures');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the playback controller in the Assets
  const audioPlaybackController = await Audio.getAudioPlaybackController('audioPlaybackController0');

  // Play and loop the playback controller
  audioPlaybackController.setPlaying(true);
  audioPlaybackController.setLooping(true);

  // Create a boolean to determine if the audio is playing
  var isAudioPlaying = true;

  //==============================================================================
  // Start and stop the audio by tapping on the screen
  //==============================================================================

  // Subscribe to tap gestures on the screen
  TouchGestures.onTap().subscribe(function() {
    // Switch the boolean controlling audio playback
    isAudioPlaying = !isAudioPlaying;

    // Start or stop the audio depending on the state of the boolean
    audioPlaybackController.setPlaying(isAudioPlaying);
  });

})(); // Enables async/await in JS [part 2]

*/