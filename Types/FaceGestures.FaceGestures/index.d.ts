/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />

/**
Enables detection of various facial gestures for a given [`Face`](/classes/FaceTrackingModule.Face) object.
Use of the `FaceGestures` module also requires the [`FaceTracking`](/classes/facetrackingmodule) module to be imported.
*/
declare interface FaceGestures extends Module {

/**
```
hasEyebrowsFrowned(face: Face, config?: {backlash?: number, observationPeriod?: number, threshold?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has frowned eyebrows.
* The signal returns `true` when the eyebrow positions are equal to the default `threshold` value (`1.0`), and `false` when they are equal to `threshold - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine whether the eyebrows are frowned.

The JSON formatted `config` object can have the following fields:
* `threshold` - the threshold for determining whether the eyebrows are frowned. When the eyebrow positions are equal to this, an eyebrows frown gesture is detected.
* `backlash` - the deviation from `threshold` at which the `BoolSignal` should return `false`. A higher `backlash` value can reduce unstable behavior when the eyebrow positions are near the `threshold`.
* `observationPeriod` - the period over which the median eyebrow positions should be tracked, in milliseconds.
*/
hasEyebrowsFrowned(face: Face, config?: {backlash?: number, observationPeriod?: number, threshold?: number}): BoolSignal

/**
```
hasEyebrowsRaised(face: Face, config?: {backlash?: number, observationPeriod?: number, threshold?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has raised eyebrows.
* The signal returns `true` when the eyebrow positions are equal to the default `threshold` value (`1.0`), and `false` when they are equal to `threshold - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine whether the eyebrows are raised.

The JSON formatted `config` object can have the following fields:
* `threshold` - the threshold for determining whether the eyebrows are raised. When the eyebrow positions are equal to this, an eyebrows raised gesture is detected.
* `backlash` - the deviation from `threshold` at which the `BoolSignal` should return `false`. A higher `backlash` value can reduce unstable behavior when the eyebrow positions are near the `threshold`.
* `observationPeriod` - the period over which the median eyebrow positions should be tracked, in milliseconds.
*/
hasEyebrowsRaised(face: Face, config?: {backlash?: number, observationPeriod?: number, threshold?: number}): BoolSignal

/**
```
hasLeftEyeClosed(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has the left eye closed.
The signal returns `true` when the left [`Eye`](/classes/FaceTrackingModule.Eye) object's `openness` value is equal to the default `threshold` value, and `false` when it is equal to `threshold - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when the left eye is closed.

The JSON formatted `config` object can have the following fields:
* `threshold` - the threshold for determining eye openness. When the eye's `openness` value is equal to this, a left eye closed gesture is detected.
* `backlash` - the maximum amount the eye `openness` value can deviate from the `threshold` value before the left eye closed gesture is no longer detected. A higher `backlash` value can reduce unstable behavior when the `openness` value is near the `threshold` value.
*/
hasLeftEyeClosed(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
hasMouthOpen(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has an open mouth.
The signal returns `true` when the [`Mouth`](/classes/FaceTrackingModule.Mouth) `openness` value is equal to the default `threshold` value, and `false` when it is equal to `threshold - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when an open mouth should be detected.

The JSON formatted `config` object can have the following fields:
* `threshold` - the threshold for determining mouth openness. When the mouth's `openness` value is equal to this a mouth open gesture is detected.
* `backlash` - the maximum amount the mouth `openness` value can deviate from the `threshold` value before the open mouth gesture is no longer detected. A higher `backlash` value can reduce unstable behavior when the `openness` value is near the `threshold` value.
*/
hasMouthOpen(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
hasRightEyeClosed(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has the right eye closed.
The signal returns `true` when the right [`Eye`](/classes/FaceTrackingModule.Eye) object's `openness` value is equal to the default `threshold` value, and `false` when it is equal to `threshold - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when the right eye is closed.

The JSON formatted `config` object can have the following fields:
* `threshold` - the threshold for determining eye openness. When the eye's `openness` value is equal to this, a right eye closed gesture is detected.
* `backlash` - the maximum amount the eye `openness` value can deviate from the `threshold` value before the right eye closed gesture is no longer detected. A higher `backlash` value can reduce unstable behavior when the `openness` value is near the `threshold` value.
*/
hasRightEyeClosed(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
isAngry(face: Face): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has an angry expression.
* `face` - the face to detect the facial expression on.
*/
isAngry(face: Face): BoolSignal

/**
```
isHappy(face: Face): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has a happy expression.
* `face` - the face to detect the facial expression on.
*/
isHappy(face: Face): BoolSignal

/**
```
isKissing(face: Face): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) is making a kissing gesture.
* `face` - the face to detect the facial gesture on.
*/
isKissing(face: Face): BoolSignal

/**
```
isLeanedBack(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) is leaning backward.
The signal returns `true` when the face rotation is equal to the default `angle` value, and `false` when it is equal to `angle - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a face is leaning backward.

The JSON formatted `config` object can have the following fields:
* `angle` - the angular threshold, in radians. Determines how much the face needs to be leaning backward by for the `BoolSignal` to return `true`.
* `backlash` - the angular backlash, in radians. Determines the deviation from `angle` at which the `BoolSignal` should return `false`. A higher `backlash` value can reduce unstable behavior when the face rotation is near to the `angle` value.
*/
isLeanedBack(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
isLeanedForward(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) is leaning forward.
The signal returns `true` when the face rotation is equal to the default `angle` value, and `false` when it is equal to `angle - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a face is leaning forward.

The JSON formatted `config` object can have the following fields:
* `angle` - the angular threshold, in radians. Determines how much the face needs to be leaning forward by for the `BoolSignal` to return `true`.
* `backlash` - the angular backlash, in radians. Determines the deviation from `angle` at which the `BoolSignal` should return `false`. A higher `backlash` value can reduce unstable behavior when the face rotation is near to the `angle` value.
*/
isLeanedForward(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
isLeanedLeft(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) is leaning to the left.
The signal returns `true` when the face rotation is equal to the default `angle` value, and `false` when it is equal to `angle - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a face is leaning to the left.

The JSON formatted `config` object can have the following fields:
* `angle` - the angular threshold, in radians. Determines how much the face needs to be leaning to the left by for the `BoolSignal` to return `true`.
* `backlash` - the angular backlash, in radians. Determines the deviation from `angle` at which the `BoolSignal` should return `false`. A higher `backlash` value can reduce unstable behavior when the face rotation is near to the `angle` value.
*/
isLeanedLeft(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
isLeanedRight(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) is leaning to the right.
The signal returns `true` when the face rotation is equal to the default `angle` value, and `false` when it is equal to `angle - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a face is leaning to the right.

The JSON formatted `config` object can have the following fields:
* `angle` - the angular threshold, in radians. Determines how much the face needs to be leaning to the right by for the `BoolSignal` to return `true`.
* `backlash` - the angular backlash, in radians. Determines the deviation from `angle` at which the `BoolSignal` should return `false`. A higher `backlash` value can reduce unstable behavior when the face rotation is near to the `angle` value.
*/
isLeanedRight(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
isNeutral(face: Face): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has a neutral expression.
* `face` - the face to detect the facial expression on.
*/
isNeutral(face: Face): BoolSignal

/**
```
isSad(face: Face): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has a sad expression.
* `face` - the face to detect the facial expression on.
*/
isSad(face: Face): BoolSignal

/**
```
isSmiling(face: Face, config?: {backlash?: number, lipMix?: number, threshold?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) is smiling.
The signal returns `true` when the curvature mix of the detected `Face` object's [`mouth`](/classes/FaceTrackingModule.Mouth) is equal to the default `threshold` value, and `false` when the curvature mix is equal to `threshold - backlash`.

The curvature mix is determined with the following calculation: `(Face.mouth.upperLipCurvature * lipMix) + (Face.mouth.lowerLipCurvature * (1 - lipMix))`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a smile should be detected.

The JSON formatted `config` object can have the following fields:
* `lipMix` - sets the proportion of upper and lower lip curvatures to use in the curvature mix calculation. A value of `0.0` only uses the lower lip curvature value in the calculation, while a value of `1.0` only uses the upper lip curvature value.
* `threshold` - the threshold for determining a smile. When the curvature mix is equal to this value a smile gesture is detected.
* `backlash` - the maximum amount the curvature mix can deviate from the `threshold` value before the smile gesture is no longer detected. A higher `backlash` value can reduce unstable behavior when the curvature mix value is near the `threshold` value.
*/
isSmiling(face: Face, config?: {backlash?: number, lipMix?: number, threshold?: number}): BoolSignal

/**
```
isSurprised(face: Face): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) has a surprised expression.
* `face` - the face to detect the facial expression on.
*/
isSurprised(face: Face): BoolSignal

/**
```
isTurnedLeft(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) is rotated to the left.
The signal returns `true` when the face rotation is equal to the default `angle` value, and `false` when it is equal to `angle - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a face is turned to the left.

The JSON formatted `config` object can have the following fields:
* `angle` - the angular threshold, in radians. Determines how much the face needs to be rotated to the left by for the `BoolSignal` to return `true`.
* `backlash` - the angular backlash, in radians. Determines the deviation from `angle` at which the `BoolSignal` should return `false`. A higher `backlash` value can reduce unstable behavior when the face rotation is near to the `angle` value.
*/
isTurnedLeft(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
isTurnedRight(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal
```

Returns a [`BoolSignal`](/classes/ReactiveModule.BoolSignal) that indicates whether the specified [`Face`](/classes/FaceTrackingModule.Face) is rotated to the right.
The signal returns `true` when the face rotation is equal to the default `angle`, and `false` when it is equal to `angle - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a face is turned to the right.

The JSON formatted `config` object can have the following fields:
* `angle` - the angular threshold, in radians. Determines how much the face needs to be rotated to the right by for the `BoolSignal` to return `true`.
* `backlash` - the angular backlash, in radians. Determines the deviation from `angle` at which the `BoolSignal` should return `false`. A higher `backlash` value can reduce unstable behavior when the face rotation is near to the `angle` value.
*/
isTurnedRight(face: Face, config?: {angle?: number, backlash?: number}): BoolSignal

/**
```
onBlink(face: Face, config?: {backlash?: number, threshold?: number}): EventSource<void>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that fires immediately after both eyes of the specified [`Face`](/classes/FaceTrackingModule.Face) are closed.
The event fires when the eyes' [`openness`](/classes/FaceTrackingModule.Eye#properties) value is equal to the default `threshold` value, and ends when it is equal to `threshold - backlash`.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a blink should be detected.

The JSON formatted `config` object can have the following fields:
* `threshold` - the threshold for determining eye openness. When both eyes' `openness` value is equal to this a blink gesture is detected.
* `backlash` - the maximum amount the eyes' `openness` value can deviate from the `threshold` value before the blink gesture is no longer detected. A higher `backlash` value can reduce unstable behavior when the `openness` value is near the `threshold` value.
*/
onBlink(face: Face, config?: {backlash?: number, threshold?: number}): EventSource<void>

/**
```
onNod(face: Face, config?: {angle?: number, period?: number, swings?: number}): EventSource<void>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that fires immediately after a head nod is detected on the specified [`Face`](/classes/FaceTrackingModule.Face).
A head nod is defined as a series of consecutive head swings upwards and downwards, with the first movement being downwards. By default a head swing is detected when the head rotates around the X axis within 45 degrees (approximately 0.78 radians) from one direction to the other before returning to the center.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a head nod should be detected.

The JSON formatted `config` object can have the following fields:
* `angle` - the minimum rotation for a head movement to count as a single head swing, in radians. The default value is approximately 0.78.
* `period` - the amount of time the head rotation must be completed in to count as a single head swing, in milliseconds.
* `swings` - the minimum number of consecutive alternating head swings that must be completed for a head nod gesture to be detected.
*/
onNod(face: Face, config?: {angle?: number, period?: number, swings?: number}): EventSource<void>

/**
```
onShake(face: Face, config?: {angle?: number, period?: number, swings?: number}): EventSource<void>
```

Returns an [`EventSource`](/classes/ReactiveModule.EventSource) that fires immediately after a head shake is detected on the specified [`Face`](/classes/FaceTrackingModule.Face).
A head shake is defined as a series of consecutive head swings from left to right or right to left. By default, a head swing is detected when the head rotates around the Y axis within 45 degrees (approximately 0.78 radians) from one direction to the other before returning to the center.
* `face` - the face to detect the gesture on.
* `config` - optionally configures the parameters that determine when a head shake should be detected.

The JSON formatted `config` object can have the following fields:
* `angle` - the minimum rotation for a head movement to count as a single head swing, in radians. The default value is approximately 0.78.
* `period` - the amount of time the head rotation must be completed in to count as a single head swing, in milliseconds.
* `swings` - the minimum number of consecutive alternating head swings that must be completed for a head shake gesture to be detected.
*/
onShake(face: Face, config?: {angle?: number, period?: number, swings?: number}): EventSource<void>

}



/**

//============================================================================
// Edit a plane object's properties based on detected facial gestures
//
// Project setup:
// - Two planes: plane0 and plane1, positioned so that they're both visible
//
//============================================================================

// Load in the required modules
const FaceGestures = require('FaceGestures');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');
const Scene = require('Scene');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane in the scene
  const [plane0, plane1] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1')
  ]);

  // Create a reference to a detected face
  const face = FaceTracking.face(0);


  //========================================================================
  // Hide the first plane if a smile is not detected
  //========================================================================

  // Create a reference to the isSmiling bool signal and configure the
  // parameters that determine whether a gesture counts as a smile
  const isSmiling = FaceGestures.isSmiling(face, {
    "lipMix": 0.5,
    "threshold": 0.03,
    "backlash": 0.01,
  });

  // The above configuration is optional, the following is also valid:
  // const isSmiling = FaceGestures.isSmiling(face);

  // Bind the visibility of the plane to the inverse value of
  // the isSmiling bool signal
  plane.hidden = isSmiling.not();


  //========================================================================
  // Rotate the second plane by 45 degrees when a blink is detected
  //========================================================================

  // Register a blink event
  FaceGestures.onBlink(face).subscribe(() => {

    // Create a reference to the the last known z-axis rotation value
    const lastRotationZ = plane1.transform.rotationZ.pinLastValue();

    // Increase the rotation by 45 degrees
    // (45 degrees is equal to 0.7853981634 radians)
    const newRotationZ = Reactive.add(lastRotationZ, 0.7853981634);

    // Bind the new z-axis rotation signal to the plane's z-axis
    // rotation signal
    plane1.transform.rotationZ = newRotationZ;
  });

})(); // Enable async/await in JS [part 2]

*/