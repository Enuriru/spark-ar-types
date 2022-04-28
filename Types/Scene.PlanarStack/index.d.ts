/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.PlanarObject/index.d.ts" />

/**
The `PlanarStack` class describes a stack of 2D Scene Elements.
*/
declare interface PlanarStack extends PlanarObject {

/**
```
(get) childAlign: StringSignal<SceneModule.StackAlign>
(set) childAlign: StringSignal<SceneModule.StackAlign>
```

Specifies the alignment of the stack children
*/
childAlign: StringSignal<SceneModule.StackAlign>

/**
```
(get) childDistribute: StringSignal<SceneModule.StackDistribute>
(set) childDistribute: StringSignal<SceneModule.StackDistribute>
```

Specifies the distribution of the stack children
*/
childDistribute: StringSignal<SceneModule.StackDistribute>

/**
```
(get) direction: StringSignal<SceneModule.Direction>
(set) direction: StringSignal<SceneModule.Direction>
```

Specifies the direction of the stack layout.
*/
direction: StringSignal<SceneModule.Direction>

/**
```
(get) gap: ScalarSignal
(set) gap: ScalarSignal
```

Specifies the gap between the stack children
*/
gap: ScalarSignal

/**
```
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

/**
```
setMaterial(m: MaterialBase): Promise<null>
```

Returns a promise that is resolved when given material is associated with a given scene object.
*/
setMaterial(m: MaterialBase): Promise<null>

}



/**

//==============================================================================
// The following example demonstrates how to create a Planar Stack (2D Stack),
// add a couple PlanarImages (2D Rectanges) to the stack
// and modify various properties of the Planar Stack.
//
// Project setup:
// - Add the Scripting Dynamic Instantiation capability to the project
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Materials = require('Materials');
const Reactive = require('Reactive');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Focal Distance Scene element
  const focalDistance = await Scene.root.findFirst('Focal Distance');
  // Create a Planar Stack 2D Stack and add it as a child to Focal Distance
  const stack2D = await Scene.create("PlanarStack", {
      "name": "2D Stack",
  });
  stack2D.transform.x = -0.08;
  focalDistance.addChild(stack2D);

  // Create Default Materials - Red and Green
  const [defaultMaterial0, defaultMaterial1] = await Promise.all([
    Materials.create("DefaultMaterial", {
      "name": "Default Material 0",
      "blendMode": "ALPHA",
      "opacity": 1.0,
      "diffuseColorFactor": Reactive.RGBA(1,0,0,1),
    }),
    Materials.create("DefaultMaterial", {
      "name": "Default Material 1",
      "blendMode": "ALPHA",
      "opacity": 1.0,
      "diffuseColorFactor": Reactive.RGBA(0,1,0,1),
    }),
  ]);

  // Create 2D rectanges (Planar Images) and add it to the Stack
  const [dynamicRectangle0, dynamicRectangle1] = await Promise.all([
    Scene.create("PlanarImage", {
      "name": "rectangle0",
      "width": 200,
      "height": 200,
      "material": defaultMaterial0,
    }),
    Scene.create("PlanarImage", {
      "name": "rectangle1",
      "width": 200,
      "height": 200,
      "material": defaultMaterial1,
    }),
  ]);
  stack2D.addChild(dynamicRectangle0);
  stack2D.addChild(dynamicRectangle1);

  // Modify stack properties
  // Set the direction of the stack layout
  stack2D.direction = Scene.Direction.HORIZONTAL;
  // Set the distribution of the stack children
  stack2D.distribute = Scene.StackDistribute.START;
  // Set the alignment of the stack children
  stack2D.childAlign = Scene.StackAlign.CENTER;
  // Set the gap between the stack children
  stack2D.gap = Reactive.val(10);
})(); // Enable async/await in JS [part 2]

*/