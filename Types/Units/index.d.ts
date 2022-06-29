
/**
The `UnitsModule` class provides functionality for converting values into world-space units.
*/
declare interface Units extends Module {

/**
```
cm(centimeters: number): number
```

Converts the specified centimeter value to world units.
*/
cm(centimeters: number): number

/**
```
ft(feet: number): number
```

Converts the specified foot value to world units.
*/
ft(feet: number): number

/**
```
in(inches: number): number
```

Converts the specified inch value to world units.
*/
in(inches: number): number

/**
```
m(meters: number): number
```

Converts the specified meter value to world units.
*/
m(meters: number): number

/**
```
mm(millimeters: number): number
```

Converts the specified millimeter value to world units.
*/
mm(millimeters: number): number

/**
```
yd(yards: number): number
```

Converts the specified yard value to world units.
*/
yd(yards: number): number

}



/**

//==============================================================================
// The following example demonstrates how to convert values into world-space
// units.
//
//==============================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');
const Units = require('Units');

// Create a variable to use as a basis for conversion
const value = 5;

Diagnostics.log(
`${value} world units converted to the following units of measurement is: \n

  millimeters => ${ Units.mm(value) } \n
  centimeters => ${ Units.cm(value) } \n
  meters      => ${ Units.m (value) } \n
  inches      => ${ Units.in(value) } \n
  feet        => ${ Units.ft(value) } \n
  yards       => ${ Units.yd(value) } \n`
);

*/