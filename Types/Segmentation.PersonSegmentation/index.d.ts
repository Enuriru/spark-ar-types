/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"segmentation","orCapability":"multiclassSegmentation"}]
*/


/**
The `PersonSegmentation` class exposes the information about a person.
*/
declare interface PersonSegmentation {

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

Represents the percentage of screen space occupied by person.
*/
foregroundPercent: ScalarSignal

/**
```
(get) hasForeground: BoolSignal
(set) (Not Available)
```

Represents whether there is person in the scene (true/false).
*/
hasForeground: BoolSignal

}
