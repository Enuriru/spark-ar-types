/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Scene.WorldTransformSync/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `SceneModule` class exposes properties and methods to access the objects in a scene.
*/
declare interface Scene extends Module {

/**
```
(get) hiddenValue: boolean
(set) hiddenValue: boolean
```

Synchronously specifies whether the scene object and its descendants are hidden.
*/
hiddenValue: boolean

/**
```
(get) root: Scene
(set) (Not Available)
```

Returns an object that is the root of the scene tree. Other objects are accessed by walking down the scene tree from the root using the `SceneObjectBase.child` and `SceneObjectBase.find` methods.
*/
root: Scene

/**
```
(get) worldTransformValue: WorldTransformSync
(set) (Not Available)
```

Specifies a `WorldTransformSync` object describing the scene roots transformation relative to world coordinate system.
This property is available only within the context of a block.
*/
worldTransformValue: WorldTransformSync

/**
```
addChildSync(child: SceneObjectBase | string): void
```

Add a child to this scene object synchronously.
Please note the following specific behavior when using this API:
- Adding an object as a child automatically removes it from any other parent.
- Adding a child that was created in Studio is not allowed.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
addChildSync(child: SceneObjectBase | string): void

/**
```
clone(sceneObject: string | SceneObjectBase, options?: {cloneBlocksInputConnections?: false | true, cloneChildren?: false | true, initialState?: {[key: string]: any}}): Promise<SceneObjectBase>
```

Clone a scene object asynchronously.
When cloning a scene object, keep the following in mind:
- `sceneObject` is either the identifier of the SceneObjectBase or the SceneObjectBase itself to be cloned. Cloning a scene object with an identifier that doesn't exist, or one that cannot be dynamically instantiated fails the `Promise`.
- New objects always get assigned a globally unique `identifier`.
- All properties that are using Signal types get assigned a ConstSignal with the last value unless `initialState` (see below) overrides it.
- `options` include a set of optional parameters for cloning
    - `cloneChildren` - when true, recursively clone all children of the scene object in the scene tree. If any of the children is non-clonable or fails to be cloned, roll back to the previous state before cloning and return an error that specifies the child’s id and type. The default is false.
    - `initialState` overrides any cloned states on `sceneObject`.
    - `initialState` can contain any `key: value` pair for any settable property of the scene object class (e.g. `hidden`, `transform`). Similar to dynamic instantiation, setting invalid fields will fail the promise.
    - `cloneBlocksInputConnections` -  Block's input connections will be cloned if this flag is set to true. The default is false. The flag is ignored if `sceneObject` is not a BlockSceneRoot. If `cloneChildren` is also set to true, this flag will be recurisvely applied to all block children.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
clone(sceneObject: string | SceneObjectBase, options?: {cloneBlocksInputConnections?: false | true, cloneChildren?: false | true, initialState?: {[key: string]: any}}): Promise<SceneObjectBase>

/**
```
cloneSync(sceneObject: string | SceneObjectBase, initialState?: {[key: string]: any}): SceneObjectBase
```

Clone a scene object synchronously.
When cloning a scene object, keep the following in mind:
- `sceneObject` is either the identifier of the SceneObjectBase or the SceneObjectBase itself to be cloned.
- New objects always get assigned a globally unique `identifier`.
- `initialState` overrides the cloned state.
- `initialState` can contain any `key: value` pair for any settable property of the scene object class being cloned.
- All properties that are using Signal types get assigned the last value unless initialState overrides it.

Cloning a scene object with an identifier that doesn't exist will throw `SceneObjectNotExistedError` error.
If there is an unsupported property in the initial state, error `UnexpectedPropertyError` will be thrown
If the scene object can't be cloned, error `SceneObjectCantBeClonedError` will be thrown

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
cloneSync(sceneObject: string | SceneObjectBase, initialState?: {[key: string]: any}): SceneObjectBase

/**
```
create(className: string, initialState?: {[key: string]: any}): Promise<SceneObjectBase>
```

Create a scene object asynchronously.
When creating the scene objects, keep the following in mind:
- All objects must have an existing class.
- New objects always get assigned a globally unique `identifier`.`
- `initialState` is optional, but encouraged to be used.
- `initialState` can contain any `key: value` pair for any settable property of the class being instantiated.
- `name` in `initialState` is being used, unless it's not provided - then `dynamicObject` is used.
)

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
create(className: string, initialState?: {[key: string]: any}): Promise<SceneObjectBase>

/**
```
createSync(className: string, initialState?: {[key: string]: any}): SceneObjectBase
```

Create a scene object synchronously.
When creating the scene objects, keep the following in mind:
- New objects always get assigned a globally unique `identifier`.`
- `initialState` is optional, but encouraged to be used.
- `initialState` can contain any `key: value` pair for any settable property of the class being instantiated.
- `name` in `initialState` is being used, unless it's not provided - then `dynamicObject` is used.

If className is not supported, error `UnexpectedClassNameError` will be thrown
If there is an unsupported property in the initial state, error `UnexpectedPropertyError` will be thrown

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
createSync(className: string, initialState?: {[key: string]: any}): SceneObjectBase

/**
```
destroy(sceneObject: string | SceneObjectBase): Promise<void>
```

Destroy a scene object, asynchronously.
When destroying scene objects, keep the following in mind:
 - All bound properties will be automatically unbound on destruction.
 - Destroying a scene object automatically removes it from any parent.
 - Destroying a scene object automatically removes it all children from it.
 - Destroying a scene object that doesn't exist fails the `Promise`.
 - Destroying a scene object that was created in Studio fails the `Promise`.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
destroy(sceneObject: string | SceneObjectBase): Promise<void>

/**
```
destroySync(sceneObject: string | SceneObjectBase): void
```

Destroy a scene object, synchronously.
When destroying scene objects, keep the following in mind:
 - All bound properties will be automatically unbound on destruction.
 - Destroying a scene object automatically removes it from any parent.
 - Destroying a scene object automatically removes it all children from it.
 - Destroying a scene object that was created in Studio returns false in the result.

Destroying a scene object that doesn't exist will throw `SceneObjectNotExistedError` error.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
destroySync(sceneObject: string | SceneObjectBase): void

/**
```
projectToScreen(point: PointSignal): Vec2Signal
```

Returns a signal with the value that corresponds to the 2D point value (in Screen Space) of the given world coordinate.
Screen space positions are represented in the range of `(0, 0)` to `(CameraInfo.previewSize.width, CameraInfo.previewSize.height)`,
with the coordinate start being the top left point of the screen and `previewSize.width/height` being the bottom right.

The values in the returned signal are not capped to the size of the screen space and can lie outside of the visible screen area.

This functionality can be used for precisely positioning 2D screen elements or to add additional effects that apply to the entire camera texture, based on contents of the scene.
*/
projectToScreen(point: PointSignal): Vec2Signal

/**
```
removeChildSync(child: SceneObjectBase | string): void
```

Remove a child from this scene object synchronously.
When removing scene objects, keep the following in mind:
- Removing a child that was created in Studio isn't allowed.
- Removing a child that is not present under a given parent isn't allowed.
- Removing a child doesn't unbind any of it's properties.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
removeChildSync(child: SceneObjectBase | string): void

/**
```
unprojectToFocalPlane(location: Vec2Signal): PointSignal
```

Returns a signal with the value that corresponds to the 3d point (in World Space, in current units) of the given screenSpace point from the Vec2Signal.
The z coordinate of the PointSignal will be calculated so that the 3d point will always be on the canvas (which should be on the Focal Plane).
This function can be combined with TouchGestures to create a 3d point signal.


```
var S = require('Scene')
TouchGestures.onPan().subscribe(function(gesture) {
var signal = S.unprojectToFocalPlane(gesture.location);
});
```
*/
unprojectToFocalPlane(location: Vec2Signal): PointSignal

/**
```
unprojectWithDepth(location: Vec2Signal, depth: number): PointSignal
```

Returns a signal with the value that corresponds to the 3d point value (in World Space, in current units) of the given screenSpace point from the Vec2Signal.
The z coordinate of the PointSignal will always be equal to the given depth value. The depth should be given in current units.
This function can be combined with TouchGestures to create a 3d point signal.
```
var Scene = require('Scene')
var TouchGestures = require('TouchGestures')
TouchGestures.onPan().subscribe(function(gesture) {
var signal = Scene.unprojectWithDepth(gesture.location, 0.5);
});
```
*/
unprojectWithDepth(location: Vec2Signal, depth: number): PointSignal

}



/**

//==============================================================================
// The following example demonstrates how to access named elements from a Scene.
//==============================================================================

// Load in the required module
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the camera in the Scene using the child method
  const [[camera], focalDistance] = await Promise.all([
    // findByPath returns array of results as it supports wildcards
    Scene.root.findByPath('Device/Camera'),
    Scene.root.findFirst('Focal Distance')
  ]);
// Enable async/await in JS [part 2]
})();

*/