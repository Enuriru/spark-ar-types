/**
The `TrackingStateReason` enum describes the possible reasons why
the world tracker may be experiencing limited tracking quality.
Used by `WorldTrackingModule.stateReason`, if the value returned
by `WorldTrackingModule.state` is `LIMITED`.
*/
declare enum TrackingStateReason {

/**
The device is moving too fast for accurate tracking.
*/
EXCESSIVE_MOTION,

/**
The world tracker is initializing.
*/
INITIALIZING,

/**
The scene does not contain sufficient distinguishing features for accurate tracking.
*/
INSUFFICIENT_FEATURES,

/**
The scene is not sufficiently lit for accurate tracking.
*/
INSUFFICIENT_LIGHT,

/**
The world tracker is not experiencing limited tracking quality.
*/
NONE,

}
