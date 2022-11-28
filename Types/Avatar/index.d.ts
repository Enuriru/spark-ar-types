/// <reference path="../Avatar.AvatarIkType/index.d.ts" />
/// <reference path="../Avatar.AvatarLOD/index.d.ts" />
/// <reference path="../Avatar.AvatarManifestation/index.d.ts" />
/// <reference path="../Avatar.AvatarRenderType/index.d.ts" />
/// <reference path="../Avatar.AvatarStreamingType/index.d.ts" />
/// <reference path="../Avatar.AvatarSubmesh/index.d.ts" />
/// <reference path="../Avatar.FaceExpressionType/index.d.ts" />
/// <reference path="../Avatar.HandBoneType/index.d.ts" />
/// <reference path="../Avatar.JointType/index.d.ts" />
/// <reference path="../Avatar.VisemeType/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.QuaternionSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"capability","capability":"avatarSDK","orCapability":""}]
*/


declare interface Avatar extends SceneObjectBase {

/**
```
getMaterial(matName: string): string
```

*/
getMaterial(matName: string): string

/**
```
getMaterialNamesForSubmesh(avatarSubmesh: AvatarSubmesh): Promise<Array<String>>
```

*/
getMaterialNamesForSubmesh(avatarSubmesh: AvatarSubmesh): Promise<Array<String>>

/**
```
loadFromUri_debug(uri: string, streamingType: AvatarStreamingType, solverType: AvatarIkType, renderType: AvatarRenderType, manifestation: AvatarManifestation, lod: AvatarLOD): Promise<void>
```

*/
loadFromUri_debug(uri: string, streamingType: AvatarStreamingType, solverType: AvatarIkType, renderType: AvatarRenderType, manifestation: AvatarManifestation, lod: AvatarLOD): Promise<void>

/**
```
loadOwn(streamingType: AvatarStreamingType, solverType: AvatarIkType, renderType: AvatarRenderType, peerId: string, manifestation: AvatarManifestation, lod: AvatarLOD): Promise<void>
```

*/
loadOwn(streamingType: AvatarStreamingType, solverType: AvatarIkType, renderType: AvatarRenderType, peerId: string, manifestation: AvatarManifestation, lod: AvatarLOD): Promise<void>

/**
```
loadRemote(peerId: string): Promise<void>
```

*/
loadRemote(peerId: string): Promise<void>

/**
```
loadRemoteAvatarFromUri_debug(uri: string): Promise<void>
```

*/
loadRemoteAvatarFromUri_debug(uri: string): Promise<void>

/**
```
loadSelfAvatarFromUri_debug(uri: string, useBodyAPI: boolean, renderType: AvatarRenderType, peerId: string): Promise<void>
```

*/
loadSelfAvatarFromUri_debug(uri: string, useBodyAPI: boolean, renderType: AvatarRenderType, peerId: string): Promise<void>

/**
```
playbackStart(): Promise<void>
```

*/
playbackStart(): Promise<void>

/**
```
playbackStop(): Promise<void>
```

*/
playbackStop(): Promise<void>

/**
```
recordStart(): Promise<void>
```

*/
recordStart(): Promise<void>

/**
```
recordStop(): Promise<void>
```

*/
recordStop(): Promise<void>

/**
```
setEyeRotations(leftRotation: QuaternionSignal, rightRotation: QuaternionSignal): Promise<void>
```

*/
setEyeRotations(leftRotation: QuaternionSignal, rightRotation: QuaternionSignal): Promise<void>

/**
```
setFaceExpression(type: FaceExpressionType, signal: ScalarSignal): Promise<void>
```

*/
setFaceExpression(type: FaceExpressionType, signal: ScalarSignal): Promise<void>

/**
```
setFaceExpressions(signals: Array<ScalarSignal>): Promise<void>
```

*/
setFaceExpressions(signals: Array<ScalarSignal>): Promise<void>

/**
```
setFaceExpressionsLipSyncBlendWeight(signal: ScalarSignal): Promise<void>
```

*/
setFaceExpressionsLipSyncBlendWeight(signal: ScalarSignal): Promise<void>

/**
```
setHandBoneRotation(handBoneType: HandBoneType, rotationSignal: QuaternionSignal): Promise<void>
```

*/
setHandBoneRotation(handBoneType: HandBoneType, rotationSignal: QuaternionSignal): Promise<void>

/**
```
setHandIsTracked(leftHandIsTracked: BoolSignal, rightHandIsTracked: BoolSignal): Promise<unknown>
```

*/
setHandIsTracked(leftHandIsTracked: BoolSignal, rightHandIsTracked: BoolSignal): Promise<unknown>

/**
```
setHandTransforms(leftHand?: TransformSignal, rightHand?: TransformSignal): Promise<void>
```

*/
setHandTransforms(leftHand?: TransformSignal, rightHand?: TransformSignal): Promise<void>

/**
```
setHandWristTransforms(leftWristTransformSignal: TransformSignal, rightWristTransformSignal: TransformSignal): Promise<unknown>
```

*/
setHandWristTransforms(leftWristTransformSignal: TransformSignal, rightWristTransformSignal: TransformSignal): Promise<unknown>

/**
```
setHeadTransform(headTransform: TransformSignal): Promise<void>
```

*/
setHeadTransform(headTransform: TransformSignal): Promise<void>

/**
```
setJointTransform(type: JointType, transform: TransformSignal): Promise<void>
```

*/
setJointTransform(type: JointType, transform: TransformSignal): Promise<void>

/**
```
setLipSyncViseme(type: VisemeType, v: ScalarSignal): Promise<void>
```

*/
setLipSyncViseme(type: VisemeType, v: ScalarSignal): Promise<void>

/**
```
setLipSyncVisemes(v: Array<ScalarSignal>): Promise<void>
```

*/
setLipSyncVisemes(v: Array<ScalarSignal>): Promise<void>

/**
```
setMaterial(matName: string, mat: MaterialBase): Promise<unknown>
```

*/
setMaterial(matName: string, mat: MaterialBase): Promise<unknown>

/**
```
setTPose(pose: TPose): Promise<void>
```

*/
setTPose(pose: TPose): Promise<void>

}
