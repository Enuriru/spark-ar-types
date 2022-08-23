/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.FaceMesh/index.d.ts" />
/// <reference path="../Scene.FaceTracker/index.d.ts" />

/**
Enables the tracking of faces in three-dimensional space and exposes classes that describe key points of a detected face.
Importing this module automatically enables the *Face Tracking* capability within the project's *Properties*.

For two-dimensional face tracking, see the [`FaceTracking2D`](/classes/facetracking2dmodule) module.
*/
declare interface FaceTracking extends Module {

/**
```
(get) count: ScalarSignal
(set) (Not Available)
```

The number of faces currently tracked in the scene, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
count: ScalarSignal

/**
```
(get) (Not Available)
(set) isEnabled: BoolSignal | boolean
```

Specifies a `BoolSignal` that takes the value of `true` whenever the Face Tracker should be run, and the value of `false` otherwise. Default value is `true`.
*/
isEnabled: BoolSignal | boolean

/**
```
createFaceMeshSceneObject(initialState?: {[key: string]: any}): Promise<FaceMesh>
```

Creates a new [dynamic](https://sparkar.facebook.com/ar-studio/learn/scripting/dynamic-instantiation) `FaceMesh` object in the scene.
* `initialState` - an optional set of JSON-formatted parameters to instantiate the `FaceMesh` object with. For example, `{"name": "DynamicFaceMesh", "visible": true}`. The parameter `key`s must be valid `FaceMesh` object properties.
Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
createFaceMeshSceneObject(initialState?: {[key: string]: any}): Promise<FaceMesh>

/**
```
createFaceTrackerSceneObject(initialState?: {[key: string]: any}): Promise<FaceTracker>
```

Creates a new [dynamic](https://sparkar.facebook.com/ar-studio/learn/scripting/dynamic-instantiation) `FaceTracker` object in the scene.
* `initialState` - an optional set of JSON-formatted parameters to instantiate the `FaceTracker` object with. For example, `{"name": "DynamicFaceTracker", "visible": true}`. The parameter `key`s must be valid `FaceTracker` object properties.
Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
createFaceTrackerSceneObject(initialState?: {[key: string]: any}): Promise<FaceTracker>

/**
```
face(index: number): Face
```

Returns a [`Face`](/classes/facetrackingmodule.face) object from the array of detected faces.
* `index` - the index of the `Face` object to retrieve from the array.
*/
face(index: number): Face

}



/**

//============================================================================
// The following example demonstrates how to control the rotation and scale
// of an object using face rotation and mouth openness.
//
// Project setup:
// - Insert a plane to the Scene
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