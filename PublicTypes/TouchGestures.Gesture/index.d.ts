/// <reference path="../TouchGestures.GestureType/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
declare interface Gesture {
/**
* ```
(get) state: Signal<State>
(set) (Not Available)
```

The state of the current gesture, as a signal containing a [`State`](/enums/touchgesturesmodule.gesture.state) enum value.
You can monitor the value of the returned signal with the [`monitor`](/classes/reactivemodule.stringsignal#methods) method to detect when a gesture ends. For example:
```
TouchGestures.onLongPress().subscribe((gesture) => {
  gesture.state.monitor().subscribe((state) => {
    if(state.newValue == 'ENDED'){
      // Code here will run when the gesture ends
    }
  });
});
```
*/
state: Signal<State>;
/**
* ```
(get) type: GestureType
(set) (Not Available)
```

The type of gesture detected, as a [`GestureType`](/enums/touchgesturesmodule.gesturetype) enum value.
*/
type: GestureType;
}
