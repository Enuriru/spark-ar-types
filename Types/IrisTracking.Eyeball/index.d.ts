/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"irisTracking","orCapability":""}]
*/


/**
The `Eyeball` gives you the ability to interact with a tracked eyeball. This class inherits from the IrisTracking Module and exposes its own properties.
*/
declare interface Eyeball {

/**
```
(get) center: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the center point of the eyeball in the face local coordinate system.\n\n**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/
center: PointSignal

/**
```
(get) iris: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the center point of the iris in the face local coordinate system.\n\n**See Also**: `Face.cameraTransform` to convert the point to the coordinate system of the camera.
*/
iris: PointSignal

/**
```
(get) rotation: QuaternionSignal
(set) (Not Available)
```

Specifies the rotation of the eyeball around its center.
*/
rotation: QuaternionSignal

}



/**

//======================================================================
// The following example demonstrates how to bind the position and
// rotation of an object to the iris. The Iris specifies the 3D
// position of the center point of the iris in the face local
// coordinate system.
//
// Project setup:
// - Insert a facetracker
// - Insert a plane and place it as a direct child of the facetracker
//======================================================================

// Load in the required modules
const FaceTracking = require('FaceTracking');
const IrisTracking = require('IrisTracking');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {

 // Locate the planes in the Scene
 const [plane] = await Promise.all([
   Scene.root.findFirst('plane0')
 ]);

 // Create a reference to a detected face
 const face = FaceTracking.face(1);

 // Create a reference to the left eyeball
 const rightEyeball = IrisTracking.rightEyeball(face);

 // Create a reference to the center and iris plane's transform
 const planeTransform = plane.transform;

 // Create references to the eyeball center, iris and rotation
 const rightEyeballCenter = rightEyeball.center;
 const rightEyeballRotation = rightEyeball.rotation.eulerAngles;

 // Bind the position of the eyeball center to the center plane
 planeTransform.x = rightEyeballCenter.x;
 planeTransform.y = rightEyeballCenter.y;
 planeTransform.z = rightEyeballCenter.z;

 // Bind the rotation of both planes to the eyeball rotation
 planeTransform.rotationX = rightEyeballRotation.x;
 planeTransform.rotationY = rightEyeballRotation.y;
 planeTransform.rotationZ = rightEyeballRotation.z;

// Enable async/await in JS [part 2]
})();

*/