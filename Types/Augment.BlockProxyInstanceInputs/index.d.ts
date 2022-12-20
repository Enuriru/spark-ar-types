/// <reference path="../Reactive.Vec2/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />
/// <reference path="../Reactive.Vec4/index.d.ts" />


/**
[{"kind":"capability","capability":"augmentControl","orCapability":""},{"kind":"introducedBy","version":1125385390}]
*/


/**
The `BlockProxyInstanceInputs` class encapsulates methods for setting inputs to the block instance.
*/
declare interface BlockProxyInstanceInputs {

/**
```
setBoolean(name: string, v: boolean): Promise<void>
```

*/
setBoolean(name: string, v: boolean): Promise<void>

/**
```
setPoint2D(name: string, v: Vec2): Promise<void>
```

*/
setPoint2D(name: string, v: Vec2): Promise<void>

/**
```
setScalar(name: string, v: number): Promise<void>
```

*/
setScalar(name: string, v: number): Promise<void>

/**
```
setString(name: string, v: string): Promise<void>
```

*/
setString(name: string, v: string): Promise<void>

/**
```
setVec4(name: string, v: Vec4): Promise<void>
```

*/
setVec4(name: string, v: Vec4): Promise<void>

/**
```
setVector(name: string, v: Vec3): Promise<void>
```

*/
setVector(name: string, v: Vec3): Promise<void>

}
