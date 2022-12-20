/// <reference path="../Augment.BlockSceneRootProxy/index.d.ts" />


/**
[{"kind":"capability","capability":"augmentControl","orCapability":""},{"kind":"introducedBy","version":1125385390},{"kind":"availableIn","availableIn":["DocumentType.Experience"]}]
*/


declare interface AugmentNode {

/**
```
(get) blockProxy: BlockSceneRootProxy
(set) (Not Available)
```
*/
blockProxy: BlockSceneRootProxy

/**
```
(get) identifier: string
(set) (Not Available)
```
*/
identifier: string

/**
```
getAugmentHidden(): Promise<Boolean>
```

*/
getAugmentHidden(): Promise<Boolean>

/**
```
setAugmentHidden(hidden: Boolean): Promise<void>
```

*/
setAugmentHidden(hidden: Boolean): Promise<void>

}
