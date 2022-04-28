/**
The `AntiderivativeOverflowBehaviour` enum describes the recovery technique used when an
antiderivative overflows.
*/
declare enum AntiderivativeOverflowBehaviour {

/**
Clamp to either min and max
*/
CLAMP,

/**
Start from the other end of the interval (min,max)
*/
WRAP,

}
