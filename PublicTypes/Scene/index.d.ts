/// <reference path="../Scene.AmbientLightSource/index.d.ts" />
/// <reference path="../Scene.BlendShape/index.d.ts" />
/// <reference path="../Scene.BlockSceneRoot/index.d.ts" />
/// <reference path="../Scene.Camera/index.d.ts" />
/// <reference path="../Scene.CameraVisibility/index.d.ts" />
/// <reference path="../Scene.Canvas/index.d.ts" />
/// <reference path="../Scene.Direction/index.d.ts" />
/// <reference path="../Scene.DirectionalLightSource/index.d.ts" />
/// <reference path="../Scene.EnvironmentLightSource/index.d.ts" />
/// <reference path="../Scene.FaceMesh/index.d.ts" />
/// <reference path="../Scene.FaceTracker/index.d.ts" />
/// <reference path="../Scene.FocalDistance/index.d.ts" />
/// <reference path="../Scene.FocalPlane/index.d.ts" />
/// <reference path="../Scene.HandTracker/index.d.ts" />
/// <reference path="../Scene.HorizontalAlignment/index.d.ts" />
/// <reference path="../Scene.Joint/index.d.ts" />
/// <reference path="../Scene.Mesh/index.d.ts" />
/// <reference path="../Scene.MeshSurface/index.d.ts" />
/// <reference path="../Scene.OutputVisibility/index.d.ts" />
/// <reference path="../Scene.ParticleSystem/index.d.ts" />
/// <reference path="../Scene.ParticleTypeDescription/index.d.ts" />
/// <reference path="../Scene.PlanarImage/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />
/// <reference path="../Scene.PlanarStack/index.d.ts" />
/// <reference path="../Scene.PlanarText/index.d.ts" />
/// <reference path="../Scene.Plane/index.d.ts" />
/// <reference path="../Scene.PlaneTracker/index.d.ts" />
/// <reference path="../Scene.PointLightSource/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Scene.RenderMode/index.d.ts" />
/// <reference path="../Scene.ScalingOption/index.d.ts" />
/// <reference path="../Scene.Scene/index.d.ts" />
/// <reference path="../Scene.SceneObject/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />
/// <reference path="../Scene.Skeleton/index.d.ts" />
/// <reference path="../Scene.Speaker/index.d.ts" />
/// <reference path="../Scene.SpotLightSource/index.d.ts" />
/// <reference path="../Scene.StackAlign/index.d.ts" />
/// <reference path="../Scene.StackDistribute/index.d.ts" />
/// <reference path="../Scene.TargetTracker/index.d.ts" />
/// <reference path="../Scene.TextAlignment/index.d.ts" />
/// <reference path="../Scene.TextAlignmentWrapper/index.d.ts" />
/// <reference path="../Scene.TextExtrusion/index.d.ts" />
/// <reference path="../Scene.ThreeDObject/index.d.ts" />
/// <reference path="../Scene.TrackingMode/index.d.ts" />
/// <reference path="../Scene.Transform/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Scene.VerticalAlignment/index.d.ts" />
/// <reference path="../Scene.VerticalTextAlignment/index.d.ts" />
/// <reference path="../Scene.WorldTransform/index.d.ts" />
declare class SceneModule {
/**
* ```
(get) root: Scene
(set) (Not Available)
```

Returns an object that is the root of the scene tree. Other objects are accessed by walking down the scene tree from the root using the `SceneObjectBase.child` and `SceneObjectBase.find` methods.
*/
static readonly root: Scene;
/**
*  
 * create(className: string, initialState?: {[key: string]: any}): Promise<SceneObjectBase>
 *  
 * 
 * Create a scene object asynchronously.
 * When creating the scene objects, keep the following in mind:
 * - All objects must have an existing class.
 * - New objects always get assigned a globally unique `identifier`.`
 * - `initialState` is optional, but encouraged to be used.
 * - `initialState` can contain any `key: value` pair for any settable property of the class being instantiated.
 * - `name` in `initialState` is being used, unless it's not provided - then `dynamicObject` is used.
 * )
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static create(className: string, initialState?: {[key: string]: any}): Promise<SceneObjectBase>;

/**
*  
 * destroy(sceneObject: string | SceneObjectBase): Promise<void>
 *  
 * 
 * Destroy a scene object, asynchronously.
 * When destroying scene objects, keep the following in mind:
 *  - All bound properties will be automatically unbound on destruction.
 *  - Destroying a scene object automatically removes it from any parent.
 *  - Destroying a scene object automatically removes it all children from it.
 *  - Destroying a scene object that doesn't exist fails the `Promise`.
 *  - Destroying a scene object that was created in Studio fails the `Promise`.
 * 
 * Note: This API requires "Scripting Dynamic Instantiation" capability to be enabled.
 */
static destroy(sceneObject: SceneObjectBase | string): Promise<void>;

/**
*  
 * projectToScreen(point: PointSignal): Vec2Signal
 *  
 * 
 * Returns a signal with the value that corresponds to the 2D point value (in Screen Space) of the given world coordinate.
 * Screen space positions are represented in the range of `(0, 0)` to `(CameraInfo.previewSize.width, CameraInfo.previewSize.height)`,
 * with the coordinate start being the top left point of the screen and `previewSize.width/height` being the bottom right.
 * 
 * The values in the returned signal are not capped to the size of the screen space and can lie outside of the visible screen area.
 * 
 * This functionality can be used for precisely positioning 2D screen elements or to add additional effects that apply to the entire camera texture, based on contents of the scene.
 */
static projectToScreen(point: PointSignal): Vec2Signal;

/**
*  
 * unprojectToFocalPlane(location: Vec2Signal): PointSignal
 *  
 * 
 * Returns a signal with the value that corresponds to the 3d point (in World Space, in current units) of the given screenSpace point from the Vec2Signal.
 * The z coordinate of the PointSignal will be calculated so that the 3d point will always be on the canvas (which should be on the Focal Plane).
 * This function can be combined with TouchGestures to create a 3d point signal.
 * 
 * 
 *  
 * var S = require('Scene')
 * TouchGestures.onPan().subscribe(function(gesture) {
 * var signal = S.unprojectToFocalPlane(gesture.location);
 * });
 *  
 */
static unprojectToFocalPlane(location: Vec2Signal): PointSignal;

/**
*  
 * unprojectWithDepth(location: Vec2Signal, depth: number): PointSignal
 *  
 * 
 * Returns a signal with the value that corresponds to the 3d point value (in World Space, in current units) of the given screenSpace point from the Vec2Signal.
 * The z coordinate of the PointSignal will always be equal to the given depth value. The depth should be given in current units.
 * This function can be combined with TouchGestures to create a 3d point signal.
 *  
 * var Scene = require('Scene')
 * var TouchGestures = require('TouchGestures')
 * TouchGestures.onPan().subscribe(function(gesture) {
 * var signal = Scene.unprojectWithDepth(gesture.location, 0.5);
 * });
 *  
 */
static unprojectWithDepth(location: Vec2Signal, depth: number): PointSignal;

/**
 * The `HorizontalAlignment` enum describes how an element is aligned horizontally.
 * @property CENTER Indicates that the element is centered.
 * @property LEFT Indicates that the element is left justified.
 * @property RIGHT Indicates that the element is right justified.
 */
static readonly HorizontalAlignment: {
  CENTER: "CENTER",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
}
/**
 * The `ScalingOption` enum describes how an element is scaled.
 * @property FILL Indicates that the resource is is tiled to fill the container.
 * @property FIT Indicates that the resource is scaled proportionately such that the larger dimension, height
or width, matches the size of the container.
 * @property FIT_HEIGHT Indicates that the resource is scaled proportionately to match the height of the container.
 * @property FIT_WIDTH Indicates that the resource is scaled proportionately to match the width of the container.
 * @property IGNORE Indicates that no scaling is applied to the element.
 * @property STRETCH Indicates that the resource is stretched in the height and width dimensions to fill the
container.
 */
static readonly ScalingOption: {
  FILL: "FILL",
  FIT: "FIT",
  FIT_HEIGHT: "FIT_HEIGHT",
  FIT_WIDTH: "FIT_WIDTH",
  IGNORE: "IGNORE",
  STRETCH: "STRETCH",
}
/**
 * The `VerticalAlignment` enum describes how an element is aligned vertically.
 * @property BOTTOM Indicates that the element is aligned at the bottom of the container.
 * @property CENTER Indicates that the element is aligned with the center of the container.
 * @property TOP Indicates that the element is aligned at the top of the container.
 */
static readonly VerticalAlignment: {
  BOTTOM: "BOTTOM",
  CENTER: "CENTER",
  TOP: "TOP",
}
/**
 * 
 * @property SCREEN_SPACE 
 * @property WORLD_SPACE 
 */
static readonly RenderMode: {
  SCREEN_SPACE: "SCREEN_SPACE",
  WORLD_SPACE: "WORLD_SPACE",
}
/**
 * The StackAlign enum describes the stack children's alignment.
 * @property CENTER Indicates stack's children align to the center of stack.
 * @property END Indicates stack's children align to the end(bottom/right) of stack.
 * @property START Indicates stack's children align to the start(top/left) of stack.
 */
static readonly StackAlign: {
  CENTER: "CENTER",
  END: "END",
  START: "START",
}
/**
 * The Direction enum describes the stack layout's direction.
 * @property HORIZONTAL Indicates stack's children distribute on a row.
 * @property VERTICAL Indicates stack's children distribute on a column.
 */
static readonly Direction: {
  HORIZONTAL: "HORIZONTAL",
  VERTICAL: "VERTICAL",
}
/**
 * The StackDistribute enum describes the stack children's distribution.
 * @property CENTER Indicates stack's children distribute to the center of stack.
 * @property END Indicates stack's children distribute to the end(bottom/right) of stack.
 * @property SPACE_AROUND Indicates stack's children distribute with even margin around them.
 * @property SPACE_BETWEEN Indicates stack's children distribute with even space between them.
 * @property SPACE_EVENLY Indicates stack's children distribute with even space around and between them.
 * @property START Indicates stack's children distribute to the start(top/left) of stack.
 */
static readonly StackDistribute: {
  CENTER: "CENTER",
  END: "END",
  SPACE_AROUND: "SPACE_AROUND",
  SPACE_BETWEEN: "SPACE_BETWEEN",
  SPACE_EVENLY: "SPACE_EVENLY",
  START: "START",
}
/**
 * The `TrackingMode` enum describes how a PlaneTracker is tracking an object.
 * @property MOVING_OBJECT Indicates that a moving object is being tracked.
 * @property PLANE Indicates that a horizontal plane is being tracked.
 */
static readonly TrackingMode: {
  MOVING_OBJECT: "MOVING_OBJECT",
  PLANE: "PLANE",
}
/**
 * The `TextAlignment` enum describes how a text element is aligned horizontally.
 * @property CENTER Indicates that the text is centered.
 * @property LEFT Indicates that the text is left-justified.
 * @property RIGHT Indicates that the text is right-justified.
 */
static readonly TextAlignment: {
  CENTER: "CENTER",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
}
/**
 * The `VerticalTextAlignment` enum describes how a text element is aligned vertically.
 * @property BOTTOM Indicates that the text is aligned at the bottom of the container.
 * @property CENTER Indicates that the text is aligned at the center of the container.
 * @property TOP Indicates that the text is aligned at the top of the container.
 */
static readonly VerticalTextAlignment: {
  BOTTOM: "BOTTOM",
  CENTER: "CENTER",
  TOP: "TOP",
}
}
export = SceneModule;
