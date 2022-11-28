/// <reference path="../Layers.DestroyOption/index.d.ts" />
/// <reference path="../Layers.Layer/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />


/**
[{"kind":"introducedBy","version":1239481247},{"kind":"capability","capability":"layers","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect"]}]
*/


/**
The `LayersModule` class provides access to layers.  It allow dynamic creation
and destruction of layers, modifying layer properties such as render order,
as well as changing what layer a scene object is in.
*/
declare interface Layers extends Module {

/**
```
(get) END_COUNT: undefined
(set) END_COUNT: undefined
```

END_COUNT may be used for 'count' parameter to move to top with moveUp(), or to the bottom with moveDown()
*/
END_COUNT: undefined

/**
```
create(properties: {hidden: boolean, name: string, renderOrder: number}): Promise<Layer>
```

Creates a new layer with specified properties
*/
create(properties: {hidden: boolean, name: string, renderOrder: number}): Promise<Layer>

/**
```
destroy(l: Layer, option: DestroyOption): Promise<void>
```

Destroy the specfied layer.  Only layers created dynamically through 'create' may be destroyed.
*/
destroy(l: Layer, option: DestroyOption): Promise<void>

/**
```
findFirst(name: string): Promise<Layer | null>
```

Finds the first layer of a specified name
*/
findFirst(name: string): Promise<Layer | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Layer>>
```

Return layers whose name match the pattern specified
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Layer>>

/**
```
getAll(): Promise<Array<Layer>>
```

Returns an array of all layers
*/
getAll(): Promise<Array<Layer>>

/**
```
getLayer(obj: SceneObjectBase): Promise<Layer | null>
```

Get the layer, if it has one, that the specified scene object belongs to
*/
getLayer(obj: SceneObjectBase): Promise<Layer | null>

/**
```
moveDown(l: Layer, count: number): Promise<number>
```

Change the rendering order of a layer, moving it down so that it renders sooner.  Returns new render order.
*/
moveDown(l: Layer, count: number): Promise<number>

/**
```
moveUp(l: Layer, count: number): Promise<number>
```

Change the rendering order of a layer, moving it up so that it renders later. Returns new render order.
*/
moveUp(l: Layer, count: number): Promise<number>

/**
```
setLayer(obj: SceneObjectBase, lyr: Layer): Promise<void>
```

Set the layer that a scene object should belong to
*/
setLayer(obj: SceneObjectBase, lyr: Layer): Promise<void>

}



/**

//==============================================================================
// The following example demonstrates how to create layer and move it to top of
// the rendering order (rendered last), and move scene object named "Object1"
// into it.
//
// Project Setup
// - Create scene object named "Object1"
//==============================================================================

// Load in the required modules
const Layers = require('Layers');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Create new layer
  const [newLayer, object1] = await Promise.all([
    Layers.create({name:'NewLayer',renderOrder:Layers.END_COUNT}),
    Scene.root.findFirst('Object1')
  ]);

  // Place object1 into newLayer
  await Promise.all([
    Layers.setLayer(object1, newLayer)
  ]);
// Enable async/await in JS [part 2]
})();

*/