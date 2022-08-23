/// <reference path="../Reactive.TransformSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface PhysicsBody {

/**
```
(get) id: number
(set) (Not Available)
```
*/
id: number

/**
```
(get) name: string
(set) (Not Available)
```
*/
name: string

/**
```
(get) type: PhysicsObjectTypeInt
(set) (Not Available)
```
*/
type: PhysicsObjectTypeInt

/**
```
(get) worldId: number
(set) (Not Available)
```
*/
worldId: number

/**
```
getProperties(): Promise<object>
```

*/
getProperties(): Promise<object>

/**
```
setProperties(props: object): Promise<void>
```

*/
setProperties(props: object): Promise<void>

/**
```
setWorldTransform(t: TransformSignal): Promise<void>
```

Set the world transform signal of the rigid body.
*/
setWorldTransform(t: TransformSignal): Promise<void>

/**
```
worldTransformPromise(): Promise<TransformSignal>
```

*/
worldTransformPromise(): Promise<TransformSignal>

}
