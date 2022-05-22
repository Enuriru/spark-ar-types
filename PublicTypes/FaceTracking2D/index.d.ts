/// <reference path="../FaceTracking2D.Face2D/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class FaceTracking2DModule {
/**
* ```
(get) count: ScalarSignal
(set) (Not Available)
```

The number of faces currently tracked in the scene, as a [`ScalarSignal`](/classes/ReactiveModule.ScalarSignal).
*/
static readonly count: ScalarSignal;
/**
*  
 * face(index: number): Face2D
 *  
 * 
 * Returns a [`Face2D`](/classes/facetracking2dmodule.face2d) object from the array of detected faces.
 * * `index` - the index of the `Face2D` object to retrieve from the array.
 */
static face(index: number): Face2D;

}
export = FaceTracking2DModule;
