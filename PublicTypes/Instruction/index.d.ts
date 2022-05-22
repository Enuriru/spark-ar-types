/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare class InstructionModule {
/**
* ```
(get) automaticHintsEnabled: BoolSignal
(set) automaticHintsEnabled: BoolSignal
```

Specifies whether or not automatic instruction hints are enabled.
*/
static readonly automaticHintsEnabled: BoolSignal;
/**
*  
 * bind(enabled: BoolSignal, token: StringSignal): void
 *  
 * 
 * When enabled, shows instruction for given token (you can find and select custom instruction
 * tokens in project capabilities).
 * To hide instruction simply set enabled to `false`.
 * 
 * You can have at most one binding for instructions, meaning that setting a different binding
 * would replace any previously created and setup binding for instructions.
 */
static bind(enabled: BoolSignal | boolean, token: StringSignal | string): void;

}
export = InstructionModule;
