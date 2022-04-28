/// <reference path="../FormFactor.FormFactorCategoryBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
Provides details about the running effect's platform form factor.
Platforms can be added by selecting the experience type in the **Experience** tab in the project's **Properties**.


**Platform** must also be enabled under the **Form Factor** property tab. Individual platform form factors can then be managed from **Form Factor > Platform**.
*/
declare interface PlatformFormFactor extends FormFactorCategoryBase {

/**
```
(get) platform: StringSignal
(set) (Not Available)
```

Returns the platform value of the form factor as a [`StringSignal`](/classes/reactivemodule.stringsignal).
If the effect is running on a device with an unsupported form factor value, the fallback value specified in the project's **Form Factor > Platform** property is returned instead.
*/
platform: StringSignal

}



/**

//============================================================================
// Retrieves the running effect's platform form factor
//
// Required project capabilities:
// - Form Factor (auto added on FormFactor module import)
//
//============================================================================


// Load in the required modules
const FormFactor = require('FormFactor');

// Get the effect's platform form factor
const platFactor = FormFactor.get(FormFactor.FormFactorCategoryType.PLATFORM);

// Get the form factor's platform value
const platform = platFactor.platform;

// Log the platform value to the console
platform.monitor({fireOnInitialValue: true}).subscribe((event) => {
  Diagnostics.log(`Platform: ${event.newValue}`);
}});

*/