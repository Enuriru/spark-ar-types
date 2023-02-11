/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"skinSegmentation","orCapability":""}]
*/


/**
The `SkinSegmentation` class exposes the information about a person's skin.
*/
declare interface SkinSegmentation {

/**
```
(get) (Not Available)
(set) enabled: boolean
```

Specifies whether the segmentation should be enabled. Default value is true.
*/
enabled: boolean

/**
```
(get) foregroundPercent: ScalarSignal
(set) (Not Available)
```

Represents the percentage of screen space occupied by skin.
*/
foregroundPercent: ScalarSignal

/**
```
(get) hasForeground: BoolSignal
(set) (Not Available)
```

Represents whether there is skin in the scene (true/false).
*/
hasForeground: BoolSignal

}
