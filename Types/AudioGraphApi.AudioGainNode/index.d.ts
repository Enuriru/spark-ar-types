/// <reference path="../AudioGraphApi.AudioInput/index.d.ts" />
/// <reference path="../AudioGraphApi.AudioOutputNode/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


declare interface AudioGainNode extends AudioOutputNode {

/**
```
(get) audioInput: AudioInput
(set) (Not Available)
```
*/
audioInput: AudioInput

/**
```
(get) gain: GainImpl
(set) gain: GainImpl
```
*/
gain: GainImpl

/**
```
(get) input: AudioInput
(set) input: AudioInput
```
*/
input: AudioInput

}
