/// <reference path="../Prefabs.Prefab/index.d.ts" />


/**
[{"kind":"capability","capability":"externalMeshes","orCapability":""}]
*/


/**
The `PrefabsModule` module provides functionality for working with external meshes.
*/
declare interface Prefabs extends Module {

/**
```
findFirst(name: string): Promise<Prefab | null>
```

Returns a promise that is resolved with the prefab of a requested name or null if none was found.
**See Also**: `Prefabs.findUsingPattern`, `Prefabs.getAll`.
*/
findFirst(name: string): Promise<Prefab | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Prefab>>
```

Returns a promise that is resolved with the all of the prefabs matching the name pattern or empty array if none was found.
Pattern format:
`*` matches any characters sequence.
`\` can be used to include in pattern any of the control characters (including '\' itself)

Examples:
`findUsingPattern("*")` will retrive all of the prefabs.
`findUsingPattern("*A")` will retrieve all of the prefabs suffixed with 'A'.
`findUsingPattern("A*")` will retrieve all of the prefabs prefixed with 'A'.
`findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the prefabs containing 'A',

`limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.

**See Also**: `Prefabs.getAll`, `Prefabs.findFirst`.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<Prefab>>

/**
```
get(prefabName: string): Prefab
```

Returns a prefab object, derived from `Prefab`, that is specified by `prefabName`. An exception is thrown when prefab isn't found. At the moment we have only one type:
  * `Prefab`

**See Also**: `Prefab.name`.
*/
get(prefabName: string): Prefab

/**
```
getAll(): Promise<Array<Prefab>>
```

Returns a promise that is resolved with all of the prefabs.
**See Also**: `Prefabs.findUsingPattern`, `Prefabs.findFirst`.
*/
getAll(): Promise<Array<Prefab>>

}
