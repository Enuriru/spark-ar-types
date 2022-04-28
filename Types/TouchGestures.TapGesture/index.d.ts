/// <reference path="../Reactive.Point2D/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"tapGestures","orCapability":""}]
*/


/**
Exposes details of a detected tap gesture.
Ensure Tap Gesture is enabled under the project's Touch Gestures capability.
*/
declare interface TapGesture extends Gesture {

/**
```
(get) location: Point2D
(set) (Not Available)
```

The screen space coordinates of the location that the tap gesture was detected, as a [`Point2D`](/classes/ReactiveModule.Point2D) object.
Coordinates are always returned in screen space, even if an object was specified in the touch gesture method call, for example: `TouchGestures.onTap(plane)`.
*/
location: Point2D

/**
```
(get) objectDepthDistance: number
(set) (Not Available)
```

The distance from the 3D location of the tap gesture to the camera, as a `number`.
This requires an object to have been specified in the touch gesture method call, for example: `TouchGestures.onTap(plane)`. Otherwise, a value of `infinity` is returned.
*/
objectDepthDistance: number

}



/**

//============================================================================
// Repositions a plane to the location of a tap gesture on the screen, and
// returns the distance of a second plane to the camera.
//
// Project setup:
// - Two planes: plane0 and plane1
//
// Required project capabilities:
// - Touch Gestures > Tap Gesture
//
//============================================================================

// Load in the required modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Reactive = require('Reactive');
const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane objects in the scene
  const [firstPlane, secondPlane] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1')
  ]);

  //==========================================================================
  // Reposition the first plane to the location of the tap gesture
  //==========================================================================

  // Subscribe to tap gestures
  TouchGestures.onTap().subscribe((gesture) => {

    // Convert the gesture location to a Point2DSignal in screen space
    const gestureLocationAsSignal = Reactive.point2d(gesture.location.x, gesture.location.y);
    const gestureTransform = Scene.unprojectToFocalPlane(gestureLocationAsSignal);

    // Bind the position of the plane to the gesture location
    // The x value is multiplied by -1 to flip the x axis position, otherwise
    // it will appear mirrored (this multiplication is not necessary if
    // using the back camera)

    firstPlane.transform.x = gestureTransform.x.mul(-1);
    firstPlane.transform.y = gestureTransform.y;

    // Log the gesture location to the console
    Diagnostics.log(gesture.location);

  });


  //==========================================================================
  // Return the distance of the second plane to the camera
  //==========================================================================

  // Keep track of whether the plane is near or further away from the camera
  var secondPlaneIsNear = true;

  // Subscribe to long press gestures on the second plane
  TouchGestures.onTap(secondPlane).subscribe((gesture) => {

    // Log the distance of the plane to the camera
    // Note how the logged value changes when the plane is repositioned in
    // the z axis
    Diagnostics.log(gesture.objectDepthDistance);

    // If the plane is near the camera, push it back
    if(secondPlaneIsNear){
      secondPlane.transform.z = -1;
      secondPlaneIsNear = false;

    // If the plane is far away from the camera, bring it forward
    } else {
      secondPlane.transform.z = -0.5;
      secondPlaneIsNear = true;
    }
  });

})(); // Enable async/await in JS [part 2]

*/