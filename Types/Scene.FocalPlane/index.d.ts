/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `FocalPlane` class exposes details about the focal plane of the device camera.
*/
declare interface FocalPlane {

/**
```
(get) distance: ScalarSignal
(set) (Not Available)
```

Specifies the distance between focal plane and camera. Measured in 3D units.
*/
distance: ScalarSignal

/**
```
(get) height: ScalarSignal
(set) (Not Available)
```

Specifies the height of the focal plane. Measured in 3D units.
*/
height: ScalarSignal

/**
```
(get) width: ScalarSignal
(set) (Not Available)
```

Specifies the width of the focal plane. Measured in 3D units.
*/
width: ScalarSignal

}



/**

//==============================================================================
// The following example demonstrates how to bind a Plane to the Focal Plane
// of the Camera using signals.
//
// Project setup:
// - Add the Scripting Dynamic Instantiation capability
//==============================================================================
(async function () {  // Enables async/await in JS [part 1]

    // Locate the Camera
    const [camera] = await Promise.all([
        Scene.root.findFirst('Camera') as Promise<Camera>
     ]);

    // Create a Plane object
    const [plane] = await Promise.all([
             await Scene.create("Plane", {
               "name": "plane0"
             }) as Promise<Plane>,
           ]);

    // Add the plane to the Camera space
    camera.addChild(plane);

    // Manually make the plane occupy the focal plane of the Camera.
    plane.width = camera.focalPlane.width;
    plane.height = camera.focalPlane.height;
    // Setting the Z axis here is equivalent to adding the Plane
    // as a child of the Focal Distance.
    plane.transform.z = camera.focalPlane.distance.mul(Reactive.val(-1));

})(); // Enables async/await in JS [part 2]

*/