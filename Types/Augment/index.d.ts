/// <reference path="../Augment.AugmentNode/index.d.ts" />


/**
[{"kind":"capability","capability":"augmentControl","orCapability":""},{"kind":"introducedBy","version":1125385390},{"kind":"availableIn","availableIn":["DocumentType.Experience"]}]
*/


declare interface Augment extends Module {

/**
```
createAugment(blockName: string): Promise<AugmentNode>
```

*/
createAugment(blockName: string): Promise<AugmentNode>

/**
```
destroyAugment(augmentId: string): Promise<void>
```

*/
destroyAugment(augmentId: string): Promise<void>

}
