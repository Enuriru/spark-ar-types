/// <reference path="../AudioGraphApi.AudioNodeBase/index.d.ts" />
/// <reference path="../AudioGraphApi.AudioOutputNode/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


/**
The `AudioInput` class represents an input of an audio node. Each audio node could have several inputs
When connecting to a node, we are connecting output of an AudioNode to an AudioInput.
*/
declare interface AudioInput {

/**
```
(get) audioNode: AudioNodeBase
(set) (Not Available)
```
*/
audioNode: AudioNodeBase

/**
```
(get) audioSource: AudioOutputNode | null
(set) audioSource: AudioOutputNode | null
```
*/
audioSource: AudioOutputNode | null

}
