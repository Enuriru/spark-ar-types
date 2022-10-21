

/**
[{"kind":"capability","capability":"syncDomApis","orCapability":""},{"kind":"introducedBy","version":1280623657}]
*/


/**
The `TransformSync` class describes an object transform for a scene.
All the operations with this class are synchronous.
*/
declare interface TransformSync {

/**
```
(get) rotationX: number
(set) rotationX: number
```

Specifies the object rotation about the X-axis of the object's local coordinate system, in radians.
**Note**: the rotations are applied to the object in Z-Y-X order. The X rotation is applied first to the object, therefore it is always performed in the object's local coordinate system.
*/
rotationX: number

/**
```
(get) rotationY: number
(set) rotationY: number
```

Specifies the object rotation about the Y-axis of the object's local coordinate system, in radians.
**Note**: the rotations are applied to the object in Z-Y-X order. The Y rotation is applied second to the object, therefore if the `rotationX` is not zero, then `rotationY` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationY: number

/**
```
(get) rotationZ: number
(set) rotationZ: number
```

Specifies the object rotation about the Z-axis of the object's local coordinate system, in radians.
**Note**: the rotations are applied to the object in Z-Y-X order. The Z rotation is applied last to the object, therefore if the `rotationX` or `rotationY` is not zero, then `rotationZ` is applied not in the object's local coordinate system but in the rotated one.
*/
rotationZ: number

/**
```
(get) scaleX: number
(set) scaleX: number
```

Specifies the object scale along the X-axis of the object's local coordinate system.
*/
scaleX: number

/**
```
(get) scaleY: number
(set) scaleY: number
```

Specifies the object scale along the Y-axis of the object's local coordinate system.
*/
scaleY: number

/**
```
(get) scaleZ: number
(set) scaleZ: number
```

Specifies the object scale along the Z-axis of the object's local coordinate system.
*/
scaleZ: number

/**
```
(get) x: number
(set) x: number
```

Specifies the object offset along the X-axis of the object's local coordinate system.
*/
x: number

/**
```
(get) y: number
(set) y: number
```

Specifies the object offset along the Y-axis of the object's local coordinate system.
*/
y: number

/**
```
(get) z: number
(set) z: number
```

Specifies the object offset along the Z-axis of the object's local coordinate system.
*/
z: number

}
