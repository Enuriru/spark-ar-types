

/**
[{"kind":"capability","capability":"intent","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
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
