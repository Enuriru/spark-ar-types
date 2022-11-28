/// <reference path="../Assets.AssetBase/index.d.ts" />


/**
[{"kind":"capability","capability":"textAssets","orCapability":"imageAssets"},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `AssetsModule` class allows you to find, load and use the assets packaged together with the effect.
*/
declare interface Assets extends Module {

/**
```
(get) AssetType: {[key: string]: string}
(set) (Not Available)
```

Accessor for all known, registered asset types as they are returned via assetType(), as in:
- Assets.AssetType.Image
- Assets.AssetType.Text

The properties returned by this object depend on the set of plugins loaded.
*/
AssetType: {[key: string]: string}

/**
```
findFirst(name: string): Promise<AssetBase | null>
```

Find first asset of any type that matches a given name pattern.
*/
findFirst(name: string): Promise<AssetBase | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AssetBase>>
```

Find assets of any type with names that match a given pattern.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AssetBase>>

/**
```
getAll(): Promise<Array<AssetBase>>
```

Get all assets of any type that are bundled in this effect.
*/
getAll(): Promise<Array<AssetBase>>

}
