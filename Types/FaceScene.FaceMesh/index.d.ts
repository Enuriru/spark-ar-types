/// <reference path="../FaceScene.BlendShapesFace/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.BlendShape/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `FaceMesh` class describes a face mesh.
*/
declare interface FaceMesh extends SceneObjectBase {

/**
```
(get) blendShapes: BlendShapesFace
(set) (Not Available)
```

Returns the set of blendshapes that have been added to this face mesh.
*/
blendShapes: BlendShapesFace

/**
```
(get) faceDistortionStrength: ScalarSignal
(set) faceDistortionStrength: ScalarSignal
```

Specifies the face distortion strength level.
*/
faceDistortionStrength: ScalarSignal

/**
```
(get) (Not Available)
(set) material: MaterialBase | null
```

Specifies the material of the scene object.
*/
material: MaterialBase | null

/**
```
(get) subtractSourceExpression: BoolSignal
(set) subtractSourceExpression: BoolSignal
```

Specifies if we need to substract source expression.
*/
subtractSourceExpression: BoolSignal

/**
```
getBlendShapes(): Promise<Array<BlendShape>>
```

Returns a `JS Promise` which will be fulfilled with `array of blend Shapes` or an error.
*/
getBlendShapes(): Promise<Array<BlendShape>>

/**
```
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

}
