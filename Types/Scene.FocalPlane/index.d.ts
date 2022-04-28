/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `FocalPlane` class exposes details about the focal plane of the device camera.
*/
declare interface FocalPlane {

/**
```
(get) distance: ScalarSignal
(set) (Not Available)
```

Specifies the distance between focal plane and camera. Measured in 3D units.
*/
distance: ScalarSignal

/**
```
(get) height: ScalarSignal
(set) (Not Available)
```

Specifies the height of the focal plane. Measured in 3D units.
*/
height: ScalarSignal

/**
```
(get) width: ScalarSignal
(set) (Not Available)
```

Specifies the width of the focal plane. Measured in 3D units.
*/
width: ScalarSignal

}
