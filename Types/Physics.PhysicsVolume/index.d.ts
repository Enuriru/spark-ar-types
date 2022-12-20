/// <reference path="../Physics.PhysicsObject/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface PhysicsVolume extends PhysicsObject {

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
