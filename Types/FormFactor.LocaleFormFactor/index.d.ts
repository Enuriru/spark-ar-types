/// <reference path="../FormFactor.FormFactorCategoryBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
Provides details about the running effect's locale form factor.
**Locale** must be enabled under **Form Factor** in the project's **Properties**. Individual locale form factors can then be managed from the **Form Factor > Locale** tab.
*/
declare interface LocaleFormFactor extends FormFactorCategoryBase {

/**
```
(get) language: StringSignal
(set) (Not Available)
```

Returns the language value of the form factor as a [`StringSignal`](/classes/reactivemodule.stringsignal).
The language value is returned as an [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes?fbclid=IwAR1kczIuy6_Ib9JOF-j0h7xgMsMlCBrIZ_v0htCjBzG-CVNmoPsQtU3mOAg formatted code.


If the effect is running on a device with an unsupported form factor value, the fallback value specified in the project's **Form Factor > Locale** property is returned instead. Due to this, the result may vary from the value returned by [`LocaleModule.language()`](/classes/localemodule#methods).
*/
language: StringSignal

/**
```
(get) locale: StringSignal
(set) (Not Available)
```

Returns the locale value of the form factor as a [`StringSignal`](/classes/reactivemodule.stringsignal).
The locale value is returned in the format: `languageCode_regionCode`, where `languageCode` is an [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes?fbclid=IwAR1kczIuy6_Ib9JOF-j0h7xgMsMlCBrIZ_v0htCjBzG-CVNmoPsQtU3mOAg formatted code and `regionCode` is an [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1?fbclid=IwAR3ID3lNfoNfXIlc2QXcVVvYNtSJA0IGCfErcQJcquDzjuG-LVAUdGE924M) formatted code.


If the effect is running on a device with an unsupported form factor value, the fallback value specified in the project's **Form Factor > Locale** property is returned instead. Due to this, the result may vary from the value returned by [`LocaleModule.locale()`](/classes/localemodule#methods).
*/
locale: StringSignal

/**
```
(get) region: StringSignal
(set) (Not Available)
```

Returns the region value of the form factor as a [`StringSignal`](/classes/reactivemodule.stringsignal). If the locale form factor is a language-only value, an empty string is returned instead.
The region value is returned as an [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1?fbclid=IwAR3ID3lNfoNfXIlc2QXcVVvYNtSJA0IGCfErcQJcquDzjuG-LVAUdGE924M) formatted code.


If the effect is running on a device with an unsupported form factor value, the fallback value specified in the project's **Form Factor > Locale** property is returned instead. Due to this, the result may vary from the value returned by [`LocaleModule.region()`](/classes/localemodule#methods).
*/
region: StringSignal

}



/**

//============================================================================
// Retrieves the running effect's locale form factor, gets the language value
// from the form factor and displays text in a different language based on
// the returned value.
//
// Required project capabilities:
// - Form Factor (auto added on FormFactor module import)
//
//============================================================================


// Load in the required modules
const FormFactor = require('FormFactor');
const Diagnostics = require('Diagnostics');

// Get the effect's locale form factor
const locFactor = FormFactor.get(FormFactor.FormFactorCategoryType.LOCALE);

// Get the form factor's values
const locale = locFactor.locale();
const language = locFactor.language();
const region = locFactor.region();

// If the device language is Spanish, say hello in Spanish
// Otherwise, say hello in English
language.monitor({fireOnInitialValue: true}).subscribe((event) => {
  Diagnostics.log(`Language: ${event.newValue}`);

  if (event.newValue == "es"){
    Diagnostics.log("Hola!");
  } else {
    Diagnostics.log("Hello!");
}});

*/