/// <reference path="../AudioGraphApi.AudioSpeakerNode/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":1196012028}]
*/


declare interface SpatialAudio extends Module {

/**
```
createEmitter(): Promise<AudioSpeakerNode>
```

*/
createEmitter(): Promise<AudioSpeakerNode>

}
