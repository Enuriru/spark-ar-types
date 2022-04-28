/// <reference path="../Prefabs.PrefabBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
The `Prefab` class represents a downloadable prefab mesh.
*/
declare interface Prefab extends PrefabBase {

/**
```
(get) state: StringSignal
(set) (Not Available)
```

Specifies a `StringSignal` representing the loading state of the external prefab.
The value of the signal is guaranteed to be a member of the `PrefabsModule.State` enumeration.
*/
state: StringSignal

/**
```
(get) url: StringSignal
(set) url: StringSignal
```

Specifies the URL of the prefab to be downloaded.
Specifies the URL of the prefab to be downloaded.
*/
url: StringSignal

}
