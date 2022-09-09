/// <reference path="../Layers.Layer/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
declare class LayersModule {
/**
* ```
(get) END_COUNT: undefined
(set) END_COUNT: undefined
```

END_COUNT may be used for 'count' parameter to move to top with moveUp(), or to the bottom with moveDown()
*/
static readonly END_COUNT: undefined;
/**
*  
 * create(properties: {hidden: boolean, name: string, renderOrder: number}): Promise<Layer>
 *  
 * 
 * Creates a new layer with specified properties
 */
static create(properties: {hidden: boolean, name: string, renderOrder: number}): Promise<Layer>;

/**
*  
 * destroy(l: Layer, option: DestroyOption): Promise<void>
 *  
 * 
 * Destroy the specfied layer.  Only layers created dynamically through 'create' may be destroyed.
 */
static destroy(l: Layer, option: DestroyOption): Promise<void>;

/**
*  
 * findFirst(name: string): Promise<Layer | null>
 *  
 * 
 * Finds the first layer of a specified name
 */
static findFirst(name: string): Promise<Layer | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Layer>>
 *  
 * 
 * Return layers whose name match the pattern specified
 */
static findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Layer>>;

/**
*  
 * getAll(): Promise<Array<Layer>>
 *  
 * 
 * Returns an array of all layers
 */
static getAll(): Promise<Array<Layer>>;

/**
*  
 * getLayer(obj: SceneObjectBase): Promise<Layer | null>
 *  
 * 
 * Get the layer, if it has one, that the specified scene object belongs to
 */
static getLayer(obj: SceneObjectBase): Promise<Layer | null>;

/**
*  
 * moveDown(l: Layer, count: number): Promise<number>
 *  
 * 
 * Change the rendering order of a layer, moving it down so that it renders sooner.  Returns new render order.
 */
static moveDown(l: Layer, count: number): Promise<number>;

/**
*  
 * moveUp(l: Layer, count: number): Promise<number>
 *  
 * 
 * Change the rendering order of a layer, moving it up so that it renders later. Returns new render order.
 */
static moveUp(l: Layer, count: number): Promise<number>;

/**
*  
 * setLayer(obj: SceneObjectBase, lyr: Layer): Promise<void>
 *  
 * 
 * Set the layer that a scene object should belong to
 */
static setLayer(obj: SceneObjectBase, lyr: Layer): Promise<void>;

}
export = LayersModule;
