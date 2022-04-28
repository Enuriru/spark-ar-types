/// <reference path="../PortalWorldModel.Arm/index.d.ts" />
/// <reference path="../PortalWorldModel.Head/index.d.ts" />
/// <reference path="../PortalWorldModel.Leg/index.d.ts" />
/// <reference path="../PortalWorldModel.Torso/index.d.ts" />
/// <reference path="../Reactive.Box2DSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `Person` class describes a world model entity.
*/
declare interface Person {

/**
```
(get) box: Box2DSignal
(set) (Not Available)
```

Gets the pose bounding box of the given person.
*/
box: Box2DSignal

/**
```
(get) head: Head
(set) (Not Available)
```

Gets the head component of this person.
*/
head: Head

/**
```
(get) leftArm: Arm
(set) (Not Available)
```

Gets the left arm component of this person.
*/
leftArm: Arm

/**
```
(get) leftLeg: Leg
(set) (Not Available)
```

Gets the left leg component of this person.
*/
leftLeg: Leg

/**
```
(get) poseId: ScalarSignal
(set) (Not Available)
```

Gets the unique pose ID of the given person.
*/
poseId: ScalarSignal

/**
```
(get) rightArm: Arm
(set) (Not Available)
```

Gets the right arm component of this person.
*/
rightArm: Arm

/**
```
(get) rightLeg: Leg
(set) (Not Available)
```

Gets the right leg component of this person.
*/
rightLeg: Leg

/**
```
(get) torso: Torso
(set) (Not Available)
```

Gets the torso component of this person.
*/
torso: Torso

}
