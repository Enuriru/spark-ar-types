

/**
[{"kind":"capability","capability":"identity","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Effect"}]
*/


declare interface Identity extends Module {

/**
```
getAccessToken(): Promise<string>
```

Returns a `JS Promise` which will be fulfilled with Access Token `string` object or an error.
*/
getAccessToken(): Promise<string>

/**
```
getAppScopedID(): Promise<string>
```

Returns a `JS Promise` which will be fulfilled with App Scope ID `string` object or an error.
*/
getAppScopedID(): Promise<string>

/**
```
getEmailAddress(): Promise<string>
```

Returns a `JS Promise` which will be fulfilled with user Email Address `string` object or an error.
*/
getEmailAddress(): Promise<string>

/**
```
getFullName(): Promise<string>
```

Returns a `JS Promise` which will be fulfilled with user Full Name `string` object or an error.
*/
getFullName(): Promise<string>

}
