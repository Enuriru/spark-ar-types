

/**
[{"kind":"capability","capability":"genericML","orCapability":""}]
*/


declare interface SparkVisionTextureContainer {

/**
```
(get) names: Array<string>
(set) (Not Available)
```
*/
names: Array<string>

/**
```
emitTextureDetectedEvent(instanceId: number, name: String): void
```

*/
emitTextureDetectedEvent(instanceId: number, name: String): void

/**
```
onDetected(callback: {}): void
```

*/
onDetected(callback: {}): void

}
