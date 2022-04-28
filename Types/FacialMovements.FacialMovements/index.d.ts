/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

declare interface FacialMovements extends Module {

/**
```
innerBrowUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `InnerBrowUp`.
*/
innerBrowUp(face: Face): ScalarSignal

/**
```
jawDown(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `JawDown`.
*/
jawDown(face: Face): ScalarSignal

/**
```
leftBrowDown(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftBrowDown`.
*/
leftBrowDown(face: Face): ScalarSignal

/**
```
leftEyeClose(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftEyeClose`.
*/
leftEyeClose(face: Face): ScalarSignal

/**
```
leftEyeSquint(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftEyeSquint`.
*/
leftEyeSquint(face: Face): ScalarSignal

/**
```
leftLipsCornerUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftLipsCornerUp`.
*/
leftLipsCornerUp(face: Face): ScalarSignal

/**
```
leftLowerLipDown(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftLowerLipDown`.
*/
leftLowerLipDown(face: Face): ScalarSignal

/**
```
leftMouthDimple(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftMouthDimple`.
*/
leftMouthDimple(face: Face): ScalarSignal

/**
```
leftOuterBrowUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftOuterBrowUp`.
*/
leftOuterBrowUp(face: Face): ScalarSignal

/**
```
leftUpperEyeLidUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftUpperEyeLidUp`.
*/
leftUpperEyeLidUp(face: Face): ScalarSignal

/**
```
leftUpperLipUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftUpperLipUp`.
*/
leftUpperLipUp(face: Face): ScalarSignal

/**
```
lipFunnel(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipFunnel`.
*/
lipFunnel(face: Face): ScalarSignal

/**
```
lipsMoveLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsMoveLeft`.
*/
lipsMoveLeft(face: Face): ScalarSignal

/**
```
lipsMoveRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsMoveRight`.
*/
lipsMoveRight(face: Face): ScalarSignal

/**
```
lipsPucker(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsPucker`.
*/
lipsPucker(face: Face): ScalarSignal

/**
```
lowerLipOut(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `LowerLipOut`.
*/
lowerLipOut(face: Face): ScalarSignal

/**
```
rightBrowDown(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightBrowDown`.
*/
rightBrowDown(face: Face): ScalarSignal

/**
```
rightEyeClose(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightEyeClose`.
*/
rightEyeClose(face: Face): ScalarSignal

/**
```
rightEyeSquint(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightEyeSquint`.
*/
rightEyeSquint(face: Face): ScalarSignal

/**
```
rightLipsCornerUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightLipsCornerUp`.
*/
rightLipsCornerUp(face: Face): ScalarSignal

/**
```
rightLowerLipDown(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightLowerLipDown`.
*/
rightLowerLipDown(face: Face): ScalarSignal

/**
```
rightMouthDimple(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightMouthDimple`.
*/
rightMouthDimple(face: Face): ScalarSignal

/**
```
rightOuterBrowUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightOuterBrowUp`.
*/
rightOuterBrowUp(face: Face): ScalarSignal

/**
```
rightUpperEyeLidUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightUpperEyeLidUp`.
*/
rightUpperEyeLidUp(face: Face): ScalarSignal

/**
```
rightUpperLipUp(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightUpperLipUp`.
*/
rightUpperLipUp(face: Face): ScalarSignal

/**
```
upperLipOut(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial movement named `UpperLipOut`.
*/
upperLipOut(face: Face): ScalarSignal

}
