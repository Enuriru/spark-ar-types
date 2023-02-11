/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"hairSegmentation","orCapability":""}]
*/


/**
The `HairSegmentation` class exposes the information about a person's hair.
*/
declare interface HairSegmentation {

/**
```
(get) averageColor: RgbaSignal
(set) (Not Available)
```

Average color of hair in the scene.
*/
averageColor: RgbaSignal

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

Represents the percentage of screen space occupied by hair.
*/
foregroundPercent: ScalarSignal

/**
```
(get) hasForeground: BoolSignal
(set) (Not Available)
```

Represents whether there is hair in the scene (true/false).
*/
hasForeground: BoolSignal

}
