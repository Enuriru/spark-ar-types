/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.Vec2/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />
/// <reference path="../Reactive.Vec4/index.d.ts" />


/**
[{"kind":"capability","capability":"augmentControl","orCapability":""},{"kind":"introducedBy","version":1125385390}]
*/


/**
The `BlockProxyInstanceOutputs` class encapsulates methods for getting outputs of the block instance.
*/
declare interface BlockProxyInstanceOutputs {

/**
```
getBoolean(name: string): Promise<EventSource<boolean>>
```

*/
getBoolean(name: string): Promise<EventSource<boolean>>

/**
```
getPoint2D(name: string): Promise<EventSource<Vec2>>
```

*/
getPoint2D(name: string): Promise<EventSource<Vec2>>

/**
```
getScalar(name: string): Promise<EventSource<number>>
```

*/
getScalar(name: string): Promise<EventSource<number>>

/**
```
getString(name: string, v: string): Promise<EventSource<string>>
```

*/
getString(name: string, v: string): Promise<EventSource<string>>

/**
```
getVec4(name: string, v: Vec4): Promise<EventSource<Vec4>>
```

*/
getVec4(name: string, v: Vec4): Promise<EventSource<Vec4>>

/**
```
getVector(name: string, v: Vec3): Promise<EventSource<Vec3>>
```

*/
getVector(name: string, v: Vec3): Promise<EventSource<Vec3>>

}
