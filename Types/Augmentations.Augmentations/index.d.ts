/// <reference path="../Augmentations.Augmentation/index.d.ts" />


/**
[{"kind":"capability","capability":"remoteAugmentations","orCapability":""}]
*/


declare interface Augmentations extends Module {

/**
```
getConfig(): Promise<any>
```

*/
getConfig(): Promise<any>

/**
```
instantiate(effectPath: string, config: {[key: string]: any}): Promise<string>
```

*/
instantiate(effectPath: string, config: {[key: string]: any}): Promise<string>

/**
```
remove(token: string): Promise<string>
```

*/
remove(token: string): Promise<string>

/**
```
requestAugmentation(params: {[key: string]: any}): Promise<Augmentation>
```

*/
requestAugmentation(params: {[key: string]: any}): Promise<Augmentation>

}
