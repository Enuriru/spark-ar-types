/// <reference path="../Patches.PatchesInputs/index.d.ts" />
/// <reference path="../Patches.PatchesOutputs/index.d.ts" />

/**
The `PatchesModule` module allows interop between JS scripting and the AR Studio patches visual scripting system.
*/
declare interface Patches extends Module {

/**
```
(get) decorators: PatchesDecorators
(set) (Not Available)
```

Decorator utilities for the TypeScript patches.
*/
decorators: PatchesDecorators

/**
```
(get) inputs: PatchesInputs
(set) (Not Available)
```

Returns an object encapsulating all inputs setters for the Patch Editor patches.
*/
inputs: PatchesInputs

/**
```
(get) outputs: PatchesOutputs
(set) (Not Available)
```

Returns an object encapsulating all outputs getters for the Patch Editor patches.
*/
outputs: PatchesOutputs

/**
```
registerPatchFactory(name: string, factory: any): void
```

Registers a TypeScript patch JS instance.
*/
registerPatchFactory(name: string, factory: any): void

/**
```
registerPatchesCompleted(): void
```

Starts to use the registered TypeScript patches.
*/
registerPatchesCompleted(): void

}



/**

//==============================================================================
// The following example demonstrates how to send and receive values between the
// Patch Editor and script.
//
// Project setup:
// - Insert text
// - With your script selected in the Assets, in the Inspector:
//   - Select 'Boolean' from the + menu of 'From Script' and name it 'myBoolean'
//   - Select 'Create' next to 'Producer Patch' to add it to the Patch Editor
//   - Select 'String' from the + menu of 'To Script' and name it 'myString'
//   - Select the arrow next to 'myString' to add it to the Patch Editor
// - Add an 'If Then Else' patch setting it's 'Type' to 'Text'
// - Add two strings to the 'Then' and 'Else' values of the 'If Then Else' patch
// - Connect the 'myBoolean' value to the 'Condidition' value
// - Connect the 'If Then Else' patch output value to the 'myString' value
//==============================================================================

// Load in the required modules
const Patches = require('Patches');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the text in the Scene
  const [text] = await Promise.all([
    Scene.root.findFirst('text0')
  ]);

  // Create a boolean variable
  const myBoolean = true;

  // Send the boolean value to the Patch Editor under the name 'myBoolean'
  await Patches.inputs.setBoolean('myBoolean', myBoolean);

  // Get the 'myString' string value from the Patch Editor
  const myString = await Patches.outputs.getString('myString');

  // Update the text with the string value
  text.text = myString;
// Enable async/await in JS [part 2]
})();

*/