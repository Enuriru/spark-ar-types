/**
The `BlendMode` enum describes how material is blended.
*/
declare enum BlendMode {

/**
Adds pixel values of the source to the destination.
*/
ADD,

/**
Linear interpolation between the pixels of the source and destination as specified by the
alpha values of the source.
*/
ALPHA,

/**
Same as alpha blend mode, but for source with RGB channels of each pixel premultiplied by its
alpha.
*/
ASSOCIATIVE_ALPHA,

/**
Multiplies the RGB channels of each pixel from the source with the values of the corresponding
pixel from the destination.
*/
MULTIPLY,

/**
The non-transparent pixels of the source replace corresponding pixels of the destination.
*/
REPLACE,

/**
Values of each pixels in the source and destination are inverted, multiplied, and then
inverted again.
*/
SCREEN,

/**
Subtracts pixel values of the source from the destination. In case of negative values, black
is displayed.
*/
SUBTRACT,

}
