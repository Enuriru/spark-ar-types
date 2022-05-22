/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../NativeUI.SliderType/index.d.ts" />
declare interface Slider {
/**
* ```
(get) sliderType: Signal<SliderType>
(set) (Not Available)
```

The current type of the slider. Either `SCALE`, `PROGRESS` or `COLOR`.
*/
sliderType: Signal<SliderType>;
/**
* ```
(get) value: ScalarSignal
(set) value: ScalarSignal
```

The value of the slider object, as a scalar signal between 0 and 1.
*/
value: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) visible: BoolSignal | boolean
```
*/
visible: BoolSignal | boolean;
/**
*  
 * configure(config: {colorSampler?: ColorSampler, steps?: number, thumbTexture?: ImageTexture | string, type?: SliderType}): Promise<void>
 *  
 * 
 * Configures the parameters of the slider with the JSON configuration specified.
 * * `config` -  The configuration to configure the picker object with.
 * The `config` JSON object can have the following fields:
 * * `type` - the type of the slider. Either `SCALE`, `PROGRESS` or `COLOR`. Defaults to `SCALE` if no value is specified.
 * * `steps` - an optional number of steps to divide the track of the slider into. Required for sliders of type `PROGRESS`.
 * * `thumbTexture` - the name of the uncompressed texture to use as the icon for the slider's thumb.
 * * `colorSampler` - the sampler to sample color from, if the slider is of type `COLOR`.
 */
configure(config: {colorSampler?: ColorSampler, steps?: number, thumbTexture?: ImageTexture | string, type?: SliderType}): Promise<void>;

}
