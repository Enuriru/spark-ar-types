/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../WorldMap.Marker/index.d.ts" />

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
loadMap(id: {degreesFromNorth: number, lat: number, lng: number, zoom: number}): Promise<string>
```

*/
loadMap(id: {degreesFromNorth: number, lat: number, lng: number, zoom: number}): Promise<string>

/**
```
setMarkers(val: Array<Marker>): void
```

*/
setMarkers(val: Array<Marker>): void

}
