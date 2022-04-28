/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"faceTrackingScripting2D","orCapability":""}]
*/


/**
Exposes details of a two-dimensionally tracked face.
For three-dimensional tracking to key points on a detected face, see the [`Face`](/classes/facetrackingmodule.face) class instead.

 * @example
//============================================================================
// Binds the position of a rectangle to a detected face.
//
// The rectangle is also scaled to match the dimensions of the detected
// face's bounding box.
//
// Project setup:
// - Insert a rectangle to the Scene: rectangle0
//
//============================================================================


// Load in the required modules
const Scene = require('Scene');
const CameraInfo = require('CameraInfo');
const FaceTracking2D = require('FaceTracking2D');

(async function() { // Enable async/await in JS [part 1]

  // Locate the rectangle in the scene
  const rectangle = await Scene.root.findFirst('rectangle0');

  // Create a reference to the detected face
   const face = FaceTracking.face(0);

  // Calculate the width and height of the preview,
  // correcting for the pixel resolution
  const previewSizeWidth  = CameraInfo.previewSize.width
                              .div(CameraInfo.previewScreenScale);

  const previewSizeHeight = CameraInfo.previewSize.height
                              .div(CameraInfo.previewScreenScale);

  // Set the position of the rectangle to the position of the face,
  // multiplied by the preview size
  rectangle.transform.x = face.boundingBox.x.mul(previewSizeWidth);
  rectangle.transform.y = face.boundingBox.y.mul(previewSizeHeight);

  // Set the size of the rectangle to the size of the face,
  // multiplied by the preview size
  rectangle.width  = face.boundingBox.width.mul(previewSizeWidth);
  rectangle.height = face.boundingBox.height.mul(previewSizeHeight);

})(); // Enable async/await in JS [part 2]
*/
declare interface Face2D {

/**
```
(get) boundingBox: BoundingBoxSignal
(set) (Not Available)
```

The bounding box of the tracked face relative to normalized screen space, as a [`BoundingBoxSignal`](/classes/ReactiveModule.BoundingBoxSignal).
*/
boundingBox: BoundingBoxSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Indicates whether the face is being tracked in the current frame, with a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If `false`, the value of the `Face2D` object's properties represent their value during the frame they were most recently tracked in.
*/
isTracked: BoolSignal

}
