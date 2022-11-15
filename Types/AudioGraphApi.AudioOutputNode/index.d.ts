/// <reference path="../AudioGraphApi.AudioNodeBase/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


/**
Represents audio node that can output audio to another node
*/
declare interface AudioOutputNode extends AudioNodeBase {

/**
```
(get) targetsOfAudioOutput: undefined
(set) (Not Available)
```
*/
targetsOfAudioOutput: undefined

/**
```
connect(targetAudioInput: AudioMonoInputNode): Promise<void>
```

*/
connect(targetAudioInput: AudioMonoInputNode): Promise<void>

/**
```
disconnect(targetAudioInput: AudioMonoInputNode): Promise<void>
```

*/
disconnect(targetAudioInput: AudioMonoInputNode): Promise<void>

}
