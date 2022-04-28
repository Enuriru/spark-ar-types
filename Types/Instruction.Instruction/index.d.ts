/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"instruction","orCapability":""}]
*/


/**
The `InstructionModule` class enables effects to provide instructions to the user.
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

/**
```
bind(enabled: BoolSignal, token: StringSignal): void
```

When enabled, shows instruction for given token (you can find and select custom instruction
tokens in project capabilities).
To hide instruction simply set enabled to `false`.

You can have at most one binding for instructions, meaning that setting a different binding
would replace any previously created and setup binding for instructions.
*/
bind(enabled: BoolSignal, token: StringSignal): void

}



/**

//==============================================================================
// The following example demonstrates how to hide an instruction when more than
// one face is detected and show it if not.
//
// Project setup:
// - Set the 'Max Faces' of the 'Face Tracking' capability to 2 or more
// - Add the 'Instructions' capability
// - Select 'Custom Instructions'
// - Add the 'Try it with friends' instruction
//==============================================================================

// Load in the required modules
const Instruction = require('Instruction');
const FaceTracking = require('FaceTracking');

// Define a boolean that will be true until 2 faces are detected
var show = FaceTracking.count.lt(2);

// Bind the visibility of the instruction to the boolean
Instruction.bind(show, 'try_with_friends');

*/