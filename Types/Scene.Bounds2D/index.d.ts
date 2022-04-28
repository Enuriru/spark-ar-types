/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `Bounds2D` class describes the bounds of a scene element.
*/
declare interface Bounds2D {

/**
```
(get) height: ScalarSignal
(set) (Not Available)
```

Specifies the height of the scene element boundaries. Measured in 3D units.
*/
height: ScalarSignal

/**
```
(get) width: ScalarSignal
(set) (Not Available)
```

Specifies the width of the scene element boundaries. Measured in 3D units.
*/
width: ScalarSignal

/**
```
(get) x: ScalarSignal
(set) (Not Available)
```

Specifies the left boundary of the scene element. Relative to the parent object bounds. Measured in 3D units.
**Note**: the offset is measured from the parent's left boundary, which might be different from the parent's origin.
*/
x: ScalarSignal

/**
```
(get) y: ScalarSignal
(set) (Not Available)
```

Specifies the top boundary of the scene element. Relative to the parent object bounds. Measured in 3D units.
**Note**: the offset is measured from the parent's top boundary, which might be different from the parent's origin.
*/
y: ScalarSignal

}
