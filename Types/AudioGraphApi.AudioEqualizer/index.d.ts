/// <reference path="../AudioGraphApi.AudioInput/index.d.ts" />
/// <reference path="../AudioGraphApi.AudioOutputNode/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


declare interface AudioEqualizer extends AudioOutputNode {

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
(set) band1Freq: ScalarSignal
```
*/
band1Freq: ScalarSignal

/**
```
(get) (Not Available)
(set) band1Gain: ScalarSignal
```
*/
band1Gain: ScalarSignal

/**
```
(get) (Not Available)
(set) band1Quality: ScalarSignal
```
*/
band1Quality: ScalarSignal

/**
```
(get) (Not Available)
(set) band1Type: BandType
```
*/
band1Type: BandType

/**
```
(get) (Not Available)
(set) band2Freq: ScalarSignal
```
*/
band2Freq: ScalarSignal

/**
```
(get) (Not Available)
(set) band2Gain: ScalarSignal
```
*/
band2Gain: ScalarSignal

/**
```
(get) (Not Available)
(set) band2Quality: ScalarSignal
```
*/
band2Quality: ScalarSignal

/**
```
(get) (Not Available)
(set) band2Type: BandType
```
*/
band2Type: BandType

/**
```
(get) (Not Available)
(set) band3Freq: ScalarSignal
```
*/
band3Freq: ScalarSignal

/**
```
(get) (Not Available)
(set) band3Gain: ScalarSignal
```
*/
band3Gain: ScalarSignal

/**
```
(get) (Not Available)
(set) band3Quality: ScalarSignal
```
*/
band3Quality: ScalarSignal

/**
```
(get) (Not Available)
(set) band3Type: BandType
```
*/
band3Type: BandType

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

}
