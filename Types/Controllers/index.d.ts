/// <reference path="../Controllers.Button/index.d.ts" />


/**
[{"kind":"capability","capability":"controllers","orCapability":""}]
*/


/**
The `ControllersModule` allows access to input devices such as the Portal TV remote control.
*/
declare interface Controllers extends Module {

/**
```
getButton(name: string): Promise<Button>
```

Returns a promise that is fulfilled with a `Button` representing the button mapping with the
given name. This name, and the mapping from the name to the actual hardware inputs on a
controller, must be set up in Spark AR Studio's controller configuration. If no button
mapping exists with the given name, the returned promise will fail.
*/
getButton(name: string): Promise<Button>

}
