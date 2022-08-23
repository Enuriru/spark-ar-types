/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Scene.CameraVisibility/index.d.ts" />
/// <reference path="../Scene.OutputVisibility/index.d.ts" />
/// <reference path="../Scene.Transform/index.d.ts" />

/**
The base class for scene objects.
*/
declare interface SceneObjectBase {

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
(get) transform: Transform
(set) transform: TransformSignal
```

Represents the object transformation, in object's local coordinate system.
*/
transform: Transform

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

Returns a promise that is resolved with the all occurrences of scene objects matching the path query or empty array if none was found.
Path query format:
`*` matches any characters sequence.
`*` as standalone component matches one level of the scene tree (i.e. any child)
`**` as standalone component matches any level of scene tree (will result in recursive find)
`/` is a path component separator
`\` can be used to include in component name any of the control characters (including '\' itself)

Examples:
`findByPath("*")` will match all the direct children of the caller.
`findByPath("&#42;/A")` will match all grandchildren of the caller named A.
`findByPath("*&#42;/A")` will match all descendants of the caller named A.
`findByPath("A*")` will match all children of the caller which name is prefixed with 'A', like 'ABC'.
`findByPath("*&#42;/*A*")` will match all descendants of the caller which name contains 'A', like 'AX' and 'XA'.
`findByPath("*&#42;/A", {limit: 10})` will match at most first 10 descendants of the caller named A.
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

Returns a promise that is resolved with the first occurrence of scene object with given name or null if none was found.
`recursive` param of `config` controls whenever the find should be performed recursively (`true` by default).

**See Also**: `SceneObjectBase.findAll`, `SceneObjectBase.findByPath`, `SceneModule.root`.
*/
findFirst(name: string, config?: {recursive: boolean}): Promise<SceneObjectBase | null>

/**
```
getParent(): Promise<SceneObjectBase | null>
```

Returns a promise that is resolved with scene object's parent, or `null` if it doesn't have one.
```
const childObject = await Scene.root.findFirst("myObject");
const parentObject = await childObject.getParent();
```
To find a parent object's children instead use `SceneObjectBase.findByPath("*");`.
*/
getParent(): Promise<SceneObjectBase | null>

}



/**

//============================================================================
// Finds a scene object by name and then finds its parent object. Then, finds
// the parent object's children.
//
// Project setup:
// - Insert a Plane, a 3D Text object and a Null Object to the scene
// - Drag the plane and 3D text objects into the null object
//============================================================================

const Scene = require('Scene');
const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]

  // Locate the plane in the scene and log its identifier to the console
  const plane = await Scene.root.findFirst('plane0');
  Diagnostics.log(`Plane object identifier: ${plane.identifier}`);

  // Get the plane object's parent and log its identifier to the console
  const parent = await plane.getParent();
  Diagnostics.log(`Parent object identifier: ${parent.identifier}`);

  // Get the parent object's children  and log their names to the console
  const children = await parent.findByPath('*');

  for(var i = 0; i < children.length; i++){
    Diagnostics.log(`Child ${i} name: ${children[i].name}`);
  }

})(); // Enable async/await in JS [part 2]

*/