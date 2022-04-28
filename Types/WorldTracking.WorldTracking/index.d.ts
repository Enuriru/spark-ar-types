/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../WorldTracking.ARGeoTrackableElevationType/index.d.ts" />
/// <reference path="../WorldTracking.ARPointTrackable/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackable/index.d.ts" />
/// <reference path="../WorldTracking.GeoAnchorTrackingProperties/index.d.ts" />
/// <reference path="../WorldTracking.HitTestResult/index.d.ts" />
/// <reference path="../WorldTracking.HitTestType/index.d.ts" />
/// <reference path="../WorldTracking.TrackingState/index.d.ts" />
/// <reference path="../WorldTracking.TrackingStateReason/index.d.ts" />

/**
The WorldTrackingModule class provides functionality to track multiple surfaces in your
environment and interact with them by placing virtual content on the detected surface(s).
This class can be used to author 'World AR' effects that allow users to place and move AR
objects in the scene, as is commonly seen in AR Commerce use-cases in which users can
position couches or tables, for example. Creators are also able to visualize planes detected
in the scene.
*/
declare interface WorldTracking extends Module {

/**
```
(get) geoAnchorTrackingProperties: GeoAnchorTrackingProperties
(set) (Not Available)
```
*/
geoAnchorTrackingProperties: GeoAnchorTrackingProperties

/**
```
(get) realWorldScaleActive: BoolSignal
(set) (Not Available)
```

Returns true if the world tracker has entered a state in which the AR effect can be shown at real world scale.
*/
realWorldScaleActive: BoolSignal

/**
```
(get) realWorldScaleSupported: BoolSignal
(set) (Not Available)
```

Returns true if real world scale for world tracking is available on the current device.
*/
realWorldScaleSupported: BoolSignal

/**
```
(get) state: StringSignal<TrackingState>
(set) (Not Available)
```

Returns the current state of the world tracker.
*/
state: StringSignal<TrackingState>

/**
```
(get) stateReason: StringSignal<TrackingStateReason>
(set) (Not Available)
```

Returns the reason the world tracker is experiencing limited tracking quality,
if the value returned by `WorldTrackingModule.state` is `LIMITED`.
*/
stateReason: StringSignal<TrackingStateReason>

/**
```
addGeoTrackable(latitude: number, longitude: number, elevationType?: ARGeoTrackableElevationType, elevation?: number, bearing?: number, radiusToleranceMeters?: number): Promise<ARTrackable>
```

Adds a trackable tracking the specified geographic location coordinate.
The optional `elevation` argument specifies the trackable elevation value as either
an altitude in meters, or an offset from the camera in meters as indicated by the `elevationType` argument.
Default value is to use camera elevation: `CAMERA_BASED` elevation type and 0 meters as elevation.

The optional `bearing` argument specifies the trackable geographic orientation as
a clock-wise angle from true North. Default value is 0, pointing to true North.

The optional `radiusToleranceMeters` argument can be used to specify how much
uncertainty is tolerated when tracking the location coordinate. It may affect when
the trackable enters tracking state.
*/
addGeoTrackable(latitude: number, longitude: number, elevationType?: ARGeoTrackableElevationType, elevation?: number, bearing?: number, radiusToleranceMeters?: number): Promise<ARTrackable>

/**
```
addPointTrackable(config: {trackable?: ARTrackable, worldPosition: Point3D}): Promise<ARPointTrackable>
```

*/
addPointTrackable(config: {trackable?: ARTrackable, worldPosition: Point3D}): Promise<ARPointTrackable>

/**
```
addReferencePoint(config: {trackable?: ARTrackable, worldPosition: Point3D}): Promise<ARPointTrackable>
```

*/
addReferencePoint(config: {trackable?: ARTrackable, worldPosition: Point3D}): Promise<ARPointTrackable>

/**
```
deletePointTrackable(referencePoint: ARPointTrackable): void
```

Deletes a reference point that was added using the `addReferencePoint()` method.
*/
deletePointTrackable(referencePoint: ARPointTrackable): void

/**
```
deleteReferencePoint(referencePoint: ARPointTrackable): void
```

*/
deleteReferencePoint(referencePoint: ARPointTrackable): void

/**
```
hitTest(config: {fallbackToEstimatedPlanes?: false | true, hitTestType?: HitTestType, screenLocation: Vec2Signal}): Promise<Array<HitTestResult>>
```

Returns the point of intersection of the hit test on all intersecting planes, both horizontal and vertical, in the WorldTracker's
local coordinates (in 3D units), as well as the associated trackables (planes).
The results of the hit test are sorted in order of increasing distance to the camera.

The optional `hitTestType` argument can be used to specify the type of plane to hit test against, for example, horizontal planes only.

The optional 'fallbackToEstimatedPlanes' argument can be used to set whether to fall back to using plane estimation, a less accurate
estimate of real world surfaces than tha provided by the default plane detection algorithm which continuously analyzes the scene to
detect planes in the view.
*/
hitTest(config: {fallbackToEstimatedPlanes?: false | true, hitTestType?: HitTestType, screenLocation: Vec2Signal}): Promise<Array<HitTestResult>>

/**
```
onTrackableAdded(): EventSource<ARTrackable>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
that emits an ARTrackable each time a trackable is detected in the view.
*/
onTrackableAdded(): EventSource<ARTrackable>

/**
```
onTrackableDeleted(): EventSource<ARTrackable>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
that emits an ARTrackable each time a trackable is deleted.
*/
onTrackableDeleted(): EventSource<ARTrackable>

}



/**

//==============================================================================
// The following example demonstrates how to track an object to surface planes detected in
// your environment, and move the object between surface planes.
//
// Project setup:
// - Insert a plane
// - Enable all Tap and Pan Gestures under the Touch Gesture capability
//==============================================================================

// Load in the required modules
const Reactive = require('Reactive');
const Scene = require('Scene');
const WorldTracker = require('WorldTracker');
const TouchGestures = require('TouchGestures');

// Create a global placeholder for the tracked reference point
let refPoint;

// Enable async/await in JS [part 1]
(async function() {

    // Locate the plane in the Scene
    const [plane] = await Promise.all([
      Scene.root.findFirst('plane0')
    ]);

    // Hide the plane at the start
    plane.hidden = true;

    //==============================================================================
    // Use a Tap gesture to place the plane object
    //==============================================================================
    TouchGestures.onTap().subscribe( e =>{
        var point2d = Reactive.point2d(Reactive.val(e.location.x), Reactive.val(e.location.y));

        // Perform a hit test against any type of surface plane using the worldtracker
        WorldTracker.hitTest({screenLocation: point2d, hitTestType: "ANY_PLANE"})
        .then(hitTestResults => {

            // Remove the last reference point, if one already exists
            if(refPoint){
                WorldTracker.deletePointTrackable(refPoint);
                refPoint = null;
            }

            // The hitTestResults array stores detected surface planes, sorted by their z-distance from the camera
            // The first element in the array always corresponds to the nearest detected surface plane
            if(hitTestResults){

                // Add an Anchor (reference point) at the hitTest location for the first element in the array, the nearest detected surface plane
                WorldTracker.addPointTrackable({worldPosition: hitTestResults[0].intersectionPoint}).then(
                    function onFulfilled(rp) {
                        refPoint = rp;

                        // Bind the transform of the plane object to the transform of the reference point
                        plane.transform = refPoint.transform;

                        // Rotate the plane 90 degrees on the X-axis so that it lays flat
                        plane.transform.rotationX = refPoint.transform.rotationX.add(Math.PI/2);

                        // Show the plane
                        plane.hidden = false;
                    }
                );
            }
            });
    });

    //==============================================================================
    // Use a Pan gesture to move the plane object
    //==============================================================================
    TouchGestures.onPan().subscribe(function (e) {
        // If a reference point already exists, move it to the new location
        if(refPoint)
            refPoint.move({screenLocation: e.location, state: e.state, snapToPlane: true});
    });

  // Enable async/await in JS [part 2]
  })();

*/