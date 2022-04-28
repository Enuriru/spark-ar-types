/**
The `ScalingOption` enum describes how an element is scaled.
*/
declare enum ScalingOption {

/**
Indicates that the resource is is tiled to fill the container.
*/
FILL,

/**
Indicates that the resource is scaled proportionately such that the larger dimension, height
or width, matches the size of the container.
*/
FIT,

/**
Indicates that the resource is scaled proportionately to match the height of the container.
*/
FIT_HEIGHT,

/**
Indicates that the resource is scaled proportionately to match the width of the container.
*/
FIT_WIDTH,

/**
Indicates that no scaling is applied to the element.
*/
IGNORE,

/**
Indicates that the resource is stretched in the height and width dimensions to fill the
container.
*/
STRETCH,

}
