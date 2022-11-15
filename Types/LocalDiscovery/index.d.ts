/// <reference path="../LocalDiscovery.CatalogEntry/index.d.ts" />
/// <reference path="../LocalDiscovery.CatalogType/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":"DocumentType.Any"},{"kind":"introducedBy","version":3708918363},{"kind":"capability","capability":"localDiscovery","orCapability":""}]
*/


declare interface LocalDiscovery extends Module {

/**
```
queryLocalCatalog(catalog: CatalogType): Promise<Array<CatalogEntry>>
```

Retrieves nearby local data from the specified catalog.
*/
queryLocalCatalog(catalog: CatalogType): Promise<Array<CatalogEntry>>

}
