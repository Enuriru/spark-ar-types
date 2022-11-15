

/**
[{"kind":"capability","capability":"remote3DModels","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Any"}]
*/


/**
`Remote3DModelsModule` handles downloading remote 3d models
*/
declare interface Remote3DModels extends Module {

/**
```
fetch(url: string): Promise<string>
```

Returns a promise which is resolved with remote model identifier or error.
*/
fetch(url: string): Promise<string>

}
