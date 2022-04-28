/// <reference path="../OpenML.MLModel/index.d.ts" />


/**
[{"kind":"introducedBy","version":1774572365},{"kind":"capability","capability":"genericML","orCapability":""}]
*/


/**
A class that serves as an entrypoint to access all ML models in the effect.
*/
declare interface MLModels {

/**
```
findFirst(name: string): Promise<MLModel | null>
```

Find first ML model that matches a given name pattern.
*/
findFirst(name: string): Promise<MLModel | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<MLModel>>
```

Find ML models with names that match a given pattern.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<MLModel>>

/**
```
getAll(): Promise<Array<MLModel>>
```

Get all ML models that are bundled in this effect.
*/
getAll(): Promise<Array<MLModel>>

}
