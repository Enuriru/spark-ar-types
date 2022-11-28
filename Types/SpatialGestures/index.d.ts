/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../SpatialGesture.IntersectEvent/index.d.ts" />
/// <reference path="../SpatialGesture.Pointer/index.d.ts" />
/// <reference path="../SpatialGesture.ScrollEvent/index.d.ts" />
/// <reference path="../SpatialGesture.SelectEvent/index.d.ts" />


/**
[{"kind":"introducedBy","version":3767353864},{"kind":"capability","capability":"spatialGesture","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
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

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new IntersectEvent object for each hover interaction.
* `object` - the scene object to register tap gestures for
*/
onIntersection(object: SceneObjectBase): EventSource<IntersectEvent>

/**
```
onMoveInteraction(object: SceneObjectBase, options: MoveOptions): EventSource<SelectEvent>
```

*/
onMoveInteraction(object: SceneObjectBase, options: MoveOptions): EventSource<SelectEvent>

/**
```
onScroll(object: SceneObjectBase, deadzone: number): EventSource<ScrollEvent>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new ScrollEvent object for each scroll interaction.
* `object` - the scene object to register tap gestures for
* `deadzone` - the magnitude below deadzone would be ignored
*/
onScroll(object: SceneObjectBase, deadzone: number): EventSource<ScrollEvent>

/**
```
onSelect(object: SceneObjectBase): EventSource<SelectEvent>
```

Returns an [`EventSource`](/classes/reactivemodule.eventsource) that emits a new SelectEvent object for each select interaction.
* `object` - the scene object to register tap gestures for
*/
onSelect(object: SceneObjectBase): EventSource<SelectEvent>

}
