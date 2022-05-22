

/**
[{"kind":"capability","capability":"cameraShare","orCapability":""}]
*/


/**
The `DeepLinkModule` class exposes methods and properties to read the values that an external app sent to an effect.
*/
declare interface DeepLink extends Module {

/**
```
(get) arguments: {[key: string]: Object}
(set) (Not Available)
```

Specifies a collection of key/value pairs passed from the external app.
*/
arguments: {[key: string]: Object}

}



/**

//==============================================================================
// The following example demonstrates how to retrieve data passed in to an
// effect from an external app.
//
// Note: This example is based on an external app sending a 'name' argument.
//==============================================================================

// Load in the required modules
const DeepLink = require('DeepLink');
const Diagnostics = require('Diagnostics');

// Store a reference to the name argument passed from an external app
let name = DeepLink.arguments.name;

// If the name argument does not exist then set a default value
if (!name) {
    name = 'Jane Doe';
}

// Log the name
Diagnostics.log(name);

*/