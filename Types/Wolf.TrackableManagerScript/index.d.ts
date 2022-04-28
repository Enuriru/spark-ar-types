/// <reference path="../Wolf.BoxTrackingScriptObject/index.d.ts" />
/// <reference path="../Wolf.ConeTrackingScriptObject/index.d.ts" />
/// <reference path="../Wolf.CylinderTrackingScriptObject/index.d.ts" />
/// <reference path="../Wolf.GeoAnchorTrackingScriptObject/index.d.ts" />
/// <reference path="../Wolf.ImageTrackingScriptObject/index.d.ts" />
/// <reference path="../Wolf.TrackingEventSource/index.d.ts" />

/**
`TrackableManagerScript` controls all running trackable objects.
*/
declare interface TrackableManagerScript {

/**
```
(get) onNewTracking: TrackingEventSource
(set) (Not Available)
```
*/
onNewTracking: TrackingEventSource

/**
```
trackBoxPattern(textureId: string, width: number, height: number, depth: number, isStatic: boolean): BoxTrackingScriptObject
```

*/
trackBoxPattern(textureId: string, width: number, height: number, depth: number, isStatic: boolean): BoxTrackingScriptObject

/**
```
trackConePattern(textureId: string, referenceHeight: number, largerDiameter: number, smallerDiameter: number, largerArcEndX: number, largerArcEndY: number, smallerArcEndX: number, smallerArcEndY: number, isStatic: boolean): ConeTrackingScriptObject
```

*/
trackConePattern(textureId: string, referenceHeight: number, largerDiameter: number, smallerDiameter: number, largerArcEndX: number, largerArcEndY: number, smallerArcEndX: number, smallerArcEndY: number, isStatic: boolean): ConeTrackingScriptObject

/**
```
trackCylinderPattern(textureId: string, referenceHeight: number, isStatic: boolean): CylinderTrackingScriptObject
```

*/
trackCylinderPattern(textureId: string, referenceHeight: number, isStatic: boolean): CylinderTrackingScriptObject

/**
```
trackGeoAnchor(latitude: number, longitude: number, altitude: number, bearing: number): GeoAnchorTrackingScriptObject
```

*/
trackGeoAnchor(latitude: number, longitude: number, altitude: number, bearing: number): GeoAnchorTrackingScriptObject

/**
```
trackImagePattern(textureId: string, referenceWidth: number, isStatic: boolean): ImageTrackingScriptObject
```

*/
trackImagePattern(textureId: string, referenceWidth: number, isStatic: boolean): ImageTrackingScriptObject

}
