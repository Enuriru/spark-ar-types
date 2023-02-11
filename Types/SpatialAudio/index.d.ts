/// <reference path="../AudioGraphApi.AudioSpatialEmitterNode/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":1196012028}]
*/


declare interface SpatialAudio extends Module {

/**
```
(get) DefaultRange: undefined
(set) DefaultRange: undefined
```
*/
DefaultRange: undefined

/**
```
createEmitter(optionalParams?: {range?: number}): AudioSpatialEmitterNode
```

*/
createEmitter(optionalParams?: {range?: number}): AudioSpatialEmitterNode

}
