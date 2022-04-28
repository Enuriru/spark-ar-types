/// <reference path="../Fonts.FontId/index.d.ts" />

/**
The `FontsModule` class is used for working with custom fonts in effects.
*/
declare interface Fonts extends Module {

/**
```
findFirst(fontName: string): Promise<FontId | null>
```

Returns a promise that is resolved with the font identifier of a requested name or null if none was found.
**See Also**: `FontsModule.findUsingPattern`, `FontsModule.getAll`.
*/
findFirst(fontName: string): Promise<FontId | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<FontId>>
```

Returns a promise that is resolved with the all of the font identifiers matching the name pattern or empty array if none was found.
Pattern format:
`*` matches any characters sequence.
`\` can be used to include in pattern any of the control characters (including '\' itself)

Examples:
`findUsingPattern("*")` will retrive all of the font identifiers.
`findUsingPattern("*A")` will retrieve all of the font identifiers suffixed with 'A'.
`findUsingPattern("A*")` will retrieve all of the font identifiers prefixed with 'A'.
`findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the font identifiers containing 'A',

`limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.

**See Also**: `FontsModule.getAll`, `FontsModule.findFirst`.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<FontId>>

/**
```
get(fontName: string): FontId
```

Returns a font object identified by the `fontName` argument.
Throws an exception if there is no such font in the project.
*/
get(fontName: string): FontId

/**
```
getAll(): Promise<Array<FontId>>
```

Returns a promise that is resolved with all of the font identifiers.
**See Also**: `FontsModule.findUsingPattern`, `FontsModule.findFirst`.
*/
getAll(): Promise<Array<FontId>>

}



/**

//==============================================================================
// The following example demonstrates how to access a font in the Assets and
// assign it to a text object.
//
// Project setup:
// - Insert text
// - Add the Custom Fonts capability
//==============================================================================

// Load in the required modules
const Fonts = require('Fonts');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  const [font, text] = await Promise.all([
    // Locate the font in the Assets and the text in the Scene
    Fonts.findFirst('customFont.ttf'),
    Scene.root.findFirst('text0')
  ]);

  // Set the font of the text
  text.font = font;
// Enable async/await in JS [part 2]
})();

*/