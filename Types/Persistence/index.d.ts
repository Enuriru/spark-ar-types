/// <reference path="../Blocks.ExternalBlockAsset/index.d.ts" />
/// <reference path="../Persistence.BlockStorage/index.d.ts" />
/// <reference path="../Persistence.StorageLocation/index.d.ts" />
/// <reference path="../Persistence.StorageScope/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `Persistence` class encapsulates persistent objects.
*/
declare interface Persistence extends Module {

/**
```
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
block: StorageLocation

/**
```
(get) captureScope: StorageScope
(set) (Not Available)
```

Gets an instance of StorageScope corresponding to the capture scope.
*/
captureScope: StorageScope

/**
```
(get) local: StorageLocation
(set) (Not Available)
```

Gets an instance of StorageLocation that stores data on the user's local
 device storage. This location only returns data that was stored for the
 currently logged-in user. This storage is specific to the given effect:
 effects cannot access the data stored by other effects.
*/
local: StorageLocation

/**
```
(get) remote: StorageLocation
(set) (Not Available)
```

Gets an instance of StorageLocation that stores data remotely on the servers
 of the app on which the effect is running (e.g. Instagram, Facebook, etc.),
 associated with the relevant user's account on that app. This storage is
 specific to the  given effect: effects cannot access the data stored by other
 effects.
*/
remote: StorageLocation

/**
```
(get) sharedScope: StorageScope
(set) (Not Available)
```

Gets an instance of StorageScope corresponding to the shared scope.
*/
sharedScope: StorageScope

/**
```
(get) userScope: StorageScope
(set) (Not Available)
```

Deprecated. Please use Persistence.local and its StorageLocation class instead.
Gets an instance of StorageScope corresponding to the user scope.
*/
userScope: StorageScope

/**
```
blockStorage(storageIdentifier: string): BlockStorage
```

Represents a BlockStorage for nested Blocks that is scoped the same way as the parent Block's BlockStorage.
The storage location (e.g. local or temporary) is kept the same as its parent Block.
*/
blockStorage(storageIdentifier: string): BlockStorage

/**
```
externalBlockLocalStorage(externalBlockAsset: ExternalBlockAsset, storageIdentifier: string): BlockStorage
```

Represents a storage location for Blocks that is stored locally on device,
but NOT associated with any effect. Instead it's associated with the FBID
of the given External Block. Intended to allow for the use of Virtual
Objects with persistent data across multiple different container effects.
*/
externalBlockLocalStorage(externalBlockAsset: ExternalBlockAsset, storageIdentifier: string): BlockStorage

/**
```
externalBlockRemoteStorage(externalBlockAsset: ExternalBlockAsset, storageIdentifier: string): BlockStorage
```

Represents a storage location for Blocks that is stored remotely, associated
with the user's account, but NOT associated with any effect. Instead it's
associated with the FBID of the given External Block. Intended to allow for
the use of Virtual Objects with persistent data across multiple different
container effects.
*/
externalBlockRemoteStorage(externalBlockAsset: ExternalBlockAsset, storageIdentifier: string): BlockStorage

/**
```
localBlockStorage(storageIdentifier: string): BlockStorage
```

Gets the local BlockStorage instance associated with the `storageIdentifier`. This storage
is on the user's device.
- calling the API with the same `storageIdentifier` will return the same `BlockStorage` object, even if it's completely different Block instances.
- Equivalent to `Persistence.local` for Blocks.
*/
localBlockStorage(storageIdentifier: string): BlockStorage

/**
```
remoteBlockStorage(sharedStateId: string): Promise<BlockStorage>
```

Represents a storage location for Blocks that is stored remotely,
associated with the user's account and this effect, equivalent to
`Persistence.remoteScope` for Blocks.
*/
remoteBlockStorage(sharedStateId: string): Promise<BlockStorage>

/**
```
temporaryBlockStorage(storageIdentifier: string): BlockStorage
```

Gets the temporary BlockStorage instance associated with the `storageIdentifier`. This storage
goes away once the effect restarts or is unloaded, but it does allow for a
Block to be unloaded and re-loaded during the lifetime of an effect while
maintaining its persistent data.
- calling the API with the same `storageIdentifier` will return the same `BlockStorage` object, even if it's completely different Block instances.
*/
temporaryBlockStorage(storageIdentifier: string): BlockStorage

}



/**

//==============================================================================
// The following example demonstrates how to store, retrieve and remove data
// across multiple sessions.
//
// Project setup:
// - Insert two rectangles
// - Insert text
// - Position the rectangles and text so that all are visible
// - Add the 'Tap Gesture' capability under 'Touch Gestures'
//==============================================================================

// Load in the required modules
const Persistence = require('Persistence');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the rectangles and text in the Scene
  const [storeRectangle, removeRectangle, dataText] = await Promise.all([
    Scene.root.findFirst('rectangle0'),
    Scene.root.findFirst('rectangle1'),
    Scene.root.findFirst('text0')
  ]);

  // Store a reference to the local storage location
  const localStorage = Persistence.local;

  // Create a JavaScript object to store the data
  const data = { name: 'Spark AR' };

  //==============================================================================
  // How to get stored data
  //==============================================================================

  try {
    // Attempt to get the stored data and if successful...
    const result = await localStorage.get('data');
    // Output a success message with the data added
    dataText.text = 'Successfully retrieved data ' + result.name;
  } catch (error) {
    // If not successful output a failure message with the error returned
    dataText.text = 'Failed to retrieve data, ' + error;
  }

  //==============================================================================
  // How to store data
  //==============================================================================

  // Subscribe to tap gestures on the storeRectangle
  TouchGestures.onTap(storeRectangle).subscribe(() => {
    try {
      // Attempt to store the data and if successful...
      await localStorage.set('data', data);
      // Output a success message
      dataText.text = 'Successfully stored';
    } catch (error) {
      // If not successful output a failure message with the error returned
      dataText.text = 'Failed to store, ' + error;
    }
  });

  //==============================================================================
  // How to remove stored data
  //==============================================================================

  // Subscribe to tap gestures on the removeRectangle
  TouchGestures.onTap(removeRectangle).subscribe(() => {
    try {
      // Attempt to remove the data and if successful...
      await localStorage.remove('data');

      // Output a success message
      dataText.text = 'Successfully removed';
    } catch(error) {
      // If not successful output a failure message with the error returned
      dataText.text = 'Failed to remove, ' + error;
    }
  });
// Enable async/await in JS [part 2]
})();

*/