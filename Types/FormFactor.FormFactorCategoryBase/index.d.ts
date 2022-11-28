/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"formFactor","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The base class for the various form factor types.
A project's form factors can be managed from the **Form Factor** tab in the project **Properties**.
*/
declare interface FormFactorCategoryBase {

/**
```
(get) formFactorValue: StringSignal
(set) (Not Available)
```

Returns the current value of the form factor as a [`StringSignal`](/classes/reactivemodule.stringsignal).
If the effect is running on a device with an unsupported form factor value, the fallback value specified in the project's **Form Factor** properties is returned instead.


```
const formFactors = FormFactor.getAll();
const locFactor = formFactors[FormFactor.FormFactorCategoryType.LOCALE].
                                                           formFactorValue;
```
*/
formFactorValue: StringSignal

}



/**

//============================================================================
// Retrieves the running effect's locale and platform form factors
//
// Required project capabilities:
// - Form Factor (auto added on FormFactor module import)
//
//============================================================================


// Load in the required modules
const FormFactor = require('FormFactor');

// Get the effect's locale form factor
const locFactor = FormFactor.get(FormFactor.FormFactorCategoryType.LOCALE);

// Get the effect's platform form factor
const platFactor = FormFactor.get(FormFactor.FormFactorCategoryType.PLATFORM);

*/