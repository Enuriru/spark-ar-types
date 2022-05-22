/// <reference path="../Blocks.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Blocks.BlockInstanceOutputs/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box3DSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
declare interface BlockSceneRoot extends SceneObjectBase {
/**
* ```
(get) boundingBox: Box3DSignal
(set) (Not Available)
```

Returns a signal that contains a 3D Bounding Box
of this object in it's parent coordinate system.
Note: This bounding box contains and represents the entire contents of the Block,
      but doesn't include the children in the parent context.
*/
boundingBox: Box3DSignal;
/**
* ```
(get) boundingBoxVisible: BoolSignal
(set) (Not Available)
```

Represents whether or not the bounding box for the object is visible.
Note: Visibility is determined on the entire set of contents of the Block,
      but doesn't include the children in the parent context.
*/
boundingBoxVisible: BoolSignal;
/**
* ```
(get) inputs: BlockInstanceInputs
(set) (Not Available)
```

Returns an object encapsulating all input setters for the Block Instance.
*/
inputs: BlockInstanceInputs;
/**
* ```
(get) outputs: BlockInstanceOutputs
(set) (Not Available)
```

Returns an object encapsulating all outputs getters for the Block Instance.
*/
outputs: BlockInstanceOutputs;
/**
*  
 * getBoundingBox(options?: {includeChildren: boolean}): Box3DSignal
 *  
 * 
 * Returns a signal that contains a 3D Bounding Box
 * of this object in it's local coordinate system.
 * Optional parameters include:
 *  - `includeChildren`: whether to include all children (in the parent context)
 *                       of this object when computing bounding box.
 *                       Default: `False`
 */
getBoundingBox(options?: {includeChildren: boolean}): Box3DSignal;

/**
*  
 * getBoundingBoxVisible(options?: {includeChildren: boolean}): BoolSignal
 *  
 * 
 * Returns a signal that contains value representing
 * whether bounding box of a given object is visible or not in the viewport.
 * Optional parameters include:
 *  - `includeChildren`: whether to include all children (in the parent context)
 *                       of this object when computing bounding box.
 *                       Default: `False`
 */
getBoundingBoxVisible(options?: {includeChildren: boolean}): BoolSignal;

}
