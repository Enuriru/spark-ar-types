/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../SpatialGesture.IntersectEvent/index.d.ts" />
/// <reference path="../SpatialGesture.Pointer/index.d.ts" />


/**
[{"kind":"introducedBy","version":3767353864}]
*/


declare interface SpatialGesture extends Module {

/**
```
(get) pointer: Pointer
(set) (Not Available)
```
*/
pointer: Pointer

/**
```
onIntersection(object: SceneObjectBase): EventSource<IntersectEvent>
```

*/
onIntersection(object: SceneObjectBase): EventSource<IntersectEvent>

}
