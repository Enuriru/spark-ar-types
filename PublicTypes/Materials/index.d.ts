/// <reference path="../Materials.BlendShapeToWarpMapMaterial/index.d.ts" />
/// <reference path="../Materials.BlendedMaterial/index.d.ts" />
/// <reference path="../Materials.ColorPaintMaterial/index.d.ts" />
/// <reference path="../Materials.ComposedMaterial/index.d.ts" />
/// <reference path="../Materials.CullMode/index.d.ts" />
/// <reference path="../Materials.CustomMaterial/index.d.ts" />
/// <reference path="../Materials.DefaultMaterial/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Materials.MetallicRoughnessPbrMaterial/index.d.ts" />
/// <reference path="../Materials.RetouchingMaterial/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
declare class MaterialsModule {
/**
*  
 * clone(material: string | MaterialBase, initialState?: {[key: string]: any}): Promise<MaterialBase>
 *  
 * 
 * Clone a material asynchronously.
 * When creating the materials, keep the following in mind:
 * - Cloning a material with an identifier that doesn't exist fails the `Promise`.
 * - New materials always get assigned a globally unique `name` and `identifier`.
 * - `initialState` is optional, but encouraged to be used.
 * - All properties that are using Signal types get assigned a ConstSignal with last value. Use initialState to override it.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static clone(material: MaterialBase | string, initialState?: {[key: string]: any}): Promise<MaterialBase>;

/**
*  
 * create(className: string, initialState?: {[key: string]: any}): Promise<MaterialBase>
 *  
 * 
 * Create a material asynchronously.
 * When creating the materials, keep the following in mind:
 * - All materials must have an existing class.
 * - New materials always get assigned a globally unique `name` and `identifier`.
 * - `initialState` is optional, but encouraged to be used.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static create(className: string, initialState?: {[key: string]: any}): Promise<MaterialBase>;

/**
*  
 * destroy(material: string | MaterialBase): Promise<void>
 *  
 * 
 * Destroy a material asynchronously.
 * When destroying the materials, keep the following in mind:
 * - All bound properties will be automatically unbound on destruction.
 * - Destroying a material that doesn't exist fails the `Future`.
 * - Destroying a set of Materials that was created in Studio fails the `Future`.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static destroy(material: MaterialBase | string): Promise<void>;

/**
*  
 * findFirst(name: string): Promise<MaterialBase | null>
 *  
 * 
 * Returns a promise that is resolved with the material of a requested name or null if none was found.
 * **See Also**: `Materials.findUsingPattern`, `Materials.getAll`.
 */
static findFirst(name: string): Promise<MaterialBase | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<MaterialBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the materials matching the name pattern or empty array if none was found.
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the materials.
 * `findUsingPattern("*A")` will retrieve all of the materials suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the materials prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the materials containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `Materials.getAll`, `Materials.findFirst`.
 */
static findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<MaterialBase>>;

/**
*  
 * getAll(): Promise<Array<MaterialBase>>
 *  
 * 
 * Returns a promise that is resolved with all of the materials.
 * **See Also**: `Materials.findUsingPattern`, `Materials.findFirst`.
 */
static getAll(): Promise<Array<MaterialBase>>;

/**
 * The `CullMode` enum describes how material is culled.
 * @property BACK Cull back-facing geometry
 * @property FRONT Cull front-facing geometry
 */
static readonly CullMode: {
  BACK: "BACK",
  FRONT: "FRONT",
}
/**
 * The `BlendMode` enum describes how material is blended.
 * @property ADD Adds pixel values of the source to the destination.
 * @property ALPHA Linear interpolation between the pixels of the source and destination as specified by the
alpha values of the source.
 * @property ASSOCIATIVE_ALPHA Same as alpha blend mode, but for source with RGB channels of each pixel premultiplied by its
alpha.
 * @property MULTIPLY Multiplies the RGB channels of each pixel from the source with the values of the corresponding
pixel from the destination.
 * @property REPLACE The non-transparent pixels of the source replace corresponding pixels of the destination.
 * @property SCREEN Values of each pixels in the source and destination are inverted, multiplied, and then
inverted again.
 * @property SUBTRACT Subtracts pixel values of the source from the destination. In case of negative values, black
is displayed.
 */
static readonly BlendMode: {
  ADD: "ADD",
  ALPHA: "ALPHA",
  ASSOCIATIVE_ALPHA: "ASSOCIATIVE_ALPHA",
  MULTIPLY: "MULTIPLY",
  REPLACE: "REPLACE",
  SCREEN: "SCREEN",
  SUBTRACT: "SUBTRACT",
}
}
export = MaterialsModule;
