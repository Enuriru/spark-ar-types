/// <reference path="../ExternalTexture.State/index.d.ts" />
/// <reference path="../Fonts.State/index.d.ts" />
/// <reference path="../GalleryTexture.State/index.d.ts" />
/// <reference path="../LineBasedPlaneTracking.State/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
/// <reference path="../PlaneTracking.State/index.d.ts" />
/// <reference path="../PointTracker.State/index.d.ts" />
/// <reference path="../Prefabs.State/index.d.ts" />
/// <reference path="../TouchGestures.GestureType/index.d.ts" />
/// <reference path="../TouchGestures.State/index.d.ts" />
/// <reference path="../WorldTracking.State/index.d.ts" />

/**
Exposes details of a detected gesture, common to all touch gesture types.
*/
declare interface Gesture {

/**
```
(get) state: Signal<State>
(set) (Not Available)
```

The state of the current gesture, as a signal containing a [`State`](/enums/touchgesturesmodule.gesture.state) enum value.
You can monitor the value of the returned signal with the [`monitor`](/classes/reactivemodule.stringsignal#methods) method to detect when a gesture ends. For example:
```
TouchGestures.onLongPress().subscribe((gesture) => {
  gesture.state.monitor().subscribe((state) => {
    if(state.newValue == 'ENDED'){
      // Code here will run when the gesture ends
    }
  });
});
```
*/
state: Signal<State>

/**
```
(get) type: GestureType
(set) (Not Available)
```

The type of gesture detected, as a [`GestureType`](/enums/touchgesturesmodule.gesturetype) enum value.
*/
type: GestureType

}



/**

//============================================================================
// Logs details of detected gestures to the console, and monitors when one
// of the detected gestures ends
//
// Required project capabilities:
// - Touch Gestures > Pan Gesture
// - Touch Gestures > Long Press Gesture
//
//============================================================================

// Load in the required modules
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]


  //==========================================================================
  // Log details of a pan gesture detected on the screen
  //==========================================================================

  // Subscribe to pan gestures
  TouchGestures.onPan().subscribe((gesture) => {

    // Log the detected gesture type to the console
    Diagnostics.log(gesture.type);

    // Add the state of the gesture to the watch view
    Diagnostics.watch("Gesture state: ", gesture.state);

  });


  //==========================================================================
  // Log details of a long press gesture detected on the screen
  //==========================================================================

  // Subscribe to long press gestures
  TouchGestures.onLongPress().subscribe((gesture) => {

    // Log the detected gesture type to the console
    Diagnostics.log(gesture.type);
    Diagnostics.log("Long press gesture has begun");

    // Add the state of the gesture to the watch view
    Diagnostics.watch("Gesture state: ", gesture.state);

    // Subscribe to changes in the value of the gesture state
    gesture.state.monitor().subscribe((state) => {

      // When the gesture ends, log a message to the console
      if (state.newValue == 'ENDED') {
        Diagnostics.log("Long press gesture has ended");
      }
    });

  });

})(); // Enables async/await in JS [part 2]

*/