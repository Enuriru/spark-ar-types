/// <reference path="../Reactive.PointSignal/index.d.ts" />
declare interface Nose {
/**
* ```
(get) bridge: PointSignal
(set) (Not Available)
```

The location of the bridge of the nose, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
bridge: PointSignal;
/**
* ```
(get) leftNostril: PointSignal
(set) (Not Available)
```

The location of the left nostril, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
leftNostril: PointSignal;
/**
* ```
(get) rightNostril: PointSignal
(set) (Not Available)
```

The location of the right nostril, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
rightNostril: PointSignal;
/**
* ```
(get) tip: PointSignal
(set) (Not Available)
```

The location of the tip of the nose, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
tip: PointSignal;
}
