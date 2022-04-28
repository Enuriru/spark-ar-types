/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />


/**
[{"kind":"capability","capability":"personReconstruction","orCapability":""}]
*/


/**
Person Hologram represents a scene object that renders a hologram of a person
*/
declare interface PersonHologram extends SceneObjectBase {

/**
```
(get) depthTextureIdentifier: StringSignal
(set) depthTextureIdentifier: StringSignal
```
*/
depthTextureIdentifier: StringSignal

/**
```
(get) rgbTextureIdentifier: StringSignal
(set) rgbTextureIdentifier: StringSignal
```
*/
rgbTextureIdentifier: StringSignal

}
