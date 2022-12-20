

/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect","DocumentType.Experience"]},{"kind":"introducedBy","version":937394730},{"kind":"capability","capability":"dynamicCapabilities","orCapability":""}]
*/


declare interface Capabilities extends Module {

/**
```
tryEnable(_capabilityName: string): Promise<void>
```

*/
tryEnable(_capabilityName: string): Promise<void>

}
