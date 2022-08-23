/// <reference path="../Blocks.BlockAssets/index.d.ts" />


/**
[{"kind":"capability","capability":"blocks","orCapability":""}]
*/


/**
The `BlocksModule` class provides methods for interacting with the Blocks in your effect.
*/
declare interface Blocks extends Module {

/**
```
(get) assets: BlockAssets
(set) (Not Available)
```

Get an object that allows access to the Block Assets.
*/
assets: BlockAssets

}
