/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Eye {
/**
* ```
(get) center: PointSignal
(set) (Not Available)
```

The location of the center of the eye, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
center: PointSignal;
/**
* ```
(get) insideCorner: PointSignal
(set) (Not Available)
```

The location of the inside corner of the eye, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
insideCorner: PointSignal;
/**
* ```
(get) lowerEyelidCenter: PointSignal
(set) (Not Available)
```

The location of the center of the lower eyelid, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
lowerEyelidCenter: PointSignal;
/**
* ```
(get) openness: ScalarSignal
(set) (Not Available)
```

The openness of the eye, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
The higher the value returned, the more wide open the detected eye is. The minimum value is `0`, which indicates a closed eye.
*/
openness: ScalarSignal;
/**
* ```
(get) outsideCorner: PointSignal
(set) (Not Available)
```

The location of the outside corner of the eye, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
outsideCorner: PointSignal;
/**
* ```
(get) upperEyelidCenter: PointSignal
(set) (Not Available)
```

The location of the center of the upper eyelid, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
upperEyelidCenter: PointSignal;
}
