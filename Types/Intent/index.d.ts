

/**
[{"kind":"capability","capability":"intent","orCapability":""}]
*/


/**
`Intent` module exposes functionality to use 3rd party features and services that have been exposed
by product on the app side.
*/
declare interface Intent extends Module {

/**
```
openMapDirections(latitude: number, longitude: number): Promise<void>
```

*/
openMapDirections(latitude: number, longitude: number): Promise<void>

}
