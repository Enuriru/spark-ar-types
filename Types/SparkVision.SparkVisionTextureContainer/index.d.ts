

/**
[{"kind":"capability","capability":"genericML","orCapability":""}]
*/


declare interface SparkVisionTextureContainer {

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
