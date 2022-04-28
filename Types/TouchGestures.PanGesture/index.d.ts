/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"panGestures","orCapability":""}]
*/


/**
Exposes details of a detected pan gesture.
Ensure Pan Gesture is enabled under the project's Touch Gestures capability.
*/
declare interface PanGesture extends Gesture {

/**
```
(get) location: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the gesture's start point, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the pan gesture method call, for example: `TouchGestures.onPan(plane)`.
*/
location: Vec2Signal

/**
```
(get) translation: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the gesture's position relative to the start point, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the pan gesture method call, for example: `TouchGestures.onPan(plane)`.
*/
translation: Vec2Signal

}



/**

//============================================================================
// Move a plane when it's tapped and dragged across the screen, and change
// the opacity of a material when panning horizontally across the screen
//
// Project setup:
// - Two planes: plane0 and plane1
// - One material: material0, assigned to plane1
//
// Required project capabilities:
// - Touch Gestures > Pan Gesture
//
//============================================================================

// Load in the required modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Materials = require('Materials');
const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]


  //==========================================================================
  // Move the first plane when it's tapped and dragged around the screen
  //==========================================================================

  //  Create a reference to the first plane
  const plane = await Scene.root.findFirst('plane0');

  // Create a reference to the plane's transform
  const planeTransform = plane.transform;

  // Subscribe to pan gestures on the first plane
  TouchGestures.onPan(plane).subscribe((gesture) => {

    // Translate the gesture location to the plane's co-ordinate system
    const gestureTransform = Scene.unprojectToFocalPlane(gesture.location);

    // Bind the position of the first plane to the gesture location
    // The x value is multiplied by -1 to flip the x axis position, otherwise
    // it will appear mirrored (this multiplication is not necessary if
    // using the back camera)

    planeTransform.x = gestureTransform.x.mul(-1);
    planeTransform.y = gestureTransform.y;
  });


  //==========================================================================
  // Change the opacity of a material when panning horizontally on the screen
  //==========================================================================

  // Locate the canvas and material
  const [canvas, material] = await Promise.all([
    Scene.root.findFirst('canvas0'),
    Materials.findFirst('material0')
  ]);

  // Subscribe to pan gestures
  TouchGestures.onPan().subscribe((gesture) => {

    // Increase the material's opacity when the finger pans from the gesture
    // origin to the right edge of the screen, and reduce the opacity when
    // the finger is panned from the right edge towards the gesture origin

    const distance = gesture.translation.x.div(canvas.width).clamp(0.2, 1.0);
    material.opacity = distance;

    // Add the x axis translation value to the watch view in the console
    Diagnostics.watch("Pan x axis translation:", gesture.translation.x);
  });

})(); // Enables async/await in JS [part 2]

*/