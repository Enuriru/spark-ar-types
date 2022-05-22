/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
declare interface Face2D {
/**
* ```
(get) boundingBox: Box2DSignal
(set) (Not Available)
```

The bounding box of the tracked face relative to normalized screen space, as a [`Box2DSignal`](/classes/ReactiveModule.Box2DSignal).
*/
boundingBox: Box2DSignal;
/**
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Indicates whether the face is being tracked in the current frame, with a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If `false`, the value of the `Face2D` object's properties represent their value during the frame they were most recently tracked in.
*/
isTracked: BoolSignal;
}
