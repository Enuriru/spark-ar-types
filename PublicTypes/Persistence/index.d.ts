/// <reference path="../Persistence.BlockStorage/index.d.ts" />
/// <reference path="../Persistence.StorageLocation/index.d.ts" />
/// <reference path="../Persistence.StorageScope/index.d.ts" />
declare class PersistenceModule {
/**
* ```
(get) block: StorageLocation
(set) (Not Available)
```

Gets the StorageLocation that stores data for this block. This location only returns data that was stored for the
 currently logged-in user. This storage is specific to this instance of the block:
 blocks cannot access the data stored by other blocks.
 Note: The storage is controlled by the parent during blocks initialization. See also `BlockStorage`. If no BlockStorage
 was configured in Blocks.instantiate() via `BlockModulesConfig`, then the default will be an in-memory, block instance-scoped
 storage.
*/
static readonly block: StorageLocation;
/**
* ```
(get) local: StorageLocation
(set) (Not Available)
```

Gets an instance of StorageLocation that stores data on the user's local
 device storage. This location only returns data that was stored for the
 currently logged-in user. This storage is specific to the given effect:
 effects cannot access the data stored by other effects.
*/
static readonly local: StorageLocation;
/**
* ```
(get) userScope: StorageScope
(set) (Not Available)
```

Deprecated. Please use Persistence.local and its StorageLocation class instead.
Gets an instance of StorageScope corresponding to the user scope.
*/
static readonly userScope: StorageScope;
/**
*  
 * blockStorage(storageIdentifier: string): BlockStorage
 *  
 * 
 * Represents a BlockStorage for nested Blocks that is scoped the same way as the parent Block's BlockStorage.
 * The storage location (e.g. local or temporary) is kept the same as its parent Block.
 */
static blockStorage(storageIdentifier: string): BlockStorage;

/**
*  
 * localBlockStorage(storageIdentifier: string): BlockStorage
 *  
 * 
 * Gets the local BlockStorage instance associated with the `storageIdentifier`. This storage
 * is on the user's device.
 * - calling the API with the same `storageIdentifier` will return the same `BlockStorage` object, even if it's completely different Block instances.
 * - Equivalent to `Persistence.local` for Blocks.
 */
static localBlockStorage(storageIdentifier: string): BlockStorage;

/**
*  
 * temporaryBlockStorage(storageIdentifier: string): BlockStorage
 *  
 * 
 * Gets the temporary BlockStorage instance associated with the `storageIdentifier`. This storage
 * goes away once the effect restarts or is unloaded, but it does allow for a
 * Block to be unloaded and re-loaded during the lifetime of an effect while
 * maintaining its persistent data.
 * - calling the API with the same `storageIdentifier` will return the same `BlockStorage` object, even if it's completely different Block instances.
 */
static temporaryBlockStorage(storageIdentifier: string): BlockStorage;

}
export = PersistenceModule;
