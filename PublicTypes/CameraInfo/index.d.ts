/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../CameraInfo.CameraPosition/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />
declare class CameraInfoModule {
/**
* ```
(get) captureDevicePosition: StringSignal
(set) (Not Available)
```

Specifies a `CameraPosition` enum signal identifying the current camera in use on the device.
*/
static readonly captureDevicePosition: StringSignal;
/**
* ```
(get) effectSafeAreaInsets: Vec4Signal
(set) (Not Available)
```

Specifies a `Vec4Signal` indicating the insets of the effect safe area.
*/
static readonly effectSafeAreaInsets: Vec4Signal;
/**
* ```
(get) isCapturingPhoto: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is capturing a photo.
*/
static readonly isCapturingPhoto: BoolSignal;
/**
* ```
(get) isRecordingVideo: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is recording video.
*/
static readonly isRecordingVideo: BoolSignal;
/**
* ```
(get) previewScreenScale: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` describing the scale of the preview's screen, i.e. the number of pixels per point.
*/
static readonly previewScreenScale: ScalarSignal;
/**
* ```
(get) previewSize: Vec2Signal
(set) (Not Available)
```

Specifies a `Vec2Signal` describing the size of the preview, in pixels.
*/
static readonly previewSize: Vec2Signal;
/**
* ```
(get) viewMatrix: TransformSignal
(set) (Not Available)
```

Specifies a `TransformSignal` describing the transform that needs to be applied to a given
object to transform it from world-space to view-space. It's inverse of the Camera transform.
*/
static readonly viewMatrix: TransformSignal;
/**
 * The `CameraPosition` enum describes the direction the camera is facing.
 * @property BACK Indicates that the back-facing camera is in use.
 * @property FRONT Indicates that the front-facing camera is in use.
 * @property UNSPECIFIED Indicates that the orientation of the camera is unknown.
 */
static readonly CameraPosition: {
  BACK: "BACK",
  FRONT: "FRONT",
  UNSPECIFIED: "UNSPECIFIED",
}
}
export = CameraInfoModule;
