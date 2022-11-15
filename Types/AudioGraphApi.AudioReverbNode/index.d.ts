/// <reference path="../AudioGraphApi.AudioInput/index.d.ts" />
/// <reference path="../AudioGraphApi.AudioOutputNode/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


declare interface AudioReverbNode extends AudioOutputNode {

/**
```
(get) audioInput: AudioInput
(set) (Not Available)
```
*/
audioInput: AudioInput

/**
```
(get) input: AudioInput
(set) input: AudioInput
```
*/
input: AudioInput

/**
```
(get) (Not Available)
(set) roomSize: ScalarSignal
```
*/
roomSize: ScalarSignal

/**
```
(get) (Not Available)
(set) wetLevel: ScalarSignal
```
*/
wetLevel: ScalarSignal

/**
```
(get) (Not Available)
(set) width: ScalarSignal
```
*/
width: ScalarSignal

}
