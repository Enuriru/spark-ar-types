/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../ToasterTracking.Toaster/index.d.ts" />


/**
[{"kind":"introducedBy","version":1179878185}]
*/


/**
The `ToasterTrackingModule` class enables toaster movement and expression detection.
*/
declare interface ToasterTracking extends Module {

/**
```
(get) count: ScalarSignal
(set) (Not Available)
```

Returns a `ScalarSignal` representing the number of toasters tracked in the scene.
*/
count: ScalarSignal

/**
```
toaster(index: number): Toaster
```

Returns the `Toaster` object from the detected toaster array at the specified index.
*/
toaster(index: number): Toaster

}



/**

const Scene = require('Scene');
const ToasterTracking = require('ToasterTracking');

// Enable async/await in JS [part 1]
(async function() {
  // EXAMPLE: Bind a scene object's transform properties to the toaster's.
  const [boundPlane] = await Promise.all([
    Scene.root.findFirst('boundPlane')
  ]);
  var toaster = ToasterTracking.toaster(0);
  boundPlane.transform.rotationX = toaster.cameraTransform.rotationX;
  boundPlane.transform.rotationY = toaster.cameraTransform.rotationY;
  boundPlane.transform.rotationZ = toaster.cameraTransform.rotationZ;
// Enable async/await in JS [part 2]
})();

*/