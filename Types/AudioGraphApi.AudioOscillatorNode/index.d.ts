/// <reference path="../AudioGraphApi.AudioOutputNode/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


declare interface AudioOscillatorNode extends AudioOutputNode {

/**
```
(get) (Not Available)
(set) pitch: ScalarSignal
```
*/
pitch: ScalarSignal

/**
```
(get) (Not Available)
(set) pulseWidth: ScalarSignal
```
*/
pulseWidth: ScalarSignal

/**
```
(get) (Not Available)
(set) type: OscillatorType
```
*/
type: OscillatorType

}
