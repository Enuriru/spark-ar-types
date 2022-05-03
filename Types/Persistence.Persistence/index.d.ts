/// <reference path="../Persistence.BlockStorage/index.d.ts" />
/// <reference path="../Persistence.StorageScope/index.d.ts" />

/**
The `Persistence` class encapsulates persistent objects.
*/
declare interface Persistence extends Module {

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

Gets an instance of StorageScope corresponding to the user scope.
*/
userScope: StorageScope

/**
```
localBlockStorage(storageIdentifier: string): BlockStorage
```

Gets the local BlockStorage instance associated with the storageIdentifier. This storage
is on the user's device.
- calling the API with the same `storageIdentifier` will return the same `BlockStorage` object, even if it's completely different Block instances.
*/
localBlockStorage(storageIdentifier: string): BlockStorage

/**
```
temporaryBlockStorage(storageIdentifier: string): BlockStorage
```

Gets the temporary BlockStorage instance associated with the storageIdentifier. This storage
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
// - Add 'data' to 'Whitelisted keys' under the 'Persistence' Capability
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

  // Store a reference to the userScope
  const userScope = Persistence.userScope;

  // Create a JavaScript object to store the data
  const data = { name: 'Spark AR' };

  //==============================================================================
  // How to get stored data
  //==============================================================================

  try {
    // Attempt to get the stored data and if successful...
    const result = await userScope.get('data');
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
      await userScope.set('data', data);
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
      await userScope.remove('data');

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