/// <reference path="../Reactive.Box3D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Subscription/index.d.ts" />


/**
[{"kind":"capability","capability":"uiCore","orCapability":""},{"kind":"introducedBy","version":639810632}]
*/


declare interface UIDropdown<TOption, TStyle> extends UIButton<TStyle> {

/**
```
(get) optionRenderer: {}
(set) optionRenderer: {}
```

This function is used for fully customizing the options' appearance
*/
optionRenderer: {}

/**
```
(get) optionTextResolver: {}
(set) optionTextResolver: {}
```

The function used for resolving the option text.
This is required when using a custom option type.
*/
optionTextResolver: {}

/**
```
(get) options: ReadonlyArray<TOption>
(set) options: ReadonlyArray<TOption>
```

The selectable array of options for the Dropdown.
If the options provided are not of type string but a custom type,
then please make sure that you're providing an optionTextResolver or selectionRenderer
*/
options: ReadonlyArray<TOption>

/**
```
(get) placeholder: TOption | string
(set) placeholder: TOption | string
```

The placeholder option which will be used when there's no selected option found
*/
placeholder: TOption | string

/**
```
(get) selectedIndex: ScalarSignal
(set) selectedIndex: ScalarSignal
```

The index of the selected option for the Dropdown
*/
selectedIndex: ScalarSignal

/**
```
(get) selectedIndexValue: number
(set) selectedIndexValue: number
```

The index of the selected option for the Dropdown
*/
selectedIndexValue: number

/**
```
(get) selectionRenderer: {}
(set) selectionRenderer: {}
```

The function used for fully customizing the dropdown's appearance based on the selected value
*/
selectionRenderer: {}

/**
```
applyStyle(style: Partial<TStyle>): void
```

*/
applyStyle(style: Partial<TStyle>): void

/**
```
getSelectedOption(): TOption
```

Gets the selected option for the Dropdown
*/
getSelectedOption(): TOption

/**
```
onInit(): void
```

*/
onInit(): void

/**
```
onLayout(usableVolume: Box3D): void
```

*/
onLayout(usableVolume: Box3D): void

/**
```
onSelectionChange(callback: {}): Subscription
```

Registers a callback function to the onSelectionChange event of the dropdown
*/
onSelectionChange(callback: {}): Subscription

/**
```
updateList(): void
```

Updates the list options of the dropdown
*/
updateList(): void

/**
```
updateView(): void
```

Updates the view of the dropdown
*/
updateView(): void

}
