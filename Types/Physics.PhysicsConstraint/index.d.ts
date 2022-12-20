/// <reference path="../Physics.PhysicsObject/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":2977307455},{"kind":"capability","capability":"physics","orCapability":""}]
*/


declare interface PhysicsConstraint extends PhysicsObject {

/**
```
getProperties(): Promise<object>
```

*/
getProperties(): Promise<object>

}
