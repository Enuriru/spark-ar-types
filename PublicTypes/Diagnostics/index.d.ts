/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Diagnostics.TypeSystemMetadata/index.d.ts" />
declare class DiagnosticsModule {
/**
* ```
(get) typeSystem: TypeSystemMetadata
(set) (Not Available)
```

Object containing available module and types information.
*/
static readonly typeSystem: TypeSystemMetadata;
/**
*  
 * error(content: Object): void
 *  
 * 
 * Flattens content to a string and prints it to the debug console as an error.
 * Note: this function can be reassigned to any var (i.e. `foo.warn = Diagnostics.error;`)
 */
static error(content: Object): void;

/**
*  
 * log(content: Object): void
 *  
 * 
 * Flattens content to a string and prints it to the debug console.
 * Note: this function can be reassigned to any var (i.e. `foo.log = Diagnostics.log;`)
 */
static log(content: Object): void;

/**
*  
 * warn(content: Object): void
 *  
 * 
 * Flattens content to a string and prints it to the debug console as a warning.
 * Note: this function can be reassigned to any var (i.e. `foo.warn = Diagnostics.warn;`)
 */
static warn(content: Object): void;

/**
*  
 * watch(tag: string, signal: BoolSignal | ScalarSignal | StringSignal): void
 *  
 * 
 * Adds the specified signal to the watch view in AR Studio with the specified tag.
 */
static watch(tag: string, signal: BoolSignal | ScalarSignal | StringSignal | boolean | number | string): void;

}
export = DiagnosticsModule;
