/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `FaceTracker` class propagates details of detected faces to the scene.
*/
declare interface FaceTracker extends SceneObjectBase {

}



/**

//============================================================================
// The following example demonstrates how to control the rotation and scale
// of an object using face rotation and mouth openness.
//
// Project setup:
// - Insert a plane to the Scene
//
// Required project capabilities:
// - Face Tracking (auto added on FaceTracking module import)
//
//============================================================================


// Load in the required modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane in the scene
  const plane = await Scene.root.findFirst('plane0');

  // Create a reference to a detected face
  const face = FaceTracking.face(0);


  //==========================================================================
  // Control the rotation of the plane with the rotation of the face
  //==========================================================================

  // Create references to the transforms of the plane and face
  const planeTransform = plane.transform;
  const faceTransform = face.cameraTransform;

  // Bind the rotation of the face to the rotation of the plane
  planeTransform.rotationX = faceTransform.rotationX;
  planeTransform.rotationY = faceTransform.rotationY;
  planeTransform.rotationZ = faceTransform.rotationZ;


  //==========================================================================
  // Control the scale of the plane with mouth openness
  //==========================================================================

  // Create a reference to the mouth openness and amplify the signal using
  // the mul() and add() methods
  const mouthOpenness = face.mouth.openness.mul(4).add(1);

  // Bind the mouthOpenness signal to the x and y-axis scale signal of
  // the plane
  planeTransform.scaleX = mouthOpenness;
  planeTransform.scaleY = mouthOpenness;

})(); // Enable async/await in JS [part 2]

*/