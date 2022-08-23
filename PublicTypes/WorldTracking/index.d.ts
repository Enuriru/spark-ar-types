/// <reference path="../WorldTracking.ARPointTrackable/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackable/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackableState/index.d.ts" />
/// <reference path="../WorldTracking.ARTrackableType/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../WorldTracking.HitTestResult/index.d.ts" />
/// <reference path="../WorldTracking.HitTestType/index.d.ts" />
/// <reference path="../Reactive.Point3D/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../WorldTracking.TrackingState/index.d.ts" />
/// <reference path="../WorldTracking.TrackingStateReason/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
declare class WorldTrackingModule {
/**
* ```
(get) state: StringSignal<TrackingState>
(set) (Not Available)
```

Returns the current state of the world tracker.
*/
static readonly state: StringSignal<TrackingState>;
/**
* ```
(get) stateReason: StringSignal<TrackingStateReason>
(set) (Not Available)
```

Returns the reason the world tracker is experiencing limited tracking quality,
if the value returned by `WorldTrackingModule.state` is `LIMITED`.
*/
static readonly stateReason: StringSignal<TrackingStateReason>;
/**
*  
 * addPointTrackable(config: {trackable?: ARTrackable, worldPosition: Point3D}): Promise<ARPointTrackable>
 *  
 * 
 */
static addPointTrackable(config: {trackable?: ARTrackable, worldPosition: Point3D}): Promise<ARPointTrackable>;

/**
*  
 * deletePointTrackable(referencePoint: ARPointTrackable): void
 *  
 * 
 * Deletes a point trackable that was added using the `addPointTrackable()` method.
 */
static deletePointTrackable(referencePoint: ARPointTrackable): void;

/**
*  
 * hitTest(config: {fallbackToEstimatedPlanes?: false | true, hitTestType?: HitTestType, screenLocation: Vec2Signal}): Promise<Array<HitTestResult>>
 *  
 * 
 * Returns the point of intersection of the hit test on all intersecting planes, both horizontal and vertical, in the WorldTracker's
 * local coordinates (in 3D units), as well as the associated trackables (planes).
 * The results of the hit test are sorted in order of increasing distance to the camera.
 * 
 * The optional `hitTestType` argument can be used to specify the type of plane to hit test against, for example, horizontal planes only.
 * 
 * The optional 'fallbackToEstimatedPlanes' argument can be used to set whether to fall back to using plane estimation, a less accurate
 * estimate of real world surfaces than tha provided by the default plane detection algorithm which continuously analyzes the scene to
 * detect planes in the view.
 */
static hitTest(config: {fallbackToEstimatedPlanes?: false | true, hitTestType?: HitTestType, screenLocation: Vec2Signal}): Promise<Array<HitTestResult>>;

/**
*  
 * onTrackableAdded(): EventSource<ARTrackable>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits an ARTrackable each time a trackable is detected in the view.
 */
static onTrackableAdded(): EventSource<ARTrackable>;

/**
*  
 * onTrackableDeleted(): EventSource<ARTrackable>
 *  
 * 
 * Returns an [`EventSource`](/classes/reactivemodule.eventsource), to which you may subscribe,
 * that emits an ARTrackable each time a trackable is deleted.
 */
static onTrackableDeleted(): EventSource<ARTrackable>;

/**
 * 
 * @property RAY_CAST 
 * @property SHADER_PICK 
 */
static readonly HitTestType: {
  RAY_CAST: "RAY_CAST",
  SHADER_PICK: "SHADER_PICK",
}
/**
 * The `ARTrackableState` enum describes the states that the trackable can be in. Used by
`ARTrackable.state`.
 * @property INITIALIZING The trackable is initializing.
 * @property LOCALIZATION_ERROR Localization has failed.
 * @property MAP_UNAVAILABLE_ERROR No map available at the current location.
 * @property NETWORK_ERROR Network error.
 * @property TRACKING The trackable is being tracked.
 * @property UNKNOWN_ERROR Unknown error.
 */
static readonly ARTrackableState: {
  INITIALIZING: "INITIALIZING",
  LOCALIZATION_ERROR: "LOCALIZATION_ERROR",
  MAP_UNAVAILABLE_ERROR: "MAP_UNAVAILABLE_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  TRACKING: "TRACKING",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
}
/**
 * The `ARTrackableType` enum describes the types of trackable that
can be detected and tracked. Used by `ARTrackable.type`.
 * @property FEATURE_POINT The trackable is a feature point.
 * @property GEO The trackable is a geo trackable.
 * @property HORIZONTAL_PLANE The trackable is a horizontal plane.
 * @property REMOTE The trackable is a remote trackable.
 * @property UNKNOWN Unknown trackable type.
 * @property VERTICAL_PLANE The trackable is a vertical plane.
 */
static readonly ARTrackableType: {
  FEATURE_POINT: "FEATURE_POINT",
  GEO: "GEO",
  HORIZONTAL_PLANE: "HORIZONTAL_PLANE",
  REMOTE: "REMOTE",
  UNKNOWN: "UNKNOWN",
  VERTICAL_PLANE: "VERTICAL_PLANE",
}
/**
 * The `HitTestType` enum lists the types of hit test supported.
 * @property ANY_PLANE Hit tests are performed on both horizontal and vertical surface planes.
 * @property FEATURE_POINT Hit tests are limited to feature points only.
 * @property HORIZONTAL_PLANE Hit tests are limited to horizontal surface planes only.
 * @property VERTICAL_PLANE Hit tests are limited to vertical surface planes only.
 */
static readonly HitTestType: {
  ANY_PLANE: "ANY_PLANE",
  FEATURE_POINT: "FEATURE_POINT",
  HORIZONTAL_PLANE: "HORIZONTAL_PLANE",
  VERTICAL_PLANE: "VERTICAL_PLANE",
}
/**
 * The `TrackingState` enum describes the states that the world tracker can be in. Used by
`WorldTrackingModule.state`.
 * @property LIMITED Tracking is initializing or has paused.
 * @property NOT_AVAILABLE Tracking has not started or has stopped.
 * @property TRACKING Tracking is running normally.
 */
static readonly TrackingState: {
  LIMITED: "LIMITED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  TRACKING: "TRACKING",
}
/**
 * The enum describes the possible reasons why
the world tracker may be experiencing limited tracking quality.
It's a unified definition of TrackingStateReason regardless of the
platform, e.g. arcore, arkit, first frame (FF). FF does not provide
tracking failure reason, and will be default to None.
 * @property EXCESSIVE_MOTION The device is moving too fast for accurate tracking.
 * @property INITIALIZING The world tracker is initializing.
 * @property INSUFFICIENT_FEATURES The scene does not contain sufficient distinguishing features for accurate tracking.
 * @property INSUFFICIENT_LIGHT The scene is not sufficiently lit for accurate tracking.
 * @property NONE The world tracker is not experiencing limited tracking quality.
 */
static readonly TrackingStateReason: {
  EXCESSIVE_MOTION: "EXCESSIVE_MOTION",
  INITIALIZING: "INITIALIZING",
  INSUFFICIENT_FEATURES: "INSUFFICIENT_FEATURES",
  INSUFFICIENT_LIGHT: "INSUFFICIENT_LIGHT",
  NONE: "NONE",
}
}
export = WorldTrackingModule;
