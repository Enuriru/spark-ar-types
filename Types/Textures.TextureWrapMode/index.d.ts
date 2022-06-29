/**
`TextureWrapMode` describes different ways a given texture should be sampled
when a coordinate falls outside of the 0->1 range.
*/
declare enum TextureWrapMode {

/**
Clamps the coordinates in the 0->1 range.
*/
CLAMP,

/**
The texture will be repeated, but it will be mirrored when
the integer part of the coordinate is odd.
*/
MIRROR,

/**
The integer part of the coordinate will be ignored, resulting in repeating pattern.
*/
REPEAT,

}
