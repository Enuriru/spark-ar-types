

/**
[{"kind":"capability","capability":"blocks","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The BlocksAsset class represents a single Block Asset.
*/
declare interface BlockAsset {

/**
```
(get) identifier: string
(set) (Not Available)
```

Unique identifier of this Block Asset.
*/
identifier: string

/**
```
(get) name: string
(set) (Not Available)
```

Name of this Block Asset.
*/
name: string

}



/**

//====================================================================================
// The following example demonstrates how to get the name and identifier
// of the individual asset.
//
// Project setup:
// - Add a Block and instantiate multiple instances
// - Edit the Block
//   - Insert a particles system in the scene
//   - Insert a plane in the scene
//   - Make sure that the particles system and plane are children of the Block Root
//   - Edit the block properties of the Block Root
//   - Create an input of Name: blockInput0, Type: Number, Input Limit:
//     None, Input Style: Text Input, Default Value: 0.9
//   - Create an output of Name: blockOutput, Type: Number, Input Limit:
//     None, Input Style: Text Input, Default Value: 65
//   - Save and close block
//
//====================================================================================

// Load in the required modules
const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
// Locate a Block in the scene
Scene.root.findFirst('block0').then(function(block){
    // Set a scalar input (signals also accepted)
    block.inputs.setScalar('blockInput0', 5)
    .then(function() {
        // Log a success message on the screen with name of the
       // associated block
        Diagnostics.watch('Scalar signal successfully set!',
        block.name);
    }, function(error) {
        // input named blockInput probably doesn't exist
        // or is not of scalar type, check error for details
        Diagnostics.log(error);
    });
    // Get a scalar output
    block.outputs.getScalar('blockOutput0')
    .then(function(blockOutputScalarSignal){
        // Identify the block and watch it's output signal on the
       // console
        Diagnostics.watch(block.identifier, blockOutputScalarSignal);
    }, function(error) {
        // output named blockOutput probably doesn't exist
        // or is not of scalar type, check error for details
        Diagnostics.log(error);
    });
});

*/