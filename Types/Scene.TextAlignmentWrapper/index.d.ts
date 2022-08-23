/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.TextAlignment/index.d.ts" />
/// <reference path="../Scene.VerticalTextAlignment/index.d.ts" />

/**
The `TextAlignmentWrapper` class contains text alignment details.
*/
declare interface TextAlignmentWrapper {

/**
```
(get) horizontal: StringSignal<TextAlignment>
(set) horizontal: StringSignal<TextAlignment>
```

Specifies the horizontal text alignment.
*/
horizontal: StringSignal<TextAlignment>

/**
```
(get) vertical: StringSignal<VerticalTextAlignment>
(set) vertical: StringSignal<VerticalTextAlignment>
```

Specifies the vertical text alignment.
*/
vertical: StringSignal<VerticalTextAlignment>

}



/**

//==============================================================================
// The following example demonstrates how to set text alignment.
//
// Project setup:
// - Insert a 2D Text
//==============================================================================

// Load in the required modules
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the scene element that contains the 3D mesh
  const [text] = await Promise.all([
    Scene.root.findFirst('2dText0')
  ]);

  // Set the text alignment
  text.alignment.horizontal = Scene.TextAlignment.LEFT
  text.alignment.vertical = Scene.VerticalTextAlignment.TOP
// Enable async/await in JS [part 2]
})();

*/