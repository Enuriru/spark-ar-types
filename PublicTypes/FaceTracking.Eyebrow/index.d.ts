/// <reference path="../Reactive.PointSignal/index.d.ts" />
declare interface Eyebrow {
/**
* ```
(get) insideEnd: PointSignal
(set) (Not Available)
```

The location of the inner end of the eyebrow, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
insideEnd: PointSignal;
/**
* ```
(get) outsideEnd: PointSignal
(set) (Not Available)
```

The location of the outer end of the eyebrow, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
outsideEnd: PointSignal;
/**
* ```
(get) top: PointSignal
(set) (Not Available)
```

The location of the top of the eyebrow, as a [`PointSignal`](/classes/ReactiveModule.PointSignal).
*/
top: PointSignal;
}
