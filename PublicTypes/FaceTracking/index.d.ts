/// <reference path="../FaceTracking.Cheek/index.d.ts" />
/// <reference path="../FaceTracking.Chin/index.d.ts" />
/// <reference path="../FaceTracking.Eye/index.d.ts" />
/// <reference path="../FaceTracking.Eyebrow/index.d.ts" />
/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Scene.FaceMesh/index.d.ts" />
/// <reference path="../Scene.FaceTracker/index.d.ts" />
/// <reference path="../FaceTracking.Forehead/index.d.ts" />
/// <reference path="../FaceTracking.Mouth/index.d.ts" />
/// <reference path="../FaceTracking.Nose/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare class FaceTrackingModule {
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
 * createFaceMeshSceneObject(initialState?: {[key: string]: any}): Promise<FaceMesh>
 *  
 * 
 * Creates a new [dynamic](https://sparkar.facebook.com/ar-studio/learn/scripting/dynamic-instantiation) `FaceMesh` object in the scene.
 * * `initialState` - an optional set of JSON-formatted parameters to instantiate the `FaceMesh` object with. For example, `{"name": "DynamicFaceMesh", "visible": true}`. The parameter `key`s must be valid `FaceMesh` object properties.
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static createFaceMeshSceneObject(initialState?: {[key: string]: any}): Promise<FaceMesh>;

/**
*  
 * createFaceTrackerSceneObject(initialState?: {[key: string]: any}): Promise<FaceTracker>
 *  
 * 
 * Creates a new [dynamic](https://sparkar.facebook.com/ar-studio/learn/scripting/dynamic-instantiation) `FaceTracker` object in the scene.
 * * `initialState` - an optional set of JSON-formatted parameters to instantiate the `FaceTracker` object with. For example, `{"name": "DynamicFaceTracker", "visible": true}`. The parameter `key`s must be valid `FaceTracker` object properties.
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static createFaceTrackerSceneObject(initialState?: {[key: string]: any}): Promise<FaceTracker>;

/**
*  
 * face(index: number): Face
 *  
 * 
 * Returns a [`Face`](/classes/facetrackingmodule.face) object from the array of detected faces.
 * * `index` - the index of the `Face` object to retrieve from the array.
 */
static face(index: number): Face;

}
export = FaceTrackingModule;
