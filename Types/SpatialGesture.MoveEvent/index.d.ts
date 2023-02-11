/// <reference path="../CustomHandGestures.GestureState/index.d.ts" />
/// <reference path="../Reactive.Mat4/index.d.ts" />
/// <reference path="../Reactive.Point3D/index.d.ts" />


/**
[{"kind":"introducedBy","version":4122369426}]
*/


declare interface MoveEvent {

/**
```
(get) location: Point3D
(set) (Not Available)
```
*/
location: Point3D

/**
```
(get) source: GestureSource
(set) (Not Available)
```
*/
source: GestureSource

/**
```
(get) state: GestureState
(set) (Not Available)
```
*/
state: GestureState

/**
```
(get) time: number
(set) (Not Available)
```
*/
time: number

/**
```
(get) transform: Mat4
(set) (Not Available)
```
*/
transform: Mat4

}
