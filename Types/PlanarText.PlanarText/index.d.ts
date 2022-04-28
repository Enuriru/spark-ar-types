/// <reference path="../Fonts.FontId/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../PlanarText.TextAlignmentWrapper/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />

/**
The `PlanarText` class describes text on a plane.
*/
declare interface PlanarText extends PlanarObject {

/**
```
(get) alignment: TextAlignmentWrapper
(set) (Not Available)
```

Represents the `TextAlignmentWrapper` that contains parameters that specify the text alignment.
*/
alignment: TextAlignmentWrapper

/**
```
(get) (Not Available)
(set) font: FontId | null
```

Sets the given font from the fonts registry.
*/
font: FontId | null

/**
```
(get) (Not Available)
(set) fontSize: number
```

Specifies the font size of the text.
*/
fontSize: number

/**
```
(get) (Not Available)
(set) leading: number | null
```

Specifies the line spacing. This is the distance between the baselines in the text. If unspecified, spacing defaults to the font size.
*/
leading: number | null

/**
```
(get) (Not Available)
(set) material: MaterialBase | null
```

Specifies the material of the scene object.
*/
material: MaterialBase | null

/**
```
(get) (Not Available)
(set) maxLines: number | null
```

Specifies the maximum number of lines for the text. If unspecified (or zero), the number of lines is unrestricted.
*/
maxLines: number | null

/**
```
(get) (Not Available)
(set) scaleToFit: boolean
```

Specifies if the text is scaled to fit the container.
*/
scaleToFit: boolean

/**
```
(get) text: StringSignal
(set) text: StringSignal
```

Specifies the text displayed.
*/
text: StringSignal

/**
```
(get) (Not Available)
(set) tracking: number
```

Specifies the text spacing. This is the additional distance between letters. Default is zero. Can be negative.
*/
tracking: number

/**
```
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

}



/**

//==============================================================================
// The following example demonstrates how to modify various properties of
// the 2D text (Planar Text)
//
// Project setup:
// - Insert a 2D Text Scene Object inside a Canvas under Focal Distance
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Materials = require('Materials');
const Reactive = require('Reactive');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the scene element that contains the 2D Text (planar text)
  const text2D = await Scene.root.findFirst('2dText0');
  // Edit text
  text2D.text = "Hello World";
  // Set the font size
  text2D.fontSize = 36;
  // Specifies if the text is scaled to fit the container
  text2D.scaleToFit = false;
  // Set the max lines,
  text2D.maxLines = 2;
  // Set text spacing - additional distance between letters
  text2D.tracking = -1
  // Set line spacing - between baselines in the text
  text2D.leading = 0;
  // Set the text alignment
  text2D.alignment.horizontal = Scene.TextAlignment.LEFT;
  text2D.alignment.vertical = Scene.VerticalTextAlignment.TOP;
  // Create a default material with red diffuse color
  const defaultMaterial = await Materials.create("DefaultMaterial", {
    "name": "Default Material",
    "blendMode": "ALPHA",
    "opacity": 1.0,
    "diffuseColorFactor": Reactive.RGBA(1,0,0,1),
  });
  // Set the above created material to the text
  text2D.material = defaultMaterial;

})(); // Enable async/await in JS [part 2]

*/