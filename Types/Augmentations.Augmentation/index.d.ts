/// <reference path="../Augmentations.AugmentationInstance/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"remoteAugmentations","orCapability":""}]
*/


declare interface Augmentation {

/**
```
(get) downloadProgress: ScalarSignal
(set) (Not Available)
```
*/
downloadProgress: ScalarSignal

/**
```
(get) state: StringSignal
(set) (Not Available)
```

Return `StringSignal` with possible values defined by enum `Augmentation.AugmentationState`
*/
state: StringSignal

/**
```
instantiate(config: {[key: string]: any}): Promise<AugmentationInstance>
```

*/
instantiate(config: {[key: string]: any}): Promise<AugmentationInstance>

}
