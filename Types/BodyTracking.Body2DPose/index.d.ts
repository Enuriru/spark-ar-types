/// <reference path="../BodyTracking.Body2DArm/index.d.ts" />
/// <reference path="../BodyTracking.Body2DLeg/index.d.ts" />
/// <reference path="../BodyTracking.Body2DTorso/index.d.ts" />
/// <reference path="../BodyTracking.KeyPoint2D/index.d.ts" />


/**
[{"kind":"capability","capability":"bodyTracking2DKeyPoints","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `Body2DPose` class exposes details of a tracked body's 2d key points.
*/
declare interface Body2DPose {

/**
```
(get) head: Body2DHead
(set) (Not Available)
```

Returns a Body2DHead object representing head.
*/
head: Body2DHead

/**
```
(get) leftArm: Body2DArm
(set) (Not Available)
```

Returns a Body2DArm object representing left arm.
*/
leftArm: Body2DArm

/**
```
(get) leftLeg: Body2DLeg
(set) (Not Available)
```

Returns a Body2DLeg object representing left leg.
*/
leftLeg: Body2DLeg

/**
```
(get) neck: KeyPoint2D
(set) (Not Available)
```

Returns a KeyPoint2D object representing the position of the center of the neck
*/
neck: KeyPoint2D

/**
```
(get) rightArm: Body2DArm
(set) (Not Available)
```

Returns a Body2DArm object representing right arm.
*/
rightArm: Body2DArm

/**
```
(get) rightLeg: Body2DLeg
(set) (Not Available)
```

Returns a Body2DLeg object representing right leg.
*/
rightLeg: Body2DLeg

/**
```
(get) torso: Body2DTorso
(set) (Not Available)
```

Returns a Body2DTorso object representing torso.
*/
torso: Body2DTorso

}
