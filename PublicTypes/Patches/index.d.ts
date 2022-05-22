/// <reference path="../Patches.PatchesInputs/index.d.ts" />
/// <reference path="../Patches.PatchesOutputs/index.d.ts" />
declare class PatchesModule {
/**
* ```
(get) inputs: PatchesInputs
(set) (Not Available)
```

Returns an object encapsulating all inputs setters for the Patch Editor patches.
*/
static readonly inputs: PatchesInputs;
/**
* ```
(get) outputs: PatchesOutputs
(set) (Not Available)
```

Returns an object encapsulating all outputs getters for the Patch Editor patches.
*/
static readonly outputs: PatchesOutputs;
}
export = PatchesModule;
