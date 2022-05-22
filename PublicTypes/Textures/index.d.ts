/// <reference path="../Textures.CameraTexture/index.d.ts" />
/// <reference path="../Textures.CanvasTexture/index.d.ts" />
/// <reference path="../Textures.ColorTexture/index.d.ts" />
/// <reference path="../Textures.DeepLinkTexture/index.d.ts" />
/// <reference path="../Textures.GalleryTexture/index.d.ts" />
/// <reference path="../Textures.GalleryTextureMediaBase/index.d.ts" />
/// <reference path="../Textures.GalleryTextureMediaImage/index.d.ts" />
/// <reference path="../Textures.GalleryTextureMediaVideo/index.d.ts" />
/// <reference path="../Textures.ImageTexture/index.d.ts" />
/// <reference path="../Textures.SceneDepthTexture/index.d.ts" />
/// <reference path="../Textures.SegmentationTexture/index.d.ts" />
/// <reference path="../Textures.SequenceTexture/index.d.ts" />
/// <reference path="../Textures.SourceImageRegionTexture/index.d.ts" />
/// <reference path="../Textures.SubTexture/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Textures.TextureColorEncoding/index.d.ts" />
/// <reference path="../Textures.TextureFilteringMode/index.d.ts" />
/// <reference path="../Textures.TextureWrapMode/index.d.ts" />
declare class TexturesModule {
/**
*  
 * clone(texture: string | TextureBase, initialState?: {[key: string]: any}): Promise<TextureBase>
 *  
 * 
 * Clone a texture asynchronously.
 * When creating the textures, keep the following in mind:
 * - Cloning a texture with an identifier that doesn't exist fails the `Promise`.
 * - New textures always get assigned a globally unique `name` and `identifier`.
 * - `initialState` is optional, but encouraged to be used.
 * - All properties that are using Signal types get assigned a ConstSignal with last value. Use initialState to override it.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static clone(texture: TextureBase | string, initialState?: {[key: string]: any}): Promise<TextureBase>;

/**
*  
 * create(className: string, initialState?: {[key: string]: any}): Promise<TextureBase>
 *  
 * 
 * Create a texture asynchronously.
 * When creating the textures, keep the following in mind:
 * - All textures must have an existing class.
 * - New textures always get assigned a globally unique `name` and `identifier`.
 * - `initialState` is optional, but encouraged to be used.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static create(className: string, initialState?: {[key: string]: any}): Promise<TextureBase>;

/**
*  
 * destroy(texture: string | TextureBase): Promise<void>
 *  
 * 
 * Destroy a texture asynchronously.
 * When destroying the textures, keep the following in mind:
 * - All bound properties will be automatically unbound on destruction.
 * - Destroying a texture that doesn't exist fails the `Future`.
 * - Destroying a set of textures that was created in Studio fails the `Future`.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static destroy(texture: TextureBase | string): Promise<void>;

/**
*  
 * findFirst(textureName: string): Promise<TextureBase | null>
 *  
 * 
 * Returns a promise that is resolved with the texture of a requested name or null if none was found.
 * **See Also**: `Textures.findUsingPattern`, `Textures.getAll`.
 */
static findFirst(textureName: string): Promise<TextureBase | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<TextureBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the textures matching the name pattern or empty array if none was found.
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the textures.
 * `findUsingPattern("*A")` will retrieve all of the textures suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the textures prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the textures containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `Textures.getAll`, `Textures.findFirst`.
 */
static findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<TextureBase>>;

/**
*  
 * getAll(): Promise<Array<TextureBase>>
 *  
 * 
 * Returns a promise that is resolved with all of the textures.
 * **See Also**: `Textures.findUsingPattern`, `Textures.findFirst`.
 */
static getAll(): Promise<Array<TextureBase>>;

/**
 * `TextureColorEncoding` describes different color encoding formats used for data in a texture.
 * @property LINEAR Linear RGB Encoding
 * @property RGBD RGB-D Encoding, a combination of a RGB image and its corresponding depth image.
 * @property SRGB sRGB Encoding
 */
static readonly TextureColorEncoding: {
  LINEAR: "LINEAR",
  RGBD: "RGBD",
  SRGB: "SRGB",
}
/**
 * `TextureFilteringMode` describes different modes for how a texture
should address size mismatch between the actual image data, and it's footprint when rendered.
 * @property BILINEAR Applies bilinear interpolation.
 * @property BILINEAR_MIPMAP Apply bilinear interpolation, and mipmapping.
 * @property NEAREST Use nearest neighbor interpolation when minifying or magnifying a texture.
 * @property TRILINEAR Apply trilinear interpolation.
 */
static readonly TextureFilteringMode: {
  BILINEAR: "BILINEAR",
  BILINEAR_MIPMAP: "BILINEAR_MIPMAP",
  NEAREST: "NEAREST",
  TRILINEAR: "TRILINEAR",
}
/**
 * `TextureWrapMode` describes different ways a given texture should be sampled
when a coordinate falls outside of the 0->1 range.
 * @property CLAMP Clamps the coordinates in the 0->1 range.
 * @property MIRROR The texture will be repeated, but it will be mirrored when
the integer part of the coordinate is odd.
 * @property REPEAT The integer part of the coordinate will be ignored, resulting in repeating pattern.
 */
static readonly TextureWrapMode: {
  CLAMP: "CLAMP",
  MIRROR: "MIRROR",
  REPEAT: "REPEAT",
}
}
export = TexturesModule;
