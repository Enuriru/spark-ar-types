/// <reference path="../Reactive.BoolSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"augmentControl","orCapability":""},{"kind":"introducedBy","version":1125385390}]
*/


/**
The `BlockProxyInstanceOutputs` class encapsulates methods for getting outputs of the block instance.
*/
declare interface BlockProxyInstanceOutputs {

/**
```
getBoolean(name: string): Promise<BoolSignal>
```

*/
getBoolean(name: string): Promise<BoolSignal>

}
