/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Textures.ImageTexture/index.d.ts" />


/**
[{"kind":"capability","capability":"nativeUIControlPicker","orCapability":""}]
*/


/**
Describes an object which controls the behavior of the `NativeUI`'s picker.
Requires the *Native UI Control > Picker* capability within the project's *Properties* to be enabled.
*/
declare interface Picker {

/**
```
(get) selectedIndex: ScalarSignal
(set) selectedIndex: ScalarSignal
```

The index of the item currently selected in the picker.
*/
selectedIndex: ScalarSignal

/**
```
(get) (Not Available)
(set) visible: BoolSignal | boolean
```

The visibility of the picker object, set via a boolean value.
*/
visible: BoolSignal | boolean

/**
```
configure(config: {items: Array<{id?: string, image_texture: ImageTexture | string, title?: string, tooltip?: string}>, selectedIndex?: number}): Promise<void>
```

Configures the parameters of the picker with the JSON configuration specified.
* `config` -  The configuration to configure the picker object with.
The `config` JSON object can have the following fields:
*  `selectedIndex` - an optional index of `items` to display as the initial item in the picker. Defaults to `0` if no value is specified.
*  `items` - an array of uncompressed textures to display in the picker.
*/
configure(config: {items: Array<{id?: string, image_texture: ImageTexture | string, title?: string, tooltip?: string}>, selectedIndex?: number}): Promise<void>

}



/**

//============================================================================
// Update a material's diffuse texture with the item selected in the
// NativeUI picker
//
// Project setup:
// - One material: material0
// - Three textures: texture0, texture1, texture2
// - One plane with material0 set as its material
//
// Required project capabilities:
// - NativeUI > Picker
//
//============================================================================


// Load in the required modules
const NativeUI = require('NativeUI');
const Materials = require('Materials');
const Textures = require('Textures');


(async function () {  // Enables async/await in JS [part 1]

    // Create a reference to the NativeUI's picker object
    const picker = NativeUI.picker;

    // Locate the material and textures in the project
    const [mat, tex0, tex1, tex2] = await Promise.all([
        Materials.findFirst('material0'),
        Textures.findFirst('texture0'),
        Textures.findFirst('texture1'),
        Textures.findFirst('texture2')
    ]);

    // A JSON configuration for the picker object, with an initial index and
    // the items to include in the picker
    const configuration = {
      selectedIndex: 0,
      items: [
        {image_texture: tex0},
        {image_texture: tex1},
        {image_texture: tex2}
      ]
    };

    // Configure the picker with the previously created configuration
    picker.configure(configuration);

    //Display the picker
    picker.visible = true;

    // Assign the first item from the configuration as the material's diffuse texture
    mat.diffuse = configuration.items[0].image_texture;

    // Update the material's diffuse texture with the currently selected item in
    // the picker
    picker.selectedIndex.monitor().subscribe(function(index) {
        mat.diffuse = configuration.items[index.newValue].image_texture;
    });

})(); // Enables async/await in JS [part 2]

*/