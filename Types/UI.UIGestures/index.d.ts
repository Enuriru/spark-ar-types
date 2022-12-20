/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

declare interface UIGestures {

/**
```
onHover(sceneObject: SceneObjectBase): EventSource<UIHoverEvent>
```

Hover UI event for the SceneObject
*/
onHover(sceneObject: SceneObjectBase): EventSource<UIHoverEvent>

/**
```
onPress(sceneObject: SceneObjectBase): EventSource<UIPressEvent>
```

Press UI event for the SceneObject
*/
onPress(sceneObject: SceneObjectBase): EventSource<UIPressEvent>

/**
```
onScroll(sceneObject: SceneObjectBase, deadzone: number): EventSource<UIScrollEvent>
```

Scroll UI event for the SceneObject
*/
onScroll(sceneObject: SceneObjectBase, deadzone: number): EventSource<UIScrollEvent>

}
