/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />


/**
[{"kind":"capability","capability":"remote3DModels","orCapability":""}]
*/


/**
RemoteSceneObject represents a scene object that can be loaded with remote content.
*/
declare interface RemoteSceneObject extends SceneObjectBase {

/**
```
(get) remoteModelIdentifier: StringSignal
(set) remoteModelIdentifier: StringSignal
```

Specifies the Remote 3D model indentifier.
*/
remoteModelIdentifier: StringSignal

}
