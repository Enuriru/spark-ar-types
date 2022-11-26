/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
The `SceneModule` class exposes properties and methods to access the objects in a scene.
*/
declare interface Scene extends Module {

/**
```
(get) root: Scene
(set) (Not Available)
```

Returns an object that is the root of the scene tree. Other objects are accessed by walking down the scene tree from the root using the `SceneObjectBase.child` and `SceneObjectBase.find` methods.
*/
root: Scene

/**
```
unprojectToFocalPlane(location: Vec2Signal): PointSignal
```

Returns a signal with the value that corresponds to the 3d point (in World Space, in current units) of the given screenSpace point from the Vec2Signal.
The z coordinate of the PointSignal will be calculated so that the 3d point will always be on the canvas (which should be on the Focal Plane).
This function can be combined with TouchGestures to create a 3d point signal.


```
var S = require('Scene')
TouchGestures.onPan().subscribe(function(gesture) {
var signal = S.unprojectToFocalPlane(gesture.location);
});
```
*/
unprojectToFocalPlane(location: Vec2Signal): PointSignal

}



/**

//==============================================================================
// The following example demonstrates how to access named elements from a Scene.
//==============================================================================

// Load in the required module
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the camera in the Scene using the child method
  const [[camera], focalDistance] = await Promise.all([
    // findByPath returns array of results as it supports wildcards
    Scene.root.findByPath('Device/Camera'),
    Scene.root.findFirst('Focal Distance')
  ]);
// Enable async/await in JS [part 2]
})();

*/