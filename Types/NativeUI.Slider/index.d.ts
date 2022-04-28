/// <reference path="../Animation.ColorSampler/index.d.ts" />
/// <reference path="../NativeUI.SliderType/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Textures.ImageTexture/index.d.ts" />


/**
[{"kind":"capability","capability":"nativeUIControlSlider","orCapability":""}]
*/


/**
Describes an object which controls the behavior of the `NativeUI`'s slider.
Requires the *Native UI Control > Slider* capability within the project's *Properties* to be enabled.
*/
declare interface Slider {

/**
```
(get) progressColor: RgbaSignal
(set) (Not Available)
```
*/
progressColor: RgbaSignal

/**
```
(get) sliderType: Signal<SliderType>
(set) (Not Available)
```

The current type of the slider. Either `SCALE`, `PROGRESS` or `COLOR`.
*/
sliderType: Signal<SliderType>

/**
```
(get) value: ScalarSignal
(set) value: ScalarSignal
```

The value of the slider object, as a scalar signal between 0 and 1.
*/
value: ScalarSignal

/**
```
(get) (Not Available)
(set) visible: BoolSignal | boolean
```

The visibility of the slider object, set via a boolean value.
*/
visible: BoolSignal | boolean

/**
```
configure(config: {colorSampler?: ColorSampler, steps?: number, thumbTexture?: ImageTexture | string, type?: SliderType}): Promise<void>
```

Configures the parameters of the slider with the JSON configuration specified.
* `config` -  The configuration to configure the picker object with.
The `config` JSON object can have the following fields:
* `type` - the type of the slider. Either `SCALE`, `PROGRESS` or `COLOR`. Defaults to `SCALE` if no value is specified.
* `steps` - an optional number of steps to divide the track of the slider into. Required for sliders of type `PROGRESS`.
* `thumbTexture` - the name of the uncompressed texture to use as the icon for the slider's thumb.
* `colorSampler` - the sampler to sample color from, if the slider is of type `COLOR`.
*/
configure(config: {colorSampler?: ColorSampler, steps?: number, thumbTexture?: ImageTexture | string, type?: SliderType}): Promise<void>

}



/**

//============================================================================
// Update a material's opacity using the value of the NativeUI slider
//
// Project setup:
// - One material: material0
// - One plane with material0 set as its material
//
// Required project capabilities:
// - NativeUI > Slider
//
//============================================================================

// Load in the required modules
const NativeUI = require('NativeUI');
const Materials = require('Materials');

(async function () { // Enables async/await in JS [part 1]

  // Locate the material in the project
  const material = await Materials.findFirst('material0');

  // Create a reference to the NativeUI's slider object and display it
  const slider = NativeUI.slider;
  slider.visible = true;

  // Subscribe to changes to the slider's value property
  slider.value.monitor().subscribe(function(val) {

    // Use the new slider value to update the material's opacity
    material.opacity = val.newValue;
  });

})(); // Enables async/await in JS [part 2]

*/