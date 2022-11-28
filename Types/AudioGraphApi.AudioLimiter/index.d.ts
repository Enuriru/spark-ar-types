/// <reference path="../AudioGraphApi.AudioInput/index.d.ts" />
/// <reference path="../AudioGraphApi.AudioOutputNode/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


declare interface AudioLimiter extends AudioOutputNode {

/**
```
(get) (Not Available)
(set) attackTime: ScalarSignal
```
*/
attackTime: ScalarSignal

/**
```
(get) audioInput: AudioInput
(set) (Not Available)
```
*/
audioInput: AudioInput

/**
```
(get) (Not Available)
(set) bypass: BoolSignal
```
*/
bypass: BoolSignal

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
(set) linked: BoolSignal
```
*/
linked: BoolSignal

/**
```
(get) (Not Available)
(set) outputCeiling: ScalarSignal
```
*/
outputCeiling: ScalarSignal

/**
```
(get) (Not Available)
(set) releaseTime: ScalarSignal
```
*/
releaseTime: ScalarSignal

/**
```
(get) (Not Available)
(set) threshold: ScalarSignal
```
*/
threshold: ScalarSignal

}
