/// <reference path="../AudioGraphApi.AudioInput/index.d.ts" />
/// <reference path="../AudioGraphApi.AudioOutputNode/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


declare interface AudioPitchShifter extends AudioOutputNode {

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
(set) semitones: ScalarSignal
```
*/
semitones: ScalarSignal

}
