/// <reference path="../NativeUI.Picker/index.d.ts" />
/// <reference path="../NativeUI.Slider/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
Exposes the ability to edit a device's native UI elements including editable text, [pickers](https://sparkar.facebook.com/ar-studio/learn/documentation/tutorials/native-ui-picker) and [sliders](https://sparkar.facebook.com/ar-studio/learn/documentation/tutorials/native-ui-slider).
Each of these require the relevant capability to be enabled under the *Native UI Control* capability within the project's *Properties*.

Use of text in your effect, including editable text, is subject to approval policies. See the [Editable Text](https://sparkar.facebook.com/ar-studio/learn/documentation/articles/2D/editable-text#review-policies-for-text) article for more information.
*/
declare interface NativeUI extends Module {

/**
```
(get) picker: Picker
(set) picker: Picker
```

Represents the [`Picker`](/classes/nativeuimodule.picker) object in the `NativeUI`.
The picker object must be configured with the [`configure()`](/classes/nativeuimodule.picker#methods) method and its `hidden` property set to `true` in order to be displayed.
*/
picker: Picker

/**
```
(get) slider: Slider
(set) slider: Slider
```

Represents the [`Slider`](/classes/nativeuimodule.slider) object in the `NativeUI`.
The slider object will not be displayed unless its `hidden` property is set to `true`.
*/
slider: Slider

/**
```
enterRawTextEditMode(nodeName: string): Promise<boolean>
```

Requests raw text input from the user for the specified object.
* `nodeName` - the name of the text object to request user input for.
Unlike `enterTextEditMode()`, raw text input does not provide any editing UI.

The returned promise is resolved with a boolean value. A value of `true` signifies that the keyboard was displayed and is now hidden, whereas `false` signifies that the device failed to enter raw text edit mode.
*/
enterRawTextEditMode(nodeName: string): Promise<boolean>

/**
```
enterTextEditMode(nodeName: string): Promise<boolean>
```

Requests text input from the user for the specified object.
* `nodeName` - the name of the text object to request user input for.
The promise returned is resolved with a boolean value which represents whether the input request was successful.

On a successful input, the `nodeName` object's text will be updated automatically.
*/
enterTextEditMode(nodeName: string): Promise<boolean>

/**
```
exitRawTextEditMode(): Promise<boolean>
```

Exits raw text edit mode.
*/
exitRawTextEditMode(): Promise<boolean>

/**
```
getText(nodeName: string): StringSignal
```

Returns the user edited text of the `nodeName` object.
* `nodeName` - the text object to retrieve the text from.
*/
getText(nodeName: string): StringSignal

/**
```
setText(nodeName: string, text: string): void
```

Sets the text property of the `nodeName` object to the value specified by `text`.
* `nodeName` - the text object to update.
* `text` - the string to assign to the `nodeName`'s text property.
*/
setText(nodeName: string, text: string): void

}



/**

//============================================================================
// The following example demonstrates how to get and set the value of
// editable text through scripting and keyboard input.
//
// Project setup:
// - Insert text
// - Set the text to 'Editable' in the inspector
// - Add the 'Editable text' capability under 'Native UI Control'
// - Add the 'Tap Gesture' capability under 'Touch Gestures'
//
//============================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');
const NativeUI = require('NativeUI');
const TouchGestures = require('TouchGestures');

// Set the initial text value
NativeUI.setText('text0','Default Text');

// Subscribe to tap gestures
TouchGestures.onTap().subscribe(function () {

  // Enter text editing mode
  NativeUI.enterTextEditMode('text0');

});

// Subscribe to changes in the text
NativeUI.getText('text0').monitor().subscribe(function(textUpdate){

  // Log the new text value to the console
  Diagnostics.log('You entered ' + textUpdate.newValue);

});

*/