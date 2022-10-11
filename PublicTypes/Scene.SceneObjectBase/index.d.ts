/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box3DSignal/index.d.ts" />
/// <reference path="../Scene.CameraVisibility/index.d.ts" />
/// <reference path="../Scene.OutputVisibility/index.d.ts" />
/// <reference path="../Scene.Transform/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Scene.WorldTransform/index.d.ts" />
declare interface SceneObjectBase {
/**
* ```
(get) boundingBox: Box3DSignal
(set) (Not Available)
```

Returns a signal that contains a 3D Bounding Box
of this object in it's local coordinate system.
Note: This bounding box doesn't include object's children.
*/
boundingBox: Box3DSignal;
/**
* ```
(get) boundingBoxVisible: BoolSignal
(set) (Not Available)
```

Represents whether or not the bounding box for the object is visible.
*/
boundingBoxVisible: BoolSignal;
/**
* ```
(get) cameraVisibility: CameraVisibility
(set) (Not Available)
```

Represents the `CameraVisibility` that contains a set of flags that specify the scene object (and its descendants) visibility depending on the active camera.
*/
cameraVisibility: CameraVisibility;
/**
* ```
(get) hidden: BoolSignal
(set) hidden: BoolSignal
```

Specifies whether the scene object and its descendants are hidden.
*/
hidden: BoolSignal;
/**
* ```
(get) identifier: string
(set) (Not Available)
```

Specifies the scene object unique identifier. This value is specified internally in AR Studio.
*/
identifier: string;
/**
* ```
(get) name: string
(set) (Not Available)
```

Specifies the scene object name. This is the unique identifier of the object within the list of its siblings (immediate child objects of the same parent object).
**Note**: the object name is specified in AR Studio UI during design time.
**Note**: the object name must only be unique withing the list of direct siblings. There can be more than object with the same name in the scene as soon as they have different parents.
**See Also**: `SceneObjectBase.child`, `SceneObjectBase.find`, `SceneModule.root`.
*/
name: string;
/**
* ```
(get) outputVisibility: OutputVisibility
(set) (Not Available)
```

Represents the `OutputVisibility` that contains a set of flags that specify the scene object (and its descendants) visibility depending on the output.
*/
outputVisibility: OutputVisibility;
/**
* ```
(get) parentWorldTransform: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` object describing the parent's transformation relative to world coordinate system.
*/
parentWorldTransform: TransformSignal;
/**
* ```
(get) transform: Transform
(set) transform: TransformSignal
```

Represents the object transformation, in object's local coordinate system.
*/
transform: Transform;
/**
* ```
(get) worldTransform: WorldTransform
(set) worldTransform: TransformSignal
```

Specifies a `TransformSignal` object describing the object's transformation relative to world coordinate system.
World transform in not yet supported for Canvas and ScreenPlane. Accessing this property from such objects or any of their children is not allowed.
*/
worldTransform: WorldTransform;
/**
*  
 * addChild(child: SceneObjectBase | string): Promise<void>
 *  
 * 
 * Add a child to this scene object.
 * Please note the following specific behavior when using this API:
 * - Adding an object as a child automatically removes it from any other parent.
 * - Adding a child that was created in Studio is not allowed.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
addChild(child: SceneObjectBase | string): Promise<void>;

/**
*  
 * addTag(tag: string): Promise<void>
 *  
 * 
 * Add tag to a scene object.
 * Returns a promise.
 *  
 * const object = await Scene.root.findFirst("myObject");
 * Diagnostics.log(await object.getTags()); // => ["Tag1"]
 * await object.addTag("Tag2");
 * Diagnostics.log(await object.getTags()); // => ["Tag1", "Tag2"]
 *  
 */
addTag(tag: string): Promise<void>;

/**
*  
 * findAll(name: string, config?: {recursive: boolean}): Promise<Array<SceneObjectBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the scene objects with given name or empty array if none was found.
 * `recursive` param of `config` controls whenever the find should be performed recursively (`true` by default).
 * Empty array is returned in no objects are found.
 * 
 * **See Also**: `SceneObjectBase.findFirst`, `SceneObjectBase.findByPath`, `SceneModule.root`.
 */
findAll(name: string, config?: {recursive: boolean}): Promise<Array<SceneObjectBase>>;

/**
*  
 * findByAllTags(tags: Array<string>, config?: {limit: number, recursive?: false | true}): Promise<Array<SceneObjectBase>>
 *  
 * 
 * Returns a promise that is resolved with all occurances of scene objects with given tags or empty array if none was found.
 * `limit` parameter describes if `findByAllTags` should finish the search if it finds specified number of objects (default is no limit). Non-positive values for limit are treated as unlimited.
 * `recursive` parameter, if true (default) `findByAllTags` search for object through all children. If false, `findByAllTags` checks direct children only.
 */
findByAllTags(tags: Array<string>, config?: {limit: number, recursive?: false | true}): Promise<Array<SceneObjectBase>>;

/**
*  
 * findByAnyTags(tags: Array<string>, config?: {limit: number, recursive?: false | true}): Promise<Array<SceneObjectBase>>
 *  
 * 
 * Returns a promise that is resolved with all occurances of scene objects that contains any of given tags or empty array if none was found.
 * `limit` parameter describes if `findByAnyTags` should finish the search if it finds specified number of objects (default is no limit). Non-positive values for limit are treated as unlimited.
 * `recursive` parameter, if true (default) `findByAnyTags` search for object through all children. If false, `findByAnyTags` checks direct children only.
 */
findByAnyTags(tags: Array<string>, config?: {limit: number, recursive?: false | true}): Promise<Array<SceneObjectBase>>;

/**
*  
 * findByPath(pathQuery: string, config?: {limit: number}): Promise<Array<SceneObjectBase>>
 *  
 * 
 * Returns a promise that is resolved with the all occurrences of scene objects matching the path query or empty array if none was found.
 * Path query format:
 * `*` matches any characters sequence.
 * `*` as standalone component matches one level of the scene tree (i.e. any child)
 * `**` as standalone component matches any level of scene tree (will result in recursive find)
 * `/` is a path component separator
 * `\` can be used to include in component name any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findByPath("*")` will match all the direct children of the caller.
 * `findByPath("* /A")` will match all grandchildren of the caller named A.
 * `findByPath("** /A")` will match all descendants of the caller named A.
 * `findByPath("A*")` will match all children of the caller which name is prefixed with 'A', like 'ABC'.
 * `findByPath("** /*A*")` will match all descendants of the caller which name contains 'A', like 'AX' and 'XA'.
 * `findByPath("** /A", {limit: 10})` will match at most first 10 descendants of the caller named A.
 * `findByPath("\\*")` will match all children of the caller named *.
 * `findByPath("\\\\")` will match all children of the caller named \.
 * 
 * `limit` parameter describes if `findByPath` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **Note**: object D is considered to be a descendant of object P if either D is a child of P or if such an object C which is a child of P exists that D is a descendant of C.
 * 
 * **See Also**: `SceneObjectBase.findAll`, `SceneObjectBase.findFirst`, `SceneModule.root`.
 */
findByPath(pathQuery: string, config?: {limit: number}): Promise<Array<SceneObjectBase>>;

/**
*  
 * findByTag(tag: string, config?: {limit?: number, recursive?: false | true}): Promise<Array<SceneObjectBase>>
 *  
 * 
 * Returns a promise that is resolved with all occurances of scene objects
 * with given tag or empty array if none was found.
 * `limit` parameter describes if `findByTag` should finish the search
 *    if it finds specified number of objects (default is no limit).
 *    Non-positive values for limit are treated as unlimited.
 * `recursive` parameter, if true (default) `findByTag` search for object through all children.
 *    If false, `findByTag` checks direct children only.
 */
findByTag(tag: string, config?: {limit?: number, recursive?: false | true}): Promise<Array<SceneObjectBase>>;

/**
*  
 * findFirst(name: string, config?: {recursive: boolean}): Promise<SceneObjectBase | null>
 *  
 * 
 * Returns a promise that is resolved with the first occurrence of scene object with given name or null if none was found.
 * `recursive` param of `config` controls whenever the find should be performed recursively (`true` by default).
 * 
 * **See Also**: `SceneObjectBase.findAll`, `SceneObjectBase.findByPath`, `SceneModule.root`.
 */
findFirst(name: string, config?: {recursive: boolean}): Promise<SceneObjectBase | null>;

/**
*  
 * getBoundingBox(options?: {includeChildren?: false | true, skipHidden?: false | true}): Box3DSignal
 *  
 * 
 * Returns a signal that contains a 3D Bounding Box of this object.
 * Optional parameters include:
 *  - `includeChildren`: whether to include all children of this object when computing box.
 *                       If `true` - the resulting bounding box is in the parent coordinate system.
 *                       If `false` or not provided - resulting bounding box is in the local object's coordinate system.
 *                       Default: `false`.
 *  - `skipHidden`: whether to skip "hidden" objects or children (in case of `includeChidlren` set to `true`) when computing bounding box.
 *                  If `true` - the resulting bounding box will not include a given object or a children of it that are parented under an Object that is `hidden`.
 *                  If `false` - resulting bounding box includes children, regardless whether they are visible or not.
 *                  Default: `false`.
 */
getBoundingBox(options?: {includeChildren?: false | true, skipHidden?: false | true}): Box3DSignal;

/**
*  
 * getBoundingBoxVisible(options?: {includeChildren?: false | true, skipIfHidden?: false | true}): BoolSignal
 *  
 * 
 * Returns a signal that contains value representing
 * whether bounding box of a given object is visible or not in the viewport.
 * Optional parameters include:
 *  - `includeChildren`: whether to include all children of this object when computing bounding box.
 *                       Default: `false`.
 *  - `skipHidden`: whether to skip "hidden" objects or children (in case of `includeChidlren` set to `true`) when computing bounding box.
 *                  If `true` - the resulting bounding box will not include a given object or a children of it that are parented under an Object that is `hidden`.
 *                  If `false` - resulting bounding box includes children, regardless whether they are visible or not.
 *                  Default: `false`.
 */
getBoundingBoxVisible(options?: {includeChildren?: false | true, skipIfHidden?: false | true}): BoolSignal;

/**
*  
 * getParent(): Promise<SceneObjectBase | null>
 *  
 * 
 * Returns a promise that is resolved with scene object's parent, or `null` if it doesn't have one.
 *  
 * const childObject = await Scene.root.findFirst("myObject");
 * const parentObject = await childObject.getParent();
 *  
 * To find a parent object's children instead use `SceneObjectBase.findByPath("*");`.
 */
getParent(): Promise<SceneObjectBase | null>;

/**
*  
 * getTags(): Promise<Array<string>>
 *  
 * 
 * Returns a promise that is resolved with all tags of scene objects.
 *  
 * const object = await Scene.root.findFirst("myObject");
 * const tags = await object.getTags();
 * Diagnostics.log(tags); // => ["ExampleTag1", "ExampleTag2"]
 *  
 */
getTags(): Promise<Array<string>>;

/**
*  
 * removeChild(child: SceneObjectBase | string): Promise<void>
 *  
 * 
 * Remove a child from this scene object list of children.
 * When removing scene objects, keep the following in mind:
 * - Removing a child that was created in Studio isn't allowed.
 * - Removing a child that is not present under a given parent isn't allowed.
 * - Removing a child doesn't unbind any of it's properties.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
removeChild(child: SceneObjectBase | string): Promise<void>;

/**
*  
 * removeFromParent(): Promise<void>
 *  
 * 
 * Remove this child from any parent object.
 * When removing scene objects, keep the following in mind:
 * - Removing a child that was created in Studio isn't allowed.
 * - Removing a child that is not present under a given parent isn't allowed.
 * - Removing a child doesn't unbind any of it's properties.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
removeFromParent(): Promise<void>;

/**
*  
 * removeTag(tag: string): Promise<void>
 *  
 * 
 * Remove tag from a scene object.
 * Returns a promise.
 *  
 * const object = await Scene.root.findFirst("myObject");
 * Diagnostics.log(await object.getTags()); // => ["Tag1", "Tag2"]
 * await object.remove("Tag1");
 * Diagnostics.log(await object.getTags()); // => ["Tag2"]
 *  
 */
removeTag(tag: string): Promise<void>;

/**
*  
 * setTags(tags: Array<string>): Promise<void>
 *  
 * 
 * Replaces tags of a scene object with tags provided in the argument.
 * Returns a promise.
 */
setTags(tags: Array<string>): Promise<void>;

}
