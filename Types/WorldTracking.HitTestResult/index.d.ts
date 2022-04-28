/// <reference path="../Reactive.Point3D/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackable/index.d.ts" />


/**
[{"kind":"capability","capability":"multiplane","orCapability":""}]
*/


/**
The `HitTestResult` class describes a single result of the hitTest() method.
*/
declare interface HitTestResult {

/**
```
(get) intersectionPoint: Point3D
(set) (Not Available)
```

Returns the point of intersection of the (plane/feature point) with the ray in 3D space.
*/
intersectionPoint: Point3D

/**
```
(get) trackable: ARTrackable | null
(set) (Not Available)
```

Returns the trackable (plane/feature point) that intersected with the raycast during a hitTest.
*/
trackable: ARTrackable | null

}
