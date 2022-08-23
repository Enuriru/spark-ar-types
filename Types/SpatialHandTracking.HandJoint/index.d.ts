/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />

declare interface HandJoint {

/**
```
(get) angularVelocity: PointSignal
(set) (Not Available)
```
*/
angularVelocity: PointSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```
*/
isTracked: BoolSignal

/**
```
(get) linearVelocity: PointSignal
(set) (Not Available)
```
*/
linearVelocity: PointSignal

/**
```
(get) transform: TransformSignal
(set) (Not Available)
```
*/
transform: TransformSignal

}
