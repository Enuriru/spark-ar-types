

/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `RandomModule` class enables random number generation.
*/
declare interface Random extends Module {

/**
```
random(): number
```

Returns a uniformly distributed number between 0.0 (inclusive) and 1.0 (exclusive).
*/
random(): number

}



/**

//==============================================================================
// The following example demonstrates how to generate a random number and use it
// to change the scale of an object.
//
// Project setup:
// - Insert a plane
//==============================================================================

// Load in the required modules
const Random = require('Random');
const Scene = require('Scene');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the plane in the Scene
  const [plane] = await Promise.all([
    Scene.root.findFirst('plane0')
  ]);

  // Store a random number
  const randomNum = Random.random();

  // Bind the random number to the x-axis scale signal of the plane
  plane.transform.scaleX = randomNum;
// Enable async/await in JS [part 2]
})();

*/