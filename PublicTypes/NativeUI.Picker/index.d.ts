/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Textures.ImageTexture/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Picker {
/**
* ```
(get) selectedIndex: ScalarSignal
(set) selectedIndex: ScalarSignal
```

The index of the item currently selected in the picker.
*/
selectedIndex: ScalarSignal;
/**
* ```
(get) (Not Available)
(set) visible: BoolSignal | boolean
```
*/
visible: BoolSignal | boolean;
/**
*  
 * configure(config: {items: Array<{id?: string, image_texture: ImageTexture | string, title?: string, tooltip?: string}>, selectedIndex?: number}): Promise<void>
 *  
 * 
 * Configures the parameters of the picker with the JSON configuration specified.
 * * `config` -  The configuration to configure the picker object with.
 * The `config` JSON object can have the following fields:
 * *  `selectedIndex` - an optional index of `items` to display as the initial item in the picker. Defaults to `0` if no value is specified.
 * *  `items` - an array of uncompressed textures to display in the picker.
 */
configure(config: {items: Array<{id?: string, image_texture: ImageTexture | string, title?: string, tooltip?: string}>, selectedIndex?: number}): Promise<void>;

}
