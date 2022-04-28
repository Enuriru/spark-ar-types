/// <reference path="../ExternalTexture.State/index.d.ts" />
/// <reference path="../Fonts.State/index.d.ts" />
/// <reference path="../GalleryTexture.State/index.d.ts" />
/// <reference path="../LineBasedPlaneTracking.State/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
/// <reference path="../PlaneTracking.State/index.d.ts" />
/// <reference path="../PointTracker.State/index.d.ts" />
/// <reference path="../Prefabs.State/index.d.ts" />
/// <reference path="../TouchGestures.GestureType/index.d.ts" />
/// <reference path="../TouchGestures.State/index.d.ts" />
/// <reference path="../WorldTracking.State/index.d.ts" />

/**
The `SamplerFactory` class creates different types of animation samplers.
*/
declare interface Gesture {

/**
```
(get) state: Signal<State>
(set) (Not Available)
```

Returns a `Signal` that represents the current state of the gesture.
*/
state: Signal<State>

/**
```
(get) type: GestureType
(set) (Not Available)
```

Specifies a `TouchGesturesModule.Gesture.Type` enum value representing the type of gesture detected.
*/
type: GestureType

}
