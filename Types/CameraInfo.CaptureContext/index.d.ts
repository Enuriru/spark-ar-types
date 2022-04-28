/**
The `CaptureContext` enum describes current capture context.
*/
declare enum CaptureContext {

/**
Indicates the current capture context is PostCapture, e.g. recoreded media.
*/
POSTCAPTURE,

/**
Indicates the current capture context is PreCapture, aka. live camera.
*/
PRECAPTURE,

/**
Indicates that capture context is unknown.
*/
UNSPECIFIED,

}
