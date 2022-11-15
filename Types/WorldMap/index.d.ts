/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../WorldMap.GeoPosition/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


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
(set) crop: BoolSignal
```
*/
crop: BoolSignal

/**
```
(get) (Not Available)
(set) isVolumetric: BoolSignal
```
*/
isVolumetric: BoolSignal

/**
```
(get) (Not Available)
(set) showMarkersPerpendicular: BoolSignal
```
*/
showMarkersPerpendicular: BoolSignal

/**
```
clearMarkers(): Promise<void>
```

*/
clearMarkers(): Promise<void>

/**
```
loadMap(id: {degreesFromNorth: number, lat: number, lng: number, zoom: number}): Promise<string>
```

*/
loadMap(id: {degreesFromNorth: number, lat: number, lng: number, zoom: number}): Promise<string>

/**
```
setMarkers(val: Array<GeoPosition>): Promise<void>
```

*/
setMarkers(val: Array<GeoPosition>): Promise<void>

}
