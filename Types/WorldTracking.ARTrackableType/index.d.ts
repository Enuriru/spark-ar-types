/**
The `ARTrackableType` enum describes the types of trackable that
can be detected and tracked. Used by `ARTrackable.type`.
*/
declare enum ARTrackableType {

/**
The trackable is a feature point.
*/
FEATURE_POINT,

/**
The trackable is a geo trackable.
*/
GEO,

/**
The trackable is a horizontal plane.
*/
HORIZONTAL_PLANE,

/**
The trackable is a remote trackable.
*/
REMOTE,

/**
Unknown trackable type.
*/
UNKNOWN,

/**
The trackable is a vertical plane.
*/
VERTICAL_PLANE,

}
