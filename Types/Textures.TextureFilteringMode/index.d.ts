/**
`TextureFilteringMode` describes different modes for how a texture
should address size mismatch between the actual image data, and it's footprint when rendered.
*/
declare enum TextureFilteringMode {

/**
Applies bilinear interpolation.
*/
BILINEAR,

/**
Apply bilinear interpolation, and mipmapping.
*/
BILINEAR_MIPMAP,

/**
Use nearest neighbor interpolation when minifying or magnifying a texture.
*/
NEAREST,

/**
Apply trilinear interpolation.
*/
TRILINEAR,

}
