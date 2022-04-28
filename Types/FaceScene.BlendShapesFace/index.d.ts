/// <reference path="../Scene.BlendShape/index.d.ts" />


/**
[{"kind":"capability","capability":"experimentalFaceDistortionApi","orCapability":""}]
*/


/**
The `BlendShapesFace` class encapsulates multiple blend faces.
*/
declare interface BlendShapesFace {

/**
```
(get) count: number
(set) (Not Available)
```

Retrieves the number of blend shapes
*/
count: number

/**
```
getAtIndex(index: number): BlendShape
```

Returns the blendshape at the given index, with 0 being the first blendshape.
*/
getAtIndex(index: number): BlendShape

/**
```
getByName(name: string): BlendShape
```

Returns the blendshape with the given name.
*/
getByName(name: string): BlendShape

}
