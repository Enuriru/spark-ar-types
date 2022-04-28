/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `TexturesModule` class enables images, animation sequences, videos, colors, and other visual artifacts to be combined to form materials.
*/
declare interface Textures extends Module {

/**
```
findFirst(textureName: string): Promise<TextureBase | null>
```

Returns a promise that is resolved with the texture of a requested name or null if none was found.
**See Also**: `Textures.findUsingPattern`, `Textures.getAll`.
*/
findFirst(textureName: string): Promise<TextureBase | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<TextureBase>>
```

Returns a promise that is resolved with the all of the textures matching the name pattern or empty array if none was found.
Pattern format:
`*` matches any characters sequence.
`\` can be used to include in pattern any of the control characters (including '\' itself)

Examples:
`findUsingPattern("*")` will retrive all of the textures.
`findUsingPattern("*A")` will retrieve all of the textures suffixed with 'A'.
`findUsingPattern("A*")` will retrieve all of the textures prefixed with 'A'.
`findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the textures containing 'A',

`limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.

**See Also**: `Textures.getAll`, `Textures.findFirst`.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<TextureBase>>

/**
```
getAll(): Promise<Array<TextureBase>>
```

Returns a promise that is resolved with all of the textures.
**See Also**: `Textures.findUsingPattern`, `Textures.findFirst`.
*/
getAll(): Promise<Array<TextureBase>>

}



/**

//==============================================================================
// The following example demonstrates how to access a texture in the Assets and
// assign it to a material.
//
// Project setup:
// - Insert a plane
// - Create a material
// - Import an image to use as a texture (renaming it texture0)
// - Assign the material to the plane
//==============================================================================

// Load in the required modules
const Materials = require('Materials');
const Textures = require('Textures');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the material and texture in the Assets
  const [material, texture] = await Promise.all([
    Materials.findFirst('defaultMaterial0'),
    Textures.findFirst('texture0')
  ]);

  // Assign the texture to the material
  material.diffuse = texture;
// Enable async/await in JS [part 2]
})();

*/