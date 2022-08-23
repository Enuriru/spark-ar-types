
/**
The `FontsId` class identifies a font in an effect.
*/
declare interface FontId {

/**
```
(get) name: string
(set) (Not Available)
```

Specifies the font name. It should be unique.
**See Also**: `FontsModule.get`.
*/
name: string

}



/**

//==============================================================================
// The following example demonstrates how to access the name of a FontId.
//
// Project setup:
// - Import one or more custom fonts into assets
//==============================================================================

// Load in the required modules
const Fonts = require('Fonts');
const Diagnostics = require('Diagnostics');

// Enable async/await in JS [part 1]
(async function() {
  const fonts = await Fonts.getAll()
  for (const fontId of fonts) {
    // print the name of each available font
    Diagnostics.log(fontId.name)
  }
// Enable async/await in JS [part 2]
})();

*/