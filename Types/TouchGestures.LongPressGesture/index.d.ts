/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../TouchGestures.Gesture/index.d.ts" />


/**
[{"kind":"capability","capability":"longPressGestures","orCapability":""}]
*/


/**
Exposes details of a detected long press gesture.
Ensure Long Press Gesture is enabled under the project's Touch Gestures capability.
*/
declare interface LongPressGesture extends Gesture {

/**
```
(get) location: Vec2Signal
(set) (Not Available)
```

The screen space coordinates of the gesture's location, as a [`Vec2Signal`](/classes/ReactiveModule.Vec2Signal).
Coordinates are always returned in screen space, even if an object was specified in the long press gesture method call, for example: `TouchGestures.onLongPress(plane)`.
*/
location: Vec2Signal

}



/**

//============================================================================
// Change the opacity of a material when a plane is long pressed, and
// reposition a second plane to the location of a long press elsewhere on
// the screen
//
// Project setup:
// - Two planes: plane0 and plane1
// - One material: material0, assigned to plane0
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

  // Locate the plane objects in the scene
  const [firstPlane, secondPlane] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1')
  ]);


  //==========================================================================
  // Reduce the material's opacity when the first plane is long pressed
  //==========================================================================

  // Create a reference to the material
  const material = await Materials.findFirst('material0');

  // Subscribe to long press gestures on the plane
  TouchGestures.onLongPress(firstPlane).subscribe((gesture) => {

    // Set the material opacity to 50% when the gesture begins
    material.opacity = 0.5;

    // Subscribe to the state of the gesture
    gesture.state.monitor().subscribe((state) => {

      // Set the material opacity to 100% when the gesture ends
      if (state.newValue == 'ENDED') {
        material.opacity = 1;
      }
    });
  });


  //==========================================================================
  // Reposition the second plane to the location of the long press gesture
  //==========================================================================

  // Subscribe to long press gestures
  TouchGestures.onLongPress().subscribe((gesture) => {

    // Translate the position of the finger on the screen to the plane's
    // co-ordinate system
    const gestureTransform = Scene.unprojectToFocalPlane(gesture.location);

    // Bind the position of the second plane to the gesture location
    // The x value is multiplied by -1 to flip the x axis position, otherwise
    // it will appear mirrored (this multiplication is not necessary if
    // using the back camera)

    secondPlane.transform.x = gestureTransform.x.mul(-1);
    secondPlane.transform.y = gestureTransform.y;

    // Log the gesture location to the console
    Diagnostics.log(gesture.location);
  });

})(); // Enable async/await in JS [part 2]

*/