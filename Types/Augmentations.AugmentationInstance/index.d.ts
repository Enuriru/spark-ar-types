/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"remoteAugmentations","orCapability":""}]
*/


declare interface AugmentationInstance {

/**
```
(get) state: StringSignal
(set) (Not Available)
```

Return `StringSignal` with possible values defined by enum `AugmentationInstance.AugmentationInstanceState`
*/
state: StringSignal

/**
```
remove(): Promise<void>
```

*/
remove(): Promise<void>

}
