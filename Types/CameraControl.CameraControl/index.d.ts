

/**
[{"kind":"capability","capability":"cameraControl","orCapability":""}]
*/


/**
The `CameraControlModule` class provides ability to set which capture device should be used (front or back).
*/
declare interface CameraControl extends Module {

/**
```
setCaptureDevicePositionBack(): void
```

Changes capture device position to back, if possible.
*/
setCaptureDevicePositionBack(): void

/**
```
setCaptureDevicePositionFront(): void
```

Changes capture device position to front, if possible.
*/
setCaptureDevicePositionFront(): void

}
