/// <reference path="../Augment.AugmentNode/index.d.ts" />
/// <reference path="../Augment.InstantiateAugmentRequest/index.d.ts" />


/**
[{"kind":"capability","capability":"augmentControl","orCapability":""},{"kind":"introducedBy","version":1125385390},{"kind":"availableIn","availableIn":["DocumentType.Experience"]}]
*/


declare interface Augment extends Module {

/**
```
createAugment(blockName: string, config: {placement?: Placement}): Promise<AugmentNode>
```

*/
createAugment(blockName: string, config: {placement?: Placement}): Promise<AugmentNode>

/**
```
destroyAugment(augmentId: string): Promise<void>
```

*/
destroyAugment(augmentId: string): Promise<void>

/**
```
onInstantiateAugmentRequest(): Promise<InstantiateAugmentRequest>
```

*/
onInstantiateAugmentRequest(): Promise<InstantiateAugmentRequest>

/**
```
onInstantiateAugmentResponse(requestId: string, augmentId: string, blockName: string, contentId: string): Promise<void>
```

*/
onInstantiateAugmentResponse(requestId: string, augmentId: string, blockName: string, contentId: string): Promise<void>

}
