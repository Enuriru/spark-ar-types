/// <reference path="../BodyTracking.Body/index.d.ts" />
/// <reference path="../BodyTracking.Body2DArm/index.d.ts" />
/// <reference path="../BodyTracking.Body2DLeg/index.d.ts" />
/// <reference path="../BodyTracking.Body2DPose/index.d.ts" />
/// <reference path="../BodyTracking.Body2DTorso/index.d.ts" />
/// <reference path="../BodyTracking.KeyPoint2D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class BodyTrackingModule {
/**
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

Returns a `ScalarSignal` representing the count of tracked bodies.
*/
static readonly count: ScalarSignal;
/**
*  
 * body(index: number): Body
 *  
 * 
 * Returns a `Body` object.
 */
static body(index: number): Body;

}
export = BodyTrackingModule;
