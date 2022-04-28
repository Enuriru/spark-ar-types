/**
The `ARTrackableState` enum describes the states that the trackable can be in. Used by
`ARTrackable.state`.
*/
declare enum ARTrackableState {

/**
The trackable is initializing.
*/
INITIALIZING,

/**
Localization has failed.
*/
LOCALIZATION_ERROR,

/**
No map available at the current location.
*/
MAP_UNAVAILABLE_ERROR,

/**
Network error.
*/
NETWORK_ERROR,

/**
The trackable is being tracked.
*/
TRACKING,

/**
Unknown error.
*/
UNKNOWN_ERROR,

}
