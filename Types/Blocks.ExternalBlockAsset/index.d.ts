/// <reference path="../Blocks.BlockAsset/index.d.ts" />


/**
[{"kind":"introducedBy","version":4030543761},{"kind":"capability","capability":"blocks","orCapability":""},{"kind":"capability","capability":"externalBlocks","orCapability":""}]
*/


/**
Represents a Block Asset that's not included with this project, and is uploaded separately to
Spark AR Hub.
*/
declare interface ExternalBlockAsset extends BlockAsset {

/**
```
(get) remoteId: string
(set) (Not Available)
```

The remote identifier of this External Block Asset uniquely identifiying it.
*/
remoteId: string

}
