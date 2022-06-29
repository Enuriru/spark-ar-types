/**
The `ARGeoTrackableElevationType` enum describes how the elevation of a GeoTrackable will be
computed.
*/
declare enum ARGeoTrackableElevationType {

/**
The GeoTrackable elevation will match the provided altitude value.
*/
ALTITUDE_BASED,

/**
The GeoTrackable elevation will match the camera elevation.
*/
CAMERA_BASED,

}
