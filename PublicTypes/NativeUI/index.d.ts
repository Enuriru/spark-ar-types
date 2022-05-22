/// <reference path="../NativeUI.Picker/index.d.ts" />
/// <reference path="../NativeUI.Slider/index.d.ts" />
/// <reference path="../NativeUI.SliderType/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare class NativeUIModule {
/**
* ```
(get) picker: Picker
(set) picker: Picker
```

Represents the [`Picker`](/classes/nativeuimodule.picker) object in the `NativeUI`.
The picker object must be configured with the [`configure()`](/classes/nativeuimodule.picker#methods) method and its `hidden` property set to `true` in order to be displayed.
*/
static readonly picker: Picker;
/**
* ```
(get) slider: Slider
(set) slider: Slider
```

Represents the [`Slider`](/classes/nativeuimodule.slider) object in the `NativeUI`.
The slider object will not be displayed unless its `hidden` property is set to `true`.
*/
static readonly slider: Slider;
/**
*  
 * enterTextEditMode(nodeName: string): Promise<boolean>
 *  
 * 
 * Requests text input from the user for the specified object.
 * * `nodeName` - the name of the text object to request user input for.
 * The promise returned is resolved with a boolean value which represents whether the input request was successful.
 * 
 * On a successful input, the `nodeName` object's text will be updated automatically.
 */
static enterTextEditMode(nodeName: string): Promise<boolean>;

/**
*  
 * getText(nodeName: string): StringSignal
 *  
 * 
 * Returns the user edited text of the `nodeName` object.
 * * `nodeName` - the text object to retrieve the text from.
 */
static getText(nodeName: string): StringSignal;

/**
*  
 * setText(nodeName: string, text: string): void
 *  
 * 
 * Sets the text property of the `nodeName` object to the value specified by `text`.
 * * `nodeName` - the text object to update.
 * * `text` - the string to assign to the `nodeName`'s text property.
 */
static setText(nodeName: string, text: string): void;

/**
 * The `SliderType` enum describes the Native UI slider types.
 * @property COLOR Color type, slider bar would be rendered and sampled according to the color sampler config
 * @property PROGRESS Progress type, slider thumb would snap according to step value
 * @property SCALE Scale type, default slider behavior
 */
static readonly SliderType: {
  COLOR: "COLOR",
  PROGRESS: "PROGRESS",
  SCALE: "SCALE",
}
}
export = NativeUIModule;
