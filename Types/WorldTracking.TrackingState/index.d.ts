/**
The `TrackingState` enum describes the states that the world tracker can be in. Used by
`WorldTrackingModule.state`.
*/
declare enum TrackingState {

/**
Tracking is initializing or has paused.
*/
LIMITED,

/**
Tracking has not started or has stopped.
*/
NOT_AVAILABLE,

/**
Tracking is running normally.
*/
TRACKING,

}
