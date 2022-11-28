

/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect"]},{"kind":"introducedBy","version":4175003719},{"kind":"capability","capability":"hapticFeedback","orCapability":""}]
*/


/**
The `HapticFeedback` class allows triggering the device vibration.
*/
declare interface HapticFeedback extends Module {

/**
```
cancel(): void
```

Cancel all vibrations.
*/
cancel(): void

/**
```
vibrate(params?: {vibrationPattern: Array<{amplitudeNormalized: number, durationMilliseconds: number}>}): void
```

Vibrate in a given pattern.
`vibrationPattern` - an array of vibration events that constitute a pattern.
 - `durationMilliseconds` - the length of a vibration event, in milliseconds. If any of the values are negative,
                        an exception will be thrown.
 - `amplitudesNormalized` - the amplitude of a vibration event, a normalized value between 0 and 1,
                            where 0 corresponds to no vibration and 1 to the full strength vibration.
                            If any of the values are outside of the [0, 1] interval, an exception will be thrown.

 If `params` is empty, the default 400ms vibration will be performed.

**Note**: calling this function while the vibration from the previous call is still being played will result
in the new vibration overriding the previous one.
*/
vibrate(params?: {vibrationPattern: Array<{amplitudeNormalized: number, durationMilliseconds: number}>}): void

}



/**

//============================================================================
// The following example demonstrates how to produce haptic feedback in response
// to the touch gestures.
//
// Project setup:
// - Add this script to the project
//
// Required project capabilities:
// - HapticFeeback
// - Touch Gestures >  Rotate Gesture
// - Touch Gestures >  Tap Gesture
// - Touch Gestures >  Long Press Gesture
//
//============================================================================

// Load in the required modules
const haptics = require('HapticFeedback');
const gestures = require('TouchGestures');
export const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]

  //==========================================================================
  // Detect a screen tap and cancel the already running vibration in response.
  //==========================================================================
  gestures.onTap().subscribe((ges) => {
    haptics.cancel();
    Diagnostics.log('cancel');
  });

  //==========================================================================
  // Detect a long press and trigger a simple vibration in response.
  // The vibration pattern consists of three 100ms vibrations with 100ms
  // pauses in between.
  //==========================================================================
  gestures.onLongPress().subscribe((ges) => {
    let pattern = {vibrationPattern: [{durationMilliseconds: 100, amplitudeNormalized: 1},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0},
                                      {durationMilliseconds: 100, amplitudeNormalized: 1},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0},
                                      {durationMilliseconds: 100, amplitudeNormalized: 1}]};
    haptics.vibrate(pattern);
    Diagnostics.log('simple pattern');
  });

  //==========================================================================
  // Detect a "rotate" gesture and trigger a complex vibration in response.
  //==========================================================================
  gestures.onRotate().subscribe((ges) => {
    let pattern = {vibrationPattern: [{durationMilliseconds: 100, amplitudeNormalized: 1},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0},
                                      {durationMilliseconds: 100, amplitudeNormalized: 1},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0},
                                      {durationMilliseconds: 100, amplitudeNormalized: 1},
                                      {durationMilliseconds: 200, amplitudeNormalized: 0},
                                      {durationMilliseconds: 100, amplitudeNormalized: 1},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0.8},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0.6},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0.4},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0.2},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0.4},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0.6},
                                      {durationMilliseconds: 100, amplitudeNormalized: 0.8},
                                      {durationMilliseconds: 500, amplitudeNormalized: 1}, ]};
    haptics.vibrate(pattern);
    Diagnostics.log('complex pattern');
  });
})(); // Enables async/await in JS [part 2]

*/