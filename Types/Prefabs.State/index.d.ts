/**
The `State` enum describes the state of a `Prefab`.
*/
declare enum State {

/**
Indicates that the resource has been downloaded and is available.
*/
AVAILABLE,

/**
Indicates that the prefab is in the default state.
*/
DEFAULT,

/**
Indicates that the resource failed to download.
*/
FAILED,

/**
Indicates that the resource download is pending.
*/
PENDING,

}
