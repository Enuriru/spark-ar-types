

/**
[{"kind":"deprecatedBy","version":2183824011},{"kind":"removedBy","version":1510423516},{"kind":"availableIn","availableIn":"DocumentType.Effect"}]
*/


/**
The `StorageScope` class encapsulates different methods of storage for persistent objects.
*/
declare interface StorageScope {

/**
```
get(key: string): Promise<object>
```

Gets the value with the specified key.
Returns a `Promise` which will be fulfilled with a JavaScript object or an error.
*/
get(key: string): Promise<object>

/**
```
remove(key: string): Promise<boolean>
```

Removes the key.
Returns a `Promise` that resolves to nothing or an error.
*/
remove(key: string): Promise<boolean>

/**
```
set(key: string, value: Object): Promise<boolean>
```

Sets the value for the key.
Returns a `JS Promise` or an error.
*/
set(key: string, value: Object): Promise<boolean>

}
