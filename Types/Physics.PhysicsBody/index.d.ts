/// <reference path="../Physics.PhysicsObject/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface PhysicsBody extends PhysicsObject {

/**
```
(get) worldId: number
(set) (Not Available)
```

Returns the world ID the body belongs to
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

}
