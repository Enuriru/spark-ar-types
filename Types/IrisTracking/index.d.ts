/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../IrisTracking.Eyeball/index.d.ts" />


/**
[{"kind":"capability","capability":"irisTracking","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
The `IrisTrackingModule` class allows you to track the location of people's irises in your effect, to create effects such as eye color replacement.
*/
declare interface IrisTracking extends Module {

/**
```
leftEyeball(face: Face): Eyeball
```

Returns an `Eyeball` object for the given face, containing information about the 3D position of the left eyeball.
*/
leftEyeball(face: Face): Eyeball

/**
```
rightEyeball(face: Face): Eyeball
```

Returns an `Eyeball` object for the given face, containing information about the 3D position of the right eyeball.
*/
rightEyeball(face: Face): Eyeball

}



/**

//==========================================================================
// The following example demonstrates how to bind the position and rotation
// of objects to the eyeball and iris.
//
// Project setup:
// - Insert two planes
// - (Recommended) Decrease the scale of the planes and assign materials
     to them
//==========================================================================

// Load in the required modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const IrisTracking = require('IrisTracking');

(async function() { // Enable async/await in JS [part 1]

  // Locate the planes in the Scene
  const [centerPlane, irisPlane] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1')
  ]);

  // Create a reference to a detected face
  const face = FaceTracking.face(0);

  // Create a reference to the left eyeball
  const leftEyeball = IrisTracking.leftEyeball(face);

  // Create a reference to the center and iris plane's transforms
  const centerPlaneTransform = centerPlane.transform;
  const irisPlaneTransform = irisPlane.transform;

  // Create references to the eyeball center, iris and rotation
  const leftEyeballCenter = leftEyeball.center;
  const leftEyeballIris = leftEyeball.iris;
  const leftEyeballRotation = leftEyeball.rotation.eulerAngles;

  // Bind the position of the eyeball center to the center plane
  centerPlaneTransform.x = leftEyeballCenter.x;
  centerPlaneTransform.y = leftEyeballCenter.y;
  centerPlaneTransform.z = leftEyeballCenter.z;

  // Bind the position of the the eyeball iris to the iris plane
  irisPlaneTransform.x = leftEyeballIris.x;
  irisPlaneTransform.y = leftEyeballIris.y;
  irisPlaneTransform.z = leftEyeballIris.z;

  // Bind the rotation of both planes to the eyeball rotation
  centerPlaneTransform.rotationX = leftEyeballRotation.x;
  centerPlaneTransform.rotationY = leftEyeballRotation.y;
  centerPlaneTransform.rotationZ = leftEyeballRotation.z;

  irisPlaneTransform.rotationX = leftEyeballRotation.x;
  irisPlaneTransform.rotationY = leftEyeballRotation.y;
  irisPlaneTransform.rotationZ = leftEyeballRotation.z;

})(); // Enable async/await in JS [part 2]

*/