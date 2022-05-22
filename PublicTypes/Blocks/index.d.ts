/// <reference path="../Blocks.BlockAsset/index.d.ts" />
/// <reference path="../Blocks.BlockAssets/index.d.ts" />
/// <reference path="../Blocks.BlockInstanceInputs/index.d.ts" />
/// <reference path="../Blocks.BlockInstanceOutputs/index.d.ts" />
/// <reference path="../Blocks.BlockModulesConfig/index.d.ts" />
/// <reference path="../Scene.BlockSceneRoot/index.d.ts" />
declare class BlocksModule {
/**
* ```
(get) assets: BlockAssets
(set) (Not Available)
```

Get an object that allows access to the Block Assets.
*/
static readonly assets: BlockAssets;
/**
* ```
(get) inputs: BlockInstanceInputs
(set) (Not Available)
```

Get an object encapsulating all inputs for this Block.
*/
static readonly inputs: BlockInstanceInputs;
/**
* ```
(get) outputs: BlockInstanceOutputs
(set) (Not Available)
```

Gets an object encapsulating all outputs for this Block.
*/
static readonly outputs: BlockInstanceOutputs;
/**
*  
 * download(blockAssetOrName: string | BlockAsset): Promise<string>
 *  
 * 
 * Downloads the given Block Asset, or the Block with the given name, and returns a Promise that
 * is resolved with the Block's name (if the download succeeds), or fails with an error (if it does not).
 * For Blocks that are not downloadable, this becomes a no-op.
 * For Blocks that were already downloaded and are already available, this becomes a no-op.
 * 
 * Downloading doesn't instantiate the Block or add it to the scene, or make its inputs/outputs available,
 * but makes sure that all the assets that are required are downloaded and are readily available.
 */
static download(blockAssetOrName: BlockAsset | string): Promise<string>;

/**
*  
 * instantiate(blockAssetOrName: string | BlockAsset, initialState: {[key: string]: any}, modulesConfig?: BlockModulesConfig): Promise<BlockSceneRoot>
 *  
 * 
 * Instantiate a Block asynchronously, given a Block Asset or its name.
 * When instantiating blocks, keep the following in mind:
 * - Creation of Blocks is bound to the same set of guidelines as `Scene.create()`.
 * - New blocks always get assigned a globally unique `identifier`.`
 * - `initialState` is optional, but encouraged to be used.
 * - `initialState` can contain any `key: value` pair for any settable property of a `Block` class (e.g. `hidden`).
 * - `name` in `initialState` is being used, unless it's not provided - then "dynamicBlock" is used.
 * - `modulesConfig` is optional. In contrast to `initialState`, which defines properties for the `BlockSceneRoot` object, `modulesConfig` is used to configure any information needed for JavaScript modules and other such functionality inside the Block itself.
 * - See `BlockModulesConfig` for information on which fields are accepted here.
 * - Block's inputs and outputs are not accessible until `SceneObjectBase.addChild()` call finishes
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static instantiate(blockAssetOrName: BlockAsset | string, initialState: {[key: string]: any}, modulesConfig?: BlockModulesConfig): Promise<BlockSceneRoot>;

}
export = BlocksModule;
