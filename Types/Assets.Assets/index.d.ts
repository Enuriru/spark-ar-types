/// <reference path="../Assets.Asset/index.d.ts" />


/**
[{"kind":"capability","capability":"textAssets","orCapability":""}]
*/


/**
The `AssetsModule` class allows you to find, load and use the assets packaged together with the effect.
*/
declare interface Assets extends Module {

/**
```
findFirst(name: string): Promise<Asset | null>
```

Find first text asset that matches a given name pattern.
*/
findFirst(name: string): Promise<Asset | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Asset>>
```

Find text assets with names that match a given pattern.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Asset>>

/**
```
getAll(): Promise<Array<Asset>>
```

Get all text assets that are bundled in this effect.
*/
getAll(): Promise<Array<Asset>>

}
