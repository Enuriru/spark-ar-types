/// <reference path="../Blocks.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Blocks.BlockInstanceOutputs/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Scene.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Scene.BlockInstanceOutputs/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />


/**
[{"kind":"capability","capability":"blocks","orCapability":""}]
*/


/**
The `BlockSceneRoot` class describes the root scene object of a block.
*/
declare interface BlockSceneRoot extends SceneObjectBase {

/**
```
(get) inputs: BlockInstanceInputs
(set) (Not Available)
```

Returns an object encapsulating all input setters for the Block Instance.
*/
inputs: BlockInstanceInputs

/**
```
(get) outputs: BlockInstanceOutputs
(set) (Not Available)
```

Returns an object encapsulating all outputs getters for the Block Instance.
*/
outputs: BlockInstanceOutputs

/**
```
getBooleanOutput(name: string): BoolSignal
```

Returns a `BoolSignal` for a named Block output.
*/
getBooleanOutput(name: string): BoolSignal

/**
```
getColorOutput(name: string): ColorSignal
```

Returns a `ColorSignal` for a named Block output.
*/
getColorOutput(name: string): ColorSignal

/**
```
getPixelPointOutput(name: string): Vec2Signal
```

Returns a `Vec2Signal` for a named Block output.
*/
getPixelPointOutput(name: string): Vec2Signal

/**
```
getPointOutput(name: string): PointSignal
```

Returns a `PointSignal` for a named Block output.
*/
getPointOutput(name: string): PointSignal

/**
```
getScalarOutput(name: string): ScalarSignal
```

Returns a `ScalarSignal` for a named Block output.
*/
getScalarOutput(name: string): ScalarSignal

/**
```
getShaderOutput(name: string): ShaderSignal
```

Returns a `ShaderSignal` for a named Block output.
*/
getShaderOutput(name: string): ShaderSignal

/**
```
getStringOutput(name: string): StringSignal
```

Returns a `StringSignal` for a named Block output.
*/
getStringOutput(name: string): StringSignal

/**
```
getVectorOutput(name: string): VectorSignal
```

Returns a `VectorSignal` for a named Block output.
*/
getVectorOutput(name: string): VectorSignal

/**
```
setBooleanInput(name: string, signal: BoolSignal): void
```

Binds a `BoolSignal` to a named Block input.
*/
setBooleanInput(name: string, signal: BoolSignal): void

/**
```
setColorInput(name: string, signal: ColorSignal): void
```

Binds a `ColorSignal` to a named Block input.
*/
setColorInput(name: string, signal: ColorSignal): void

/**
```
setPixelPointInput(name: string, signal: Vec2Signal): void
```

Binds a `Vec2Signal` to a named Block input.
*/
setPixelPointInput(name: string, signal: Vec2Signal): void

/**
```
setPointInput(name: string, signal: PointSignal): void
```

Binds a `PointSignal` to a named Block input.
*/
setPointInput(name: string, signal: PointSignal): void

/**
```
setScalarInput(name: string, signal: ScalarSignal): void
```

Binds a `ScalarSignal` to a named Block input.
*/
setScalarInput(name: string, signal: ScalarSignal): void

/**
```
setShaderInput(name: string, signal: ShaderSignal): void
```

Binds a `ShaderSignal` to a named Block input.
*/
setShaderInput(name: string, signal: ShaderSignal): void

/**
```
setStringInput(name: string, signal: StringSignal): void
```

Binds a `StringSignal` to a named Block input.
*/
setStringInput(name: string, signal: StringSignal): void

/**
```
setVectorInput(name: string, signal: VectorSignal): void
```

Binds a `VectorSignal` to a named Block input.
*/
setVectorInput(name: string, signal: VectorSignal): void

}



/**

//==============================================================================
// The following example demonstrates how to set/get boolean value to/from Block instance
//
// Project setup:
// - Insert a plane
// - Add a Block and instantiate an instance
// - Edit the Block
//   - Insert a plane in the Block
//   - Add a boolean input and a boolean output
//   - Connect the input patch to visible patch of the plane
//==============================================================================

// Load in the required modules
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the plane and block in the Scene
  const [plane, block] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('block0')
  ]);

  //==============================================================================
  // Switch visibility of a plane by setting/getting boolean value of Block
  //==============================================================================

  // Observed plane in the Block switches its visibility by setting the input value between true and false
  await block.inputs.setBoolean('input', true); // or false or BoolSignal

  // Observed plane0 switches its visibility when change value of Block output
  plane.hidden = await block.outputs.getBoolean('output');

// Enable async/await in JS [part 2]
})();

*/