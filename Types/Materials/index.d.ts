/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Materials.ShaderProcessor/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `Materials` module provides access to the materials in an effect.
*/
declare interface Materials extends Module {

/**
```
(get) postProcessor: ShaderProcessor
(set) (Not Available)
```

Specifies the `ShaderProcessor` object used for the post-rendering pass.
*/
postProcessor: ShaderProcessor

/**
```
(get) preProcessor: ShaderProcessor
(set) (Not Available)
```

Specifies the `ShaderProcessor` object used for the pre-rendering pass.
*/
preProcessor: ShaderProcessor

/**
```
clone(material: string | MaterialBase, initialState?: {[key: string]: any}): Promise<MaterialBase>
```

Clone a material asynchronously.
When creating the materials, keep the following in mind:
- Cloning a material with an identifier that doesn't exist fails the `Promise`.
- New materials always get assigned a globally unique `name` and `identifier`.
- `initialState` is optional, but encouraged to be used.
- All properties that are using Signal types get assigned a ConstSignal with last value. Use initialState to override it.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
clone(material: string | MaterialBase, initialState?: {[key: string]: any}): Promise<MaterialBase>

/**
```
cloneSync(material: string | MaterialBase, initialState?: {[key: string]: any}): MaterialBase
```

Clone a material synchronously.
When creating the materials, keep the following in mind:
- Cloning a material with an identifier that doesn't exist fails the `Promise`.
- New materials always get assigned a globally unique `name` and `identifier`.
- `initialState` is optional, but encouraged to be used.
- All properties that are using Signal types get assigned a ConstSignal with last value. Use initialState to override it.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
cloneSync(material: string | MaterialBase, initialState?: {[key: string]: any}): MaterialBase

/**
```
create(className: string, initialState?: {[key: string]: any}): Promise<MaterialBase>
```

Create a material asynchronously.
When creating the materials, keep the following in mind:
- All materials must have an existing class.
- New materials always get assigned a globally unique `name` and `identifier`.
- `initialState` is optional, but encouraged to be used.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
create(className: string, initialState?: {[key: string]: any}): Promise<MaterialBase>

/**
```
createSync(className: string, initialState?: {[key: string]: any}): MaterialBase
```

Create a material synchronously.
When creating the materials, keep the following in mind:
- All materials must have an existing class.
- New materials always get assigned a globally unique `name` and `identifier`.
- `initialState` is optional, but encouraged to be used.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
createSync(className: string, initialState?: {[key: string]: any}): MaterialBase

/**
```
destroy(material: string | MaterialBase): Promise<void>
```

Destroy a material asynchronously.
When destroying the materials, keep the following in mind:
- All bound properties will be automatically unbound on destruction.
- Destroying a material that doesn't exist fails the `Future`.
- Destroying a set of Materials that was created in Studio fails the `Future`.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
destroy(material: string | MaterialBase): Promise<void>

/**
```
destroySync(material: string | MaterialBase): void
```

Destroy a material synchronously.
When destroying the materials, keep the following in mind:
- All bound properties will be automatically unbound on destruction.
- Destroying a material that doesn't exist fails the `Future`.
- Destroying a set of Materials that was created in Studio fails the `Future`.

Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
*/
destroySync(material: string | MaterialBase): void

/**
```
findFirst(name: string): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material of a requested name or null if none was found.
**See Also**: `Materials.findUsingPattern`, `Materials.getAll`.
*/
findFirst(name: string): Promise<MaterialBase | null>

/**
```
findFirstSync(name: string): MaterialBase | null
```

Returns the material of a requested name or null if none was found.
**See Also**: `Materials.findUsingPatternSync`, `Materials.getAllSync`.
*/
findFirstSync(name: string): MaterialBase | null

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<MaterialBase>>
```

Returns a promise that is resolved with the all of the materials matching the name pattern or empty array if none was found.
Pattern format:
`*` matches any characters sequence.
`\` can be used to include in pattern any of the control characters (including '\' itself)

Examples:
`findUsingPattern("*")` will retrive all of the materials.
`findUsingPattern("*A")` will retrieve all of the materials suffixed with 'A'.
`findUsingPattern("A*")` will retrieve all of the materials prefixed with 'A'.
`findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the materials containing 'A',

`limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.

**See Also**: `Materials.getAll`, `Materials.findFirst`.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<MaterialBase>>

/**
```
findUsingPatternSync(namePattern: string, config?: {limit: number}): Array<MaterialBase>
```

Returns all materials matching the name pattern or empty array if none was found.
Pattern format:
`*` matches any characters sequence.
`\` can be used to include in pattern any of the control characters (including '\' itself)

Examples:
`findUsingPatternSync("*")` will retrive all of the materials.
`findUsingPatternSync("*A")` will retrieve all of the materials suffixed with 'A'.
`findUsingPatternSync("A*")` will retrieve all of the materials prefixed with 'A'.
`findUsingPatternSync("*A*", {limit: 10})` will retrieve at most 10 of the materials containing 'A',

`limit` parameter describes if `findUsingPatternSync` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.

**See Also**: `Materials.getAllSync`, `Materials.findFirstSync`.
*/
findUsingPatternSync(namePattern: string, config?: {limit: number}): Array<MaterialBase>

/**
```
getAll(): Promise<Array<MaterialBase>>
```

Returns a promise that is resolved with all of the materials.
**See Also**: `Materials.findUsingPattern`, `Materials.findFirst`.
*/
getAll(): Promise<Array<MaterialBase>>

/**
```
getAllSync(): Array<MaterialBase>
```

Returns all materials.
**See Also**: `Materials.findUsingPatternSync`, `Materials.findFirstSync`.
*/
getAllSync(): Array<MaterialBase>

}



/**

//==============================================================================
// The following example demonstrates how to access a material in the Assets,
// assign it to an object, and change it's opacity.
//
// Project setup:
// - Insert a plane
// - Create a material
//==============================================================================

// Load in the required modules
const Materials = require('Materials');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  const [plane, material] = await Promise.all([
    // Locate the plane in the Scene
    Scene.root.findFirst('plane0'),
    // Locate the plane in the Scene
    Materials.findFirst('defaultMaterial0')
  ]);

  // Assign the material to the plane
  plane.material = material;

  // Set the opacity of the material to 50%
  material.opacity = 0.5;
// Enable async/await in JS [part 2]
})();

*/