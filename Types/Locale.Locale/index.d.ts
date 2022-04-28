/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
The `LocaleModule` class encapsulates access to the locale identifier of the device.
*/
declare interface Locale extends Module {

/**
```
(get) fromDevice: string
(set) (Not Available)
```

Provides the ISO 639-1 language + ISO 3166-1 region compliant locale identifier, e.g. `en_US` or `zh_HK`.
*/
fromDevice: string

/**
```
(get) language: StringSignal
(set) (Not Available)
```

Provides the ISO 639-1 compliant language identifier, e.g. `en` or `zh`.
*/
language: StringSignal

/**
```
(get) locale: StringSignal
(set) (Not Available)
```

Provides the ISO 639-1 language + ISO 3166-1 region compliant locale identifier, e.g. `en_US` or `zh_HK`.
*/
locale: StringSignal

/**
```
(get) region: StringSignal
(set) (Not Available)
```

Provides the ISO 3166-1 region identifier, e.g. `US`, or `HK`.
*/
region: StringSignal

}



/**

//==============================================================================
// The following example demonstrates how to detect the device language and
// log a greeting in that language.
//==============================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');
const Locale = require('Locale');

// ---
// Subscribe to language signal, and log it's value.
// ---

Locale.language
  .monitor({
    fireOnInitialValue: true
  }).subscribe(function(e) {
    Diagnostics.log("My language is '" + e.newValue + "'.");
  });

// ---
// Subscribe to 'region' signal, and log it's value.
// ---
Locale.region
  .monitor({
    fireOnInitialValue: true
  }).subscribe(function(e) {
    Diagnostics.log("My region is '" + e.newValue + "'.");
  });

// ---
// Use a set of conditionals, to log a greeting in the correct language.
// ---

// English -> 'Hello'
Locale.language.eq("en").onOn({
  fireOnInitialValue: true
}).subscribe(function(_) {
  Diagnostics.log("Hello");
});

// Spanish -> 'Hola'
Locale.language.eq("es").onOn({
  fireOnInitialValue: true
}).subscribe(function(_) {
  Diagnostics.log("Hola");
});

// French -> 'Bonjour'
Locale.language.eq("fr").onOn({
  fireOnInitialValue: true
}).subscribe(function(_) {
  Diagnostics.log("Bonjour");
});

*/