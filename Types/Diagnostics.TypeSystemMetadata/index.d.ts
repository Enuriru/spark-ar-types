
/**
The `TypeSystemMetadata` class contains type system metadata.
*/
declare interface TypeSystemMetadata {

/**
```
getModuleNames(): Promise<Array<string>>
```

Returns a promise that is resolved with an array of names of all the scripting modules that can be loaded through a `require` call.
Note: Available modules are based on the list of enabled capabilities.
*/
getModuleNames(): Promise<Array<string>>

/**
```
getTypeDescriptions(): Promise<Object>
```

Returns a promise that is resolved with the description of all of the types that can be used within effect.
Note: The type descriptions are based on the list of enabled capabilities.
*/
getTypeDescriptions(): Promise<Object>

}



/**

//=========================================================================
// The following example demonstrates how to check which scripting
// modules and types that can be used within an effect.
//=========================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]

  // Get an object containing available module and types information
  const typeSystem = Diagnostics.typeSystem;

  // Get an array containing scripting modules available for import
  const modules = await typeSystem.getModuleNames();

  // Log available modules to the Console
  Diagnostics.log('Available modules: ' + modules);

  // Get an array containing descriptions of types that can be used
  const typeDescriptions = await typeSystem.getTypeDescriptions();

  // Get a description for an available enum
  const exampleEnum = typeDescriptions.enums[0];

  // Create an array for the names of the enum's values
  let values = [];

  // Iterate through the enum's values and add their names to the array
  for (let i = 0; i < exampleEnum.values.length; i++) {
    values.push(exampleEnum.values[i].name);
  }

  // Log the enum's name, description and values to the Console
  Diagnostics.log(exampleEnum.name + '\n' + exampleEnum.description + ' Values: ' + values);

  // Get a description for an available class
  const exampleClass = typeDescriptions.classes[0];

  // Log the name and description of the class to the Console
  Diagnostics.log(exampleClass.name + '\n' + exampleClass.description);

})(); // Enable async/await in JS [part 2]

*/