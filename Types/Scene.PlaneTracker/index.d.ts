/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../Reactive.Point3D/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Scene.TrackingMode/index.d.ts" />

/**
The `PlaneTracker` class provides functionality for locating a 3D plane based on 2D screen coordinates.
When accessing the `realScaleActive` and `realScaleSupported` properties, ensure that Real World Scale is enabled in the PlaneTracker object's Inspector panel. See the [Real Scale for World](https://sparkar.facebook.com/ar-studio/learn/articles/world-effects/real-scale-for-world) article for more information.
*/
declare interface PlaneTracker extends SceneObjectBase {

/**
```
(get) confidence: StringSignal
(set) (Not Available)
```

Returns tracking confidence level info.
This value indicates if PlaneTracker is currently tracking and how confident it is in reported results.
Possible values:
- HIGH
- MEDIUM
- LOW
- NOT_TRACKING
*/
confidence: StringSignal

/**
```
(get) mode: StringSignal<TrackingMode>
(set) mode: StringSignal<TrackingMode>
```

Specifies if this tracker object should track horizontal plane or moving object.
**Note:** on invalid value provided in setter, the mode will default to `TrackingMode.PLANE`.

**See Also**: `PlaneTracker.setMode`.
*/
mode: StringSignal<TrackingMode>

/**
```
performHitTest(screenXLocation: number, screenYLocation: number): Promise<Point3D>
performHitTest(screenLocation: Point2D): Promise<Point3D>
```

Returns a promise that is resolved with a point on tracked plane in local coordinates of PlaneTracker (in 3D units)
or null if plane is not found at given screen location.
*/
performHitTest(screenXLocation: number, screenYLocation: number): Promise<Point3D>

/**
```
setMode(mode: StringSignal<TrackingMode>, config?: {fallback: TrackingMode}): void
```

Specifies if this tracker object should track horizontal plane or moving object.
**Note:** on invalid value provided in setter, the mode will default to `fallback` (or `TrackingMode.PLANE` if fallback is not specified).

**See Also**: `PlaneTracker.mode`.
*/
setMode(mode: StringSignal<TrackingMode>, config?: {fallback: TrackingMode}): void

/**
```
trackPoint(screenLocation: Point2D): void
trackPoint(screenX: number, screenY: number): void
trackPoint(screenLocation: Vec2Signal, gestureState: StringSignal): void
```

PlaneTracker origin is bound to a point in 3d space, located on detected plane.
This method updates PlaneTracker to track 3d point currently under given screen coordiantes.
This also triggers new plane detection, in result this object's transform will be modified.
Version with signal parameters can be used in touch gestures for continuous updating:
```
TouchGestures.onPan().subscribe(function(gesture) {
  planeTracker.trackPoint(gesture.location, gesture.state);
});
```
*/
trackPoint(screenLocation: Point2D): void

}



/**

//=========================================================================
// The following example demonstrates how to place an object in world space
// with screen tap location from screen coordinates
//
// Project setup:
// - Add a plane tracker to the scene
// - Add a cube asset from the Spark Library and add it to the scene
//   as a child of the plane tracker
// - Enable touch gestures capability in Properties -> Capabilities ->
//   + Touch Gestures -> Tap Gesture
//=========================================================================

// Load in the required modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]
  const [planeTracker, cube] = await Promise.all([
    Scene.root.findFirst('planeTracker0'),
    Scene.root.findFirst('Cube')
  ]);

  // Use the confidence property to watch the confidence level of the plane
  // tracker
  Diagnostics.watch('Plane Tracking Confidence', planeTracker.confidence);

  // Subscribe to a screen tap event which has a location property in
  // screen coordinates which is the same coordinate space performHitTest
  // takes as an argument
  TouchGestures.onTap().subscribe(async(gesture) => {
    const threeDLocation = await planeTracker.performHitTest(gesture.location);
    Diagnostics.log(threeDLocation);

    // Bind the cube's x,y,z local transforms with the performHitTest generated
    // point3d signals
    cube.transform.x = threeDLocation.x;
    cube.transform.y = threeDLocation.y;
    cube.transform.z = threeDLocation.z;
  });

})(); // Enable async/await in JS [part 2]

*/