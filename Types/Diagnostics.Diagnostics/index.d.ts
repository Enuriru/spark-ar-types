/// <reference path="../Diagnostics.TypeSystemMetadata/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
The `DiagnosticsModule` class enables diagnostic logging.
*/
declare interface Diagnostics extends Module {

/**
```
(get) typeSystem: TypeSystemMetadata
(set) (Not Available)
```

Object containing available module and types information.
*/
typeSystem: TypeSystemMetadata

/**
```
getModuleNames(): Array<string>
```

Returns an array of names of all the scripting modules that can be loaded through a `require` call.
Note: This set of modules is based on the list of enabled capabilities.
*/
getModuleNames(): Array<string>

/**
```
getTypeDescriptions(): Object
```

Finds the descriptions for each type in the effect.
*/
getTypeDescriptions(): Object

/**
```
log(content: Object): void
```

Flattens content to a string and prints it to the debug console.
Note: this function can be reassigned to any var (i.e. `foo.log = Diagnostics.log;`)
*/
log(content: Object): void

/**
```
watch(tag: string, signal: BoolSignal | ScalarSignal | StringSignal): void
```

Adds the specified signal to the watch view in AR Studio with the specified tag.
*/
watch(tag: string, signal: BoolSignal | ScalarSignal | StringSignal): void

}



/**

//==============================================================================
// The following example demonstrates how to log messages to the Console and
// watch signal values.
//==============================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');
const Scene = require('Scene');

// Log a message to the Console
Diagnostics.log('Console message logged from the script.');

// Watch a signal's value in the Console
Diagnostics.watch("Mouth Openness - ", FaceTracking.face(0).mouth.openness);

*/