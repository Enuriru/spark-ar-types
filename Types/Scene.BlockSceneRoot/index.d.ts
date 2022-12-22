/// <reference path="../Blocks.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Blocks.BlockInstanceOutputs/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box3DSignal/index.d.ts" />
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
(get) boundingBox: Box3DSignal
(set) (Not Available)
```

Returns a signal that contains a 3D Bounding Box
of this object in it's parent coordinate system.
Note: This bounding box contains and represents the entire contents of the Block,
      but doesn't include the children in the parent context.
*/
boundingBox: Box3DSignal

/**
```
(get) boundingBoxVisible: BoolSignal
(set) (Not Available)
```

Represents whether or not the bounding box for the object is visible.
Note: Visibility is determined on the entire set of contents of the Block,
      but doesn't include the children in the parent context.
*/
boundingBoxVisible: BoolSignal

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
getBoundingBox(options?: {includeChildren: boolean}): Box3DSignal
```

Returns a signal that contains a 3D Bounding Box
of this object in it's local coordinate system.
Optional parameters include:
 - `includeChildren`: whether to include all children (in the parent context)
                      of this object when computing bounding box.
                      Default: `false`.
*/
getBoundingBox(options?: {includeChildren: boolean}): Box3DSignal

/**
```
getBoundingBoxVisible(options?: {includeChildren: boolean}): BoolSignal
```

Returns a signal that contains value representing
whether bounding box of a given object is visible or not in the viewport.
Optional parameters include:
 - `includeChildren`: whether to include all children (in the parent context)
                      of this object when computing bounding box.
                      Default: `false`.
*/
getBoundingBoxVisible(options?: {includeChildren: boolean}): BoolSignal

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