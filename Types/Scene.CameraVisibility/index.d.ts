/// <reference path="../Reactive.BoolSignal/index.d.ts" />

/**
The `CameraVisibility` class describes whether or not an object is visible from various camera views.
*/
declare interface CameraVisibility {

/**
```
(get) forBackCamera: BoolSignal
(set) forBackCamera: BoolSignal
```

Specifies whether the object is visible when the back camera is the active one.
*/
forBackCamera: BoolSignal

/**
```
(get) forBackCameraValue: boolean
(set) forBackCameraValue: boolean
```

Specifies whether the object is visible when the back camera is the active one.
*/
forBackCameraValue: boolean

/**
```
(get) forFrontCamera: BoolSignal
(set) forFrontCamera: BoolSignal
```

Specifies whether the object is visible when the front camera is the active one.
*/
forFrontCamera: BoolSignal

/**
```
(get) forFrontCameraValue: boolean
(set) forFrontCameraValue: boolean
```

Specifies whether the object is visible when the front camera is the active one.
*/
forFrontCameraValue: boolean

/**
```
(get) forUnspecifiedCamera: BoolSignal
(set) forUnspecifiedCamera: BoolSignal
```

Specifies whether the object is visible when the active camera couldn't be specified.
*/
forUnspecifiedCamera: BoolSignal

/**
```
(get) forUnspecifiedCameraValue: boolean
(set) forUnspecifiedCameraValue: boolean
```

Specifies whether the object is visible when the active camera couldn't be specified.
*/
forUnspecifiedCameraValue: boolean

}



/**

//==============================================================================
// The following example demonstrates how to set the camera visibility
// properties on an object.
//
// Project setup:
// - Import the Heart 3D asset from the AR library
//==============================================================================

// Load in the required modules
import Scene from 'Scene';
import Reactive from 'Reactive'

(async function () {  // Enables async/await in JS [part 1]

  // Locate the scene element that contains the 3D mesh
  const [heart] = await Promise.all([
    Scene.root.findFirst('Heart')
  ]);

  // turn off visibility when the back camera is active
  heart.cameraVisibility.forBackCamera = Reactive.val(false);

})(); // Enables async/await in JS [part 2]

*/