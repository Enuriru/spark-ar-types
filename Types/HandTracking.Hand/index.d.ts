/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />

/**
Exposes details of a tracked hand.
 * @example
//============================================================================
// Binds the 3D position of a plane to a detected hand, and binds the scale
// and 2D position of a rectangle to a second hand in the camera view.
//
// Project setup:
// - One plane: plane0
// - One rectangle: rectangle0
//
// Required project capabilities:
// - Hand Tracking (auto added on HandTracking module import)
//
//============================================================================

// Load in the required modules
const HandTracking = require('HandTracking');
const Scene = require('Scene');

(async function() { // Enable async/await in JS [part 1]

    //========================================================================
    // Bind the position of a plane to the first detected hand, in
    // three-dimensional space.
    //========================================================================

    // Locate the plane and focal distance in the scene
    const [plane, focalDistance] = await Promise.all([

        Scene.root.findFirst('plane0'),
        Scene.root.findFirst('Focal Distance')
    ]);

    // Create a reference to the first hand detected in the camera view
    const firstHand = HandTracking.hand(0);

    // Create a reference to the focal distance's z axis position
    const focalDistanceZPosition = focalDistance.transform.z;

    // Bind the position of the plane to the hand position, relative to
    // the camera coordinate system
    plane.transform = firstHand.cameraTransform;

    // Overwrite the z axis position to account for focal distance
    plane.transform.z = firstHand.cameraTransform.z.sub(focalDistanceZPosition);



    //========================================================================
    // Bind the scale of a rectangle to the second detected hand's
    // bounding box, in two-dimensional space.
    //
    // Two hands must be in the camera view for this to trigger.
    //========================================================================

    // Locate the rectangle and canvas in the scene
    const [rectangle, canvas] = await Promise.all([

        Scene.root.findFirst('rectangle0'),
        Scene.root.findFirst('canvas0')
    ]);

    // Create a reference to the second hand detected in the camera view
    const hand = HandTracking.hand(1);

    // Create a reference to the hand's bounding box
    const boundingBox = hand.boundingBox;

    // Scale the rectangle to 1 in both axis
    rectangle.width = 1;
    rectangle.height = 1;

    // Find the center of the bounding box relative to the canvas
    const scaledX = boundingBox.center.x.mul(canvas.width);
    const scaledY = boundingBox.center.y.mul(canvas.height);

    // Bind the position of the rectangle to the bounding box position
    rectangle.transform.x = scaledX;
    rectangle.transform.y = scaledY;

    // Bind the scale of the rectangle to the bounding box scale
    // relative to the canvas
    rectangle.transform.scaleX = canvas.width.mul(boundingBox.width);
    rectangle.transform.scaleY = canvas.height.mul(boundingBox.height);

})(); // Enable async/await in JS [part 2]
*/
declare interface Hand {

/**
```
(get) boundingBox: BoundingBoxSignal
(set) (Not Available)
```

The bounding box of the tracked hand relative to normalized screen space, as a [`BoundingBoxSignal`](/classes/ReactiveModule.BoundingBoxSignal).
*/
boundingBox: BoundingBoxSignal

/**
```
(get) cameraTransform: TransformSignal
(set) (Not Available)
```

The hand transform relative to the camera coordinate system, as a [`TransformSignal`](/classes/ReactiveModule.TransformSignal)
*/
cameraTransform: TransformSignal

/**
```
(get) gesture: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` containing the name of the hand gesture.
*/
gesture: StringSignal

/**
```
(get) gestureType: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` containing the name of the hand gesture.
*/
gestureType: StringSignal

/**
```
(get) indexFingerBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the index finger.
*/
indexFingerBase: PointSignal

/**
```
(get) indexFingerDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the index finger.
*/
indexFingerDistal: PointSignal

/**
```
(get) indexFingerProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the index finger.
*/
indexFingerProximal: PointSignal

/**
```
(get) indexFingerTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the index finger.
*/
indexFingerTip: PointSignal

/**
```
(get) isTracked: BoolSignal
(set) (Not Available)
```

Indicates whether the hand is being tracked in the current frame, with a [`BoolSignal`](/classes/ReactiveModule.BoolSignal).
If `false`, the value of the `Hand` object's properties represent their value during the frame they were most recently tracked in.
*/
isTracked: BoolSignal

/**
```
(get) littleFingerBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the little finger.
*/
littleFingerBase: PointSignal

/**
```
(get) littleFingerDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the little finger.
*/
littleFingerDistal: PointSignal

/**
```
(get) littleFingerProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the little finger.
*/
littleFingerProximal: PointSignal

/**
```
(get) littleFingerTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the little finger.
*/
littleFingerTip: PointSignal

/**
```
(get) middleFingerBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the middle finger.
*/
middleFingerBase: PointSignal

/**
```
(get) middleFingerDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the middle finger.
*/
middleFingerDistal: PointSignal

/**
```
(get) middleFingerProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the middle finger.
*/
middleFingerProximal: PointSignal

/**
```
(get) middleFingerTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the middle finger.
*/
middleFingerTip: PointSignal

/**
```
(get) ringFingerBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the ring finger.
*/
ringFingerBase: PointSignal

/**
```
(get) ringFingerDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the ring finger.
*/
ringFingerDistal: PointSignal

/**
```
(get) ringFingerProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the ring finger.
*/
ringFingerProximal: PointSignal

/**
```
(get) ringFingerTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the ring finger.
*/
ringFingerTip: PointSignal

/**
```
(get) thumbBase: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the base of the thumb finger.
*/
thumbBase: PointSignal

/**
```
(get) thumbDistal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the distal joint of the thumb finger.
*/
thumbDistal: PointSignal

/**
```
(get) thumbProximal: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the proximal joint of the thumb finger.
*/
thumbProximal: PointSignal

/**
```
(get) thumbTip: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the tip of the thumb finger.
*/
thumbTip: PointSignal

/**
```
(get) wrist: PointSignal
(set) (Not Available)
```

Specifies the 3D position of the wrist center point of the hand.
*/
wrist: PointSignal

}
