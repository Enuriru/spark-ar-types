/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box3DSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Scene.CameraVisibility/index.d.ts" />
/// <reference path="../Scene.OutputVisibility/index.d.ts" />
/// <reference path="../Scene.Transform/index.d.ts" />
/// <reference path="../Scene.WorldTransform/index.d.ts" />

declare interface SceneObjectBase {

/**
```
(get) boundingBox: Box3DSignal
(set) (Not Available)
```

Returns a signal that contains a 3D Bounding Box
of this object in it's local coordinate system.
Note: This bounding box doesn't include object's children.
*/
boundingBox: Box3DSignal

/**
```
(get) boundingBoxVisible: BoolSignal
(set) (Not Available)
```

Represents whether or not the bounding box for the object is visible.
*/
boundingBoxVisible: BoolSignal

/**
```
(get) cameraVisibility: CameraVisibility
(set) (Not Available)
```

Represents the `CameraVisibility` that contains a set of flags that specify the scene object (and its descendants) visibility depending on the active camera.
*/
cameraVisibility: CameraVisibility

/**
```
(get) hidden: BoolSignal
(set) hidden: BoolSignal
```

Specifies whether the scene object and its descendants are hidden.
*/
hidden: BoolSignal

/**
```
(get) identifier: string
(set) (Not Available)
```

Specifies the scene object unique identifier. This value is specified internally in AR Studio.
*/
identifier: string

/**
```
(get) name: string
(set) (Not Available)
```

Specifies the scene object name. This is the unique identifier of the object within the list of its siblings (immediate child objects of the same parent object).
**Note**: the object name is specified in AR Studio UI during design time.
**Note**: the object name must only be unique withing the list of direct siblings. There can be more than object with the same name in the scene as soon as they have different parents.
**See Also**: `SceneObjectBase.child`, `SceneObjectBase.find`, `SceneModule.root`.
*/
name: string

/**
```
(get) outputVisibility: OutputVisibility
(set) (Not Available)
```

Represents the `OutputVisibility` that contains a set of flags that specify the scene object (and its descendants) visibility depending on the output.
*/
outputVisibility: OutputVisibility

/**
```
(get) parentWorldTransform: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` object describing the parent's transformation relative to world coordinate system.
*/
parentWorldTransform: TransformSignal

/**
```
(get) transform: Transform
(set) transform: TransformSignal
```

Represents the object transformation, in object's local coordinate system.
*/
transform: Transform

/**
```
(get) worldTransform: WorldTransform
(set) worldTransform: TransformSignal
```

Specifies a `TransformSignal` object describing the object's transformation relative to world coordinate system.
World transform in not yet supported for Canvas and Legacy canvas. Accessing this property from such objects or any of their children is not allowed.
*/
worldTransform: WorldTransform

/**
```
addChild(child: SceneObjectBase | string): Promise<void>
```

Add a child to this scene object.
Please note the following specific behavior when using this API:
- Adding an object as a child automatically removes it from any other parent.
- Adding a child that was created in Studio is not allowed.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
addChild(child: SceneObjectBase | string): Promise<void>

/**
```
findAll(name: string, config?: {recursive: boolean}): Promise<Array<SceneObjectBase>>
```

Returns a promise that is resolved with the all of the scene objects with given name or empty array if none was found.
`recursive` param of `config` controls whenever the find should be performed recursively (`true` by default).
Empty array is returned in no objects are found.

**See Also**: `SceneObjectBase.findFirst`, `SceneObjectBase.findByPath`, `SceneModule.root`.
*/
findAll(name: string, config?: {recursive: boolean}): Promise<Array<SceneObjectBase>>

/**
```
findByPath(pathQuery: string, config?: {limit: number}): Promise<Array<SceneObjectBase>>
```

Returns a promise that is resolved with the all occurances of scene objects matching the path query or empty array if none was found.
Path query format:
`*` matches any characters sequence.
`*` as standalone component matches one level of the scene tree (i.e. any child)
`**` as standalone component matches any level of scene tree (will result in recursive find)
`/` is a path component separator
`\` can be used to include in component name any of the control characters (including '\' itself)

Examples:
`findByPath("*")` will match all the direct children of the caller.
`findByPath("* /A")` will match all grandchildren of the caller named A.
`findByPath("** /A")` will match all descendants of the caller named A.
`findByPath("A*")` will match all children of the caller which name is prefixed with 'A', like 'ABC'.
`findByPath("** /*A*")` will match all descendants of the caller which name contains 'A', like 'AX' and 'XA'.
`findByPath("** /A", {limit: 10})` will match at most first 10 descendants of the caller named A.
`findByPath("\\*")` will match all children of the caller named *.
`findByPath("\\\\")` will match all children of the caller named \.

`limit` parameter describes if `findByPath` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.

**Note**: object D is considered to be a descendant of object P if either D is a child of P or if such an object C which is a child of P exists that D is a descendant of C.

**See Also**: `SceneObjectBase.findAll`, `SceneObjectBase.findFirst`, `SceneModule.root`.
*/
findByPath(pathQuery: string, config?: {limit: number}): Promise<Array<SceneObjectBase>>

/**
```
findFirst(name: string, config?: {recursive: boolean}): Promise<SceneObjectBase | null>
```

Returns a promise that is resolved with the first occurance of scene object with given name or null if none was found.
`recursive` param of `config` controls whenever the find should be performed recursively (`true` by default).

**See Also**: `SceneObjectBase.findAll`, `SceneObjectBase.findByPath`, `SceneModule.root`.
*/
findFirst(name: string, config?: {recursive: boolean}): Promise<SceneObjectBase | null>

/**
```
getBoundingBox(options?: {includeChildren: boolean}): Box3DSignal
```

Returns a signal that contains a 3D Bounding Box of this object.
Optional parameters include:
 - `includeChildren`: whether to include all children of this object when computing box.
                      If "true" - the resulting bounding box is in the parent coordinate system.
                      If "false" or not provided - resulting bounding box is in the local object's coordinate system.
                      Default: "false".
*/
getBoundingBox(options?: {includeChildren: boolean}): Box3DSignal

/**
```
getBoundingBoxVisible(options?: {includeChildren: boolean}): BoolSignal
```

Returns a signal that contains value representing
whether bounding box of a given object is visible or not in the viewport.
Optional parameters include:
 - `includeChildren`: whether to include all children of this object when computing bounding box.
                      Default: "false".
*/
getBoundingBoxVisible(options?: {includeChildren: boolean}): BoolSignal

/**
```
removeChild(child: SceneObjectBase | string): Promise<void>
```

Remove a child from this scene object list of children.
When removing scene objects, keep the following in mind:
- Removing a child that was created in Studio isn't allowed.
- Removing a child that is not present under a given parent isn't allowed.
- Removing a child doesn't unbind any of it's properties.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
removeChild(child: SceneObjectBase | string): Promise<void>

/**
```
removeFromParent(): Promise<void>
```

Remove this child from any parent object.
When removing scene objects, keep the following in mind:
- Removing a child that was created in Studio isn't allowed.
- Removing a child that is not present under a given parent isn't allowed.
- Removing a child doesn't unbind any of it's properties.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
removeFromParent(): Promise<void>

}
