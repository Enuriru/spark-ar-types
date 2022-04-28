/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
The `Prefab` class represents a downloadable prefab mesh.
*/
declare interface Prefab {

/**
```
(get) name: string
(set) (Not Available)
```

Specifies the unique prefab name. The prefab name can be retrieved from within mesh.
**See Also**: `PrefabsModule.get`.
*/
name: string

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
