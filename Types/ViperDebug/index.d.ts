/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"viperDebug","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect"]}]
*/


/**
Undocumented.
*/
declare interface ViperDebug extends Module {

/**
```
(get) debugString: StringSignal
(set) (Not Available)
```

Gets a debug string piped through from Viper.
*/
debugString: StringSignal

/**
```
clearViperOnlyMode(): void
```

Removes running in viper only mode. (Aka, runs the normal gyro+regiontracking+SLAM).
*/
clearViperOnlyMode(): void

/**
```
setViperOnlyMode(): void
```

Makes underlying camera + anchor tracking algorithms run in viper only mode.
*/
setViperOnlyMode(): void

}



/**

const Scene = require('Scene');
const ViperDebug = require('ViperDebug');
// EXAMPLE: Write your example below.

*/