/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
declare interface Hand {
/**
* ```
(get) boundingBox: Box2DSignal
(set) (Not Available)
```

The bounding box of the tracked hand relative to normalized screen space, as a [`Box2DSignal`](/classes/ReactiveModule.Box2DSignal).
*/
boundingBox: Box2DSignal;
/**
* ```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

The hand transform relative to the camera coordinate system, as a [`TransformSignal`](/classes/ReactiveModule.TransformSignal)
*/
cameraTransform: TransformSignal;
/**
* ```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Indicates whether the hand is being tracked in the current frame, with a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If `false`, the value of the `Hand` object's properties represent their value during the frame they were most recently tracked in.
*/
isTracked: BoolSignal;
}
