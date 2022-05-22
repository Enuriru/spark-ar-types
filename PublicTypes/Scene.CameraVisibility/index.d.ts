/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface CameraVisibility {
/**
* ```
(get) forBackCamera: BoolSignal
(set) forBackCamera: BoolSignal
```

Specifies whether the object is visible when the back camera is the active one.
*/
forBackCamera: BoolSignal;
/**
* ```
(get) forFrontCamera: BoolSignal
(set) forFrontCamera: BoolSignal
```

Specifies whether the object is visible when the front camera is the active one.
*/
forFrontCamera: BoolSignal;
/**
* ```
(get) forUnspecifiedCamera: BoolSignal
(set) forUnspecifiedCamera: BoolSignal
```

Specifies whether the object is visible when the active camera couldn't be specified.
*/
forUnspecifiedCamera: BoolSignal;
}
