/// <reference path="../Reactive.BoolSignal/index.d.ts" />

/**
The `OutputVisibility` class describes whether or not an object is visible from various outputs.
*/
declare interface OutputVisibility {

/**
```
(get) forCaptureOutput: BoolSignal
(set) forCaptureOutput: BoolSignal
```

Specifies whether the object is visible on the capture output.
*/
forCaptureOutput: BoolSignal

/**
```
(get) forCaptureOutputValue: boolean
(set) forCaptureOutputValue: boolean
```

Specifies whether the object is visible on the capture output.
*/
forCaptureOutputValue: boolean

/**
```
(get) forPreviewOutput: BoolSignal
(set) forPreviewOutput: BoolSignal
```

Specifies whether the object is visible on the preview output.
*/
forPreviewOutput: BoolSignal

/**
```
(get) forPreviewOutputValue: boolean
(set) forPreviewOutputValue: boolean
```

Specifies whether the object is visible on the preview output.
*/
forPreviewOutputValue: boolean

}



/**

//==============================================================================
// The following example demonstrates how to specify whether or not an object
// will be visible from various outputs.
//
// Project setup:
// - Add a Plane object sample with the name 'plane0' to the scene
//==============================================================================

// Load in the required modules
const Scene = require('Scene');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Plane scene element
  const plane = await Scene.root.findFirst('plane0');

  // Set the object to be visible for the preview output
  plane.outputVisibility.forPreviewOutput = true;
  // Set the object to be invisible for the capture output
  // i.e when somebody takes a photo / video that features this effect
  plane.outputVisibility.forCaptureOutput = false;

})(); // Enable async/await in JS [part 2]

*/