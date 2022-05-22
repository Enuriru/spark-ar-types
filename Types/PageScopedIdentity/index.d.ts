

/**
[{"kind":"capability","capability":"pageScopedIdentity","orCapability":""}]
*/


declare interface PageScopedIdentity extends Module {

/**
```
getPageScopedID(): Promise<string>
```

Returns a `JS Promise` which will be fulfilled with Page Scoped ID `string` object or an error.
*/
getPageScopedID(): Promise<string>

}
