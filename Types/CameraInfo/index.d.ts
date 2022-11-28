/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `CameraInfoModule` class provides access to details about the device camera.
*/
declare interface CameraInfo extends Module {

/**
```
(get) captureContext: StringSignal
(set) (Not Available)
```

Specifies a `CaptureContext` enum signal indicating the current context, e.g. PostCapture vs PreCapture.
*/
captureContext: StringSignal

/**
```
(get) captureDevicePosition: StringSignal
(set) (Not Available)
```

Specifies a `CameraPosition` enum signal identifying the current camera in use on the device.
*/
captureDevicePosition: StringSignal

/**
```
(get) effectSafeAreaInsets: Vec4Signal
(set) (Not Available)
```

Specifies a `Vec4Signal` indicating the insets of the effect safe area.
*/
effectSafeAreaInsets: Vec4Signal

/**
```
(get) isCapturingPhoto: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is capturing a photo.
*/
isCapturingPhoto: BoolSignal

/**
```
(get) isRecordingVideo: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is recording video.
*/
isRecordingVideo: BoolSignal

/**
```
(get) previewScreenScale: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` describing the scale of the preview's screen, i.e. the number of pixels per point.
*/
previewScreenScale: ScalarSignal

/**
```
(get) previewSize: Vec2Signal
(set) (Not Available)
```

Specifies a `Vec2Signal` describing the size of the preview, in pixels.
*/
previewSize: Vec2Signal

/**
```
(get) viewMatrix: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` describing the transform that needs to be applied to a given
object to transform it from world-space to view-space. It's inverse of the Camera transform.
*/
viewMatrix: TransformSignal

/**
```
(get) zoomFactor: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` describing preferred cropping and enlargement of output preview.
A value of 1.0 indicates no cropping or enlargement needs to be done.
*/
zoomFactor: ScalarSignal

}



/**

//==============================================================================
// The following example demonstrates how to hide an object when capturing a
// photo or recording a video.
//
// Project setup:
// - Insert a plane
//==============================================================================

// Load in the required modules
const CameraInfo = require('CameraInfo');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the plane in the Scene
  const [plane] = await Promise.all([
    Scene.root.findFirst('plane0')
  ]);

  //==============================================================================
  // Hide the plane when capturing a photo or recording a video
  //==============================================================================

  // Store references to the photo capture and video recording boolean signals
  const isCapturingPhoto = CameraInfo.isCapturingPhoto;
  const isRecordingVideo = CameraInfo.isRecordingVideo;

  // Create a boolean signal that returns true if either boolean signal are true
  const hidePlane = isCapturingPhoto.or(isRecordingVideo);

  // Bind the hidePlane signal to the hidden property of the plane
  plane.hidden = hidePlane;
// Enable async/await in JS [part 2]
})();

*/