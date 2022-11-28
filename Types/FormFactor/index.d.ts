/// <reference path="../FormFactor.FormFactorCategoryBase/index.d.ts" />
/// <reference path="../FormFactor.FormFactorCategoryType/index.d.ts" />


/**
[{"kind":"capability","capability":"formFactor","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
Exposes the ability to retrieve information about where the effect is running - for example, the device and locale.
The use of form factors allows you to build [adaptive AR effects](https://sparkar.facebook.com/ar-studio/learn/tutorials/adaptive-ar) that appear differently based on where the effect is being run. For example, to show text in the language that matches the device's language.


A project's form factors can be managed from the **Form Factor** tab in the project **Properties**.
*/
declare interface FormFactor extends Module {

/**
```
get(categoryType: FormFactorCategoryType): FormFactorCategoryBase
```

Returns a specific form factor type from the effect's form factors.
* `categoryType` - the form factor type to retrieve, as a [`FormFactorCategoryType`](/classes/formfactormodule.formfactorcategorytype) enum value.

```
const locFactor = FormFactor.get(FormFactor.FormFactorCategoryType.LOCALE);
```
*/
get(categoryType: FormFactorCategoryType): FormFactorCategoryBase

/**
```
getAll(): FormFactorCategoryMap
```

Retrieves all of the form factors used in the effect.
To retrieve a specific form factor type, access the returned [`FormFactorCategoryMap`](/classes/formfactormodule.formfactorcategorymap) array with a [`FormFactorCategoryType`](/classes/formfactormodule.formfactorcategorytype) value:

```
const formFactors = FormFactor.getAll();
const locFactor = formFactors[FormFactor.FormFactorCategoryType.LOCALE].
                                                           formFactorValue;
```
*/
getAll(): FormFactorCategoryMap

}



/**

//============================================================================
// Retrieves the running effect's form factors and logs the returned values
// to the console.
//
// Required project capabilities:
// - Form Factor (auto added on FormFactor module import)
//
//============================================================================


// Load in the required modules
const FormFactor = require('FormFactor');
const Diagnostics = require('Diagnostics');


//==========================================================================
// Retrieve the effect's form factors
//==========================================================================

// Get all of the form factors used in the effect
const formFactors = FormFactor.getAll();

// Get the locale form factor value from the retrieved form factors
const locFactor = formFactors[FormFactor.FormFactorCategoryType.LOCALE].
                                                           formFactorValue;

// Log the locale form factor value to the console
locFactor.monitor({fireOnInitialValue: true}).subscribe((event) => {
  Diagnostics.log(`LOCALE: ${event.newValue}`);
});

// Get the platform form factor value from the retrieved form factors
const platFactor = formFactors[FormFactor.FormFactorCategoryType.PLATFORM].
                                                           formFactorValue;

// Log the platform form factor value to the console
platFormFact.monitor({fireOnInitialValue: true}).subscribe((event) => {
  Diagnostics.log(`PLATFORM: ${event.newValue}`);
});


//==========================================================================
// Log the device language, region and locale values to the console
//==========================================================================

// An alternative method to get the locale form factor
const locFact = FormFactor.get(FormFactor.FormFactorCategoryType.LOCALE);

// Monitor the locale form factor's language value
locFact.language.monitor({fireOnInitialValue: true}).subscribe((event) => {

  // Language identifier is returned as an ISO 639-1 code
  Diagnostics.log(`Language: ${event.newValue}`);

  // If the device language is Spanish, say hello in Spanish
  // Otherwise, say hello in English
  if (event.newValue == "es"){
    Diagnostics.log("Hola!");
  } else {
    Diagnostics.log("Hello!");
  }
});

// Monitor the locale form factor's region value
locFact.region.monitor({fireOnInitialValue: true}).subscribe((event) => {

  // Region identifier is returned as an ISO 3166-1 code
  Diagnostics.log(`Region: ${event.newValue}`);
});

// Monitor the locale form factor's locale value
locFact.locale.monitor({fireOnInitialValue: true}).subscribe((event) => {

  // Locale is returned in the format: languageCode_regionCode
  Diagnostics.log(`Locale: ${event.newValue}`);
});

*/