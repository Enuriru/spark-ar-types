/// <reference path="../Audio.AudioComponent/index.d.ts" />
/// <reference path="../Audio.PlaybackController/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `AudioModule` class enables sound effects.
*/
declare interface Audio extends Module {

/**
```
getAudioComponent(id: string): AudioComponent
```

Returns the `AudioComponent` with the specified ID from the corresponding DSP effect.
* `id` - the ID of the audio componenet to retrieve.
*/
getAudioComponent(id: string): AudioComponent

/**
```
getAudioPlaybackController(name: string): Promise<PlaybackController>
```

Returns the playback controller with the specified name from the Assets.
* `name` - the name of the audio playback controller as it appears in the Assets panel.
*/
getAudioPlaybackController(name: string): Promise<PlaybackController>

}



/**

//============================================================================
// The following example demonstrates how to control audio playback by
// tapping on the screen.
//
// Project setup:
// - Import an audio file (M4A, Mono, 44.1kHz, 16 bit)
// - Create an audio playback controller and set the audio to the
//   imported file
// - Insert a speaker and set the audio to the playback controller
// - Add the Tap Gesture capability to the project under Touch Gestures
//
//============================================================================

// Load in the required modules
const Audio = require('Audio');
const TouchGestures = require('TouchGestures');

// Locate the playback controller in the Assets
Audio.getAudioPlaybackController('Audio Playback Controller')
.then((playbackController) => {
  // Play and loop the playback controller
  playbackController.setPlaying(true);
  playbackController.setLooping(true);

  //==========================================================================
  // Start and stop the audio by tapping on the screen
  //==========================================================================

  // Create a boolean to determine if the audio is playing
  var isAudioPlaying = true;

  // Subscribe to tap gestures on the screen
  TouchGestures.onTap().subscribe(function() {
    // Switch the boolean controlling audio playback
    isAudioPlaying = !isAudioPlaying;

    // Start or stop the audio depending on the state of the boolean
    playbackController.setPlaying(isAudioPlaying);
  });
});

*/