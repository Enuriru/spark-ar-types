/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

declare interface WorldMap extends SceneObjectBase {

/**
```
(get) (Not Available)
(set) centerOnLocation: BoolSignal
```
*/
centerOnLocation: BoolSignal

/**
```
(get) (Not Available)
(set) isVolumetric: BoolSignal
```
*/
isVolumetric: BoolSignal

/**
```
loadMap(id: {lat: number, lng: number, zoom: number}): Promise<string>
```

*/
loadMap(id: {lat: number, lng: number, zoom: number}): Promise<string>

}
