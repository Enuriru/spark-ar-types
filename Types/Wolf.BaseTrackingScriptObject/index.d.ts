/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />

declare interface BaseTrackingScriptObject {

/**
```
(get) isTracking: BoolSignal
(set) (Not Available)
```
*/
isTracking: BoolSignal

/**
```
(get) onLost: EventSource<void>
(set) (Not Available)
```
*/
onLost: EventSource<void>

/**
```
(get) trackingID: number
(set) (Not Available)
```
*/
trackingID: number

/**
```
(get) trackingType: string
(set) (Not Available)
```
*/
trackingType: string

/**
```
(get) transform: TransformSignal
(set) (Not Available)
```
*/
transform: TransformSignal

}
