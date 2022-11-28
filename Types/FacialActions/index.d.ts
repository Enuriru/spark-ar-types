/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../FacialActions.Action/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


declare interface FacialActions extends Module {

/**
```
blendShapeFittedError(face: Face): ScalarSignal
```

Returns a 'ScalarSignal` containing the error of the latest fitted expression tracker model fit.
*/
blendShapeFittedError(face: Face): ScalarSignal

/**
```
browLowererLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `BrowLowererLeft`.
*/
browLowererLeft(face: Face): ScalarSignal

/**
```
browLowererRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `BrowLowererRight`.
*/
browLowererRight(face: Face): ScalarSignal

/**
```
calibrationWeight(face: Face, weightIndex: number): ScalarSignal
```

Returns a 'ScalarSignal` containing the index of the latest fitted expression tracker model fit.
*/
calibrationWeight(face: Face, weightIndex: number): ScalarSignal

/**
```
chinRaiser(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `ChinRaiser`.
*/
chinRaiser(face: Face): ScalarSignal

/**
```
chinRaiserTop(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `ChinRaiserTop`.
*/
chinRaiserTop(face: Face): ScalarSignal

/**
```
dimplerLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `DimplerLeft`.
*/
dimplerLeft(face: Face): ScalarSignal

/**
```
dimplerRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `DimplerRight`.
*/
dimplerRight(face: Face): ScalarSignal

/**
```
expressionModelNumber(face: Face): ScalarSignal
```

Returns a 'ScalarSignal` containing the error of the latest fitted expression tracker model fit.
*/
expressionModelNumber(face: Face): ScalarSignal

/**
```
eyeCloseLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `EyeCloseLeft`.
*/
eyeCloseLeft(face: Face): ScalarSignal

/**
```
eyeCloseRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `EyeCloseRight`.
*/
eyeCloseRight(face: Face): ScalarSignal

/**
```
getWeight(action: Action, face: Face | null): ScalarSignal
```

*/
getWeight(action: Action, face: Face | null): ScalarSignal

/**
```
innerBrowRaiser(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `InnerBrowRaiser`.
*/
innerBrowRaiser(face: Face): ScalarSignal

/**
```
jawDrop(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `JawDrop`.
*/
jawDrop(face: Face): ScalarSignal

/**
```
jawSidewaysLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `JawSidewaysLeft`.
*/
jawSidewaysLeft(face: Face): ScalarSignal

/**
```
jawSidewaysRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `JawSidewaysRight`.
*/
jawSidewaysRight(face: Face): ScalarSignal

/**
```
lidTightenerLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LidTightenerLeft`.
*/
lidTightenerLeft(face: Face): ScalarSignal

/**
```
lidTightenerRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LidTightenerRight`.
*/
lidTightenerRight(face: Face): ScalarSignal

/**
```
lipCornerDepressorLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipCornerDepressorLeft`.
*/
lipCornerDepressorLeft(face: Face): ScalarSignal

/**
```
lipCornerDepressorRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipCornerDepressorRight`.
*/
lipCornerDepressorRight(face: Face): ScalarSignal

/**
```
lipCornerPullerLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipCornerPullerLeft`.
*/
lipCornerPullerLeft(face: Face): ScalarSignal

/**
```
lipCornerPullerRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipCornerPullerRight`.
*/
lipCornerPullerRight(face: Face): ScalarSignal

/**
```
lipDepressorLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipDepressorLeft`.
*/
lipDepressorLeft(face: Face): ScalarSignal

/**
```
lipDepressorRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipDepressorRight`.
*/
lipDepressorRight(face: Face): ScalarSignal

/**
```
lipFunnelerBottom(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipFunnelerBottom`.
*/
lipFunnelerBottom(face: Face): ScalarSignal

/**
```
lipFunnelerTop(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipFunnelerTop`.
*/
lipFunnelerTop(face: Face): ScalarSignal

/**
```
lipPressorLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipPressorLeft`.
*/
lipPressorLeft(face: Face): ScalarSignal

/**
```
lipPressorRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipPressorRight`.
*/
lipPressorRight(face: Face): ScalarSignal

/**
```
lipStretchLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipStretchLeft`.
*/
lipStretchLeft(face: Face): ScalarSignal

/**
```
lipStretchRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipStretchRight`.
*/
lipStretchRight(face: Face): ScalarSignal

/**
```
lipSuck(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `LipSuck`.
*/
lipSuck(face: Face): ScalarSignal

/**
```
mouthMoveLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `MouthMoveLeft`.
*/
mouthMoveLeft(face: Face): ScalarSignal

/**
```
mouthMoveRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `MouthMoveRight`.
*/
mouthMoveRight(face: Face): ScalarSignal

/**
```
noseWrinklerLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `NoseWrinklerLeft`.
*/
noseWrinklerLeft(face: Face): ScalarSignal

/**
```
noseWrinklerRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `NoseWrinklerRight`.
*/
noseWrinklerRight(face: Face): ScalarSignal

/**
```
outerBrowRaiserLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `OuterBrowRaiserLeft`.
*/
outerBrowRaiserLeft(face: Face): ScalarSignal

/**
```
outerBrowRaiserRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `OuterBrowRaiserRight`.
*/
outerBrowRaiserRight(face: Face): ScalarSignal

/**
```
pucker(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `Pucker`.
*/
pucker(face: Face): ScalarSignal

/**
```
reset(): Promise<void>
```

Triggers a re-calibration of model for the expression tracking module.
*/
reset(): Promise<void>

/**
```
upperLidRaiserLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `UpperLidRaiserLeft`.
*/
upperLidRaiserLeft(face: Face): ScalarSignal

/**
```
upperLidRaiserRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `UpperLidRaiserRight`.
*/
upperLidRaiserRight(face: Face): ScalarSignal

/**
```
upperLipRaiserLeft(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `UpperLipRaiserLeft`.
*/
upperLipRaiserLeft(face: Face): ScalarSignal

/**
```
upperLipRaiserRight(face: Face): ScalarSignal
```

Returns a `ScalarSignal` containing the weight associated with the facial action named `UpperLipRaiserRight`.
*/
upperLipRaiserRight(face: Face): ScalarSignal

}
