/// <reference path="../Patches.PatchesInputs/index.d.ts" />
/// <reference path="../Patches.PatchesOutputs/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />

/**
The `PatchesModule` module allows interop between JS scripting and the AR Studio patches visual scripting system.
*/
declare interface Patches extends Module {

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
getBooleanValue(name: string): BoolSignal
```

Returns a `BoolSignal` that is exported with `name` from the Patch Editor.
*/
getBooleanValue(name: string): BoolSignal

/**
```
getColorValue(name: string): RgbaSignal
```

Returns a `RgbaSignal` that is exported with `name` from the Patch Editor.
*/
getColorValue(name: string): RgbaSignal

/**
```
getPoint2DValue(name: string): Vec2Signal
```

Returns a `Vec2Signal` that is exported with `name` from the Patch Editor.
*/
getPoint2DValue(name: string): Vec2Signal

/**
```
getPointValue(name: string): PointSignal
```

Returns a `PointSignal` that is exported with `name` from the Patch Editor.
*/
getPointValue(name: string): PointSignal

/**
```
getPulseValue(name: string): EventSource<any>
```

Returns a pulse `EventSource` that wrapps a pulse that is exported with `name` from the Patch Editor.
*/
getPulseValue(name: string): EventSource<any>

/**
```
getScalarValue(name: string): ScalarSignal
```

Returns a `ScalarSignal` that is exported with `name` from the Patch Editor.
*/
getScalarValue(name: string): ScalarSignal

/**
```
getStringValue(name: string): StringSignal
```

Returns a `StringSignal` that is exported with `name` from the Patch Editor.
*/
getStringValue(name: string): StringSignal

/**
```
getVectorValue(name: string): VectorSignal
```

Returns a `VectorSignal` that is exported with `name` from the Patch Editor.
*/
getVectorValue(name: string): VectorSignal

/**
```
setBooleanValue(name: string, signal: BoolSignal | boolean): void
```

Sends a `BoolSignal` that is imported with `name` into the Patch Editor.
*/
setBooleanValue(name: string, signal: BoolSignal | boolean): void

/**
```
setColorValue(name: string, signal: RgbaSignal): void
```

Sends a `RgbaSignal` that is imported with `name` into the Patch Editor.
*/
setColorValue(name: string, signal: RgbaSignal): void

/**
```
setPoint2DValue(name: string, signal: Vec2Signal): void
```

Sends a `Vec2Signal` that is imported with `name` into the Patch Editor.
*/
setPoint2DValue(name: string, signal: Vec2Signal): void

/**
```
setPointValue(name: string, signal: PointSignal): void
```

Sends a `PointSignal` that is imported with `name` into the Patch Editor.
*/
setPointValue(name: string, signal: PointSignal): void

/**
```
setPulseValue(name: string, signal: EventSource<any>): void
```

Sends an `EventSource<any>` that is imported with `name` into the Patch Editor.
**Note**: The `Reactive.once()` method can be used to return an `EventSource<any>` that emits an empty event as soon as possible.
*/
setPulseValue(name: string, signal: EventSource<any>): void

/**
```
setScalarValue(name: string, signal: ScalarSignal | number): void
```

Sends a `ScalarSignal` that is imported with `name` into the Patch Editor.
*/
setScalarValue(name: string, signal: ScalarSignal | number): void

/**
```
setStringValue(name: string, signal: StringSignal | string): void
```

Sends a `StringSignal` that is imported with `name` into the Patch Editor.
*/
setStringValue(name: string, signal: StringSignal | string): void

/**
```
setVectorValue(name: string, signal: VectorSignal): void
```

Sends a `VectorSignal` that is imported with `name` into the Patch Editor.
*/
setVectorValue(name: string, signal: VectorSignal): void

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