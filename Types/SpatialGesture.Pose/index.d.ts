/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />

declare interface Pose {

/**
```
(get) orientation: QuaternionSignal
(set) (Not Available)
```
*/
orientation: QuaternionSignal

/**
```
(get) position: PointSignal
(set) (Not Available)
```
*/
position: PointSignal

}
