/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Scene.CameraVisibility/index.d.ts" />
/// <reference path="../Scene.OutputVisibility/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Svgs.Svg/index.d.ts" />
/// <reference path="../Scene.Transform/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
declare interface SvgImage {
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
(get) bounds: Box2DSignal
(set) (Not Available)
```

Represents the current 2D bounds relative to the parent element. This is the result of the layout calculation. Values are measured in 3D units.
**Note**: The `SceneObjectBase.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
*/
bounds: Box2DSignal;
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
(get) (Not Available)
(set) horizontalAlignment: SceneModule.HorizontalAlignment
```

Specifies the horizontal alignment.
*/
horizontalAlignment: HorizontalAlignment;
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
(get) (Not Available)
(set) marginBottom: number
```

Specifies the size of the bottom margin.
**Note**: it behaves in a similar way to the `margin-bottom` CSS property.
*/
marginBottom: number;
/**
* ```
(get) (Not Available)
(set) marginEnd: number
```

Specifies the size of the right margin.
**Note**: it behaves in a similar way to the `margin-right` CSS property.
*/
marginEnd: number;
/**
* ```
(get) (Not Available)
(set) marginStart: number
```

Specifies the size of the left margin.
**Note**: it behaves in a similar way to the `margin-left` CSS property.
*/
marginStart: number;
/**
* ```
(get) (Not Available)
(set) marginTop: number
```

Specifies the size of the top margin.
**Note**: it behaves in a similar way to the `margin-top` CSS property.
*/
marginTop: number;
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
(get) ref_: SceneObjectRef
(set) ref_: SceneObjectRef
```
*/
ref_: SceneObjectRef;
/**
* ```
(get) (Not Available)
(set) scalingOption: SceneModule.ScalingOption
```

Specifies the size adjustment relative to parent.
*/
scalingOption: ScalingOption;
/**
* ```
(get) (Not Available)
(set) svg: Svg
```

Sets the given svg from the svg registry to the svg image scene object.
*/
svg: Svg;
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
(get) (Not Available)
(set) verticalAlignment: SceneModule.VerticalAlignment
```

Specifies the vertical alignment.
*/
verticalAlignment: VerticalAlignment;
/**
*  
 * _modelRef(): ModelRef
 *  
 * 
 */
_modelRef(): ModelRef;

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
 * getSvg(): Promise<Svg | null>
 *  
 * 
 * Retrieves a previously set Svg to a given svg image scene object.
 */
getSvg(): Promise<Svg | null>;

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
