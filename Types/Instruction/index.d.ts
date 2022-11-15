/// <reference path="../Reactive.BoolSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"instruction","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Effect"}]
*/


/**
Allows instructions to be displayed to the user within an effect.
*/
declare interface Instruction extends Module {

/**
```
(get) automaticHintsEnabled: BoolSignal
(set) automaticHintsEnabled: BoolSignal
```

Specifies whether or not automatic instruction hints are enabled.
*/
automaticHintsEnabled: BoolSignal

}



/**

//==============================================================================
// Display different instructions depending on whether the front or back
// camera is in use.
//
// When the front camera is in use and the user's mouth is open, the
// instructions are hidden.
//
// Project setup:
// - Add the Instructions capability in the project's Properties and select the
//   Custom Instructions checkbox
// - Add the 'Open mouth to start' and 'Flip the camera' instructions
//
//==============================================================================

// Load in the required modules
const Instruction = require('Instruction');
const CameraInfo = require('CameraInfo');
const FaceTracking = require('FaceTracking');
const FaceGestures = require('FaceGestures');
const Reactive = require('Reactive');

// Create a reference to a detected face
const face = FaceTracking.face(0);

// Create a signal to track when the mouth is open and return the opposite boolean value
// If the mouth is open, 'displayInstructions' will be false and vice versa
const displayInstructions = Reactive.not(FaceGestures.hasMouthOpen(face));

// Get the camera in use
const captureDevicePosition = CameraInfo.captureDevicePosition;

// Monitor when the camera in use changes
captureDevicePosition.monitor({fireOnInitialValue: true}).subscribe((event) => {

  // If the user has the front camera in use, show the 'Open mouth to start'
  // instructions
  if (event.newValue == 'FRONT') {
    // The instructions' visibility is bound to the 'displayInstructions' bool
    Instruction.bind(displayInstructions, 'open_mouth_start');

  // If the user has the front camera in use, show the 'Flip the camera'
  // instructions
  } else if (event.newValue == 'BACK') {
    Instruction.bind(true, 'flip_the_camera');
  }

});

*/