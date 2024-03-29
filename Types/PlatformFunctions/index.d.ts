

/**
[{"kind":"capability","capability":"platformFunctions","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
`PlatformFunctions` module exposes functionality to call functions exposed
via product on the platform side.
*/
declare interface PlatformFunctions extends Module {

/**
```
(get) functions: {[key: string]: {}}
(set) (Not Available)
```

This returns a JS object with the keys as the platform function names and the
 values as the JS functions that call into them.
*/
functions: {[key: string]: {}}

}
