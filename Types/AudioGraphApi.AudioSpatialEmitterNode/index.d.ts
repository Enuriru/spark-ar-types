/// <reference path="../AudioGraphApi.AudioInput/index.d.ts" />
/// <reference path="../AudioGraphApi.AudioNodeBase/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphApi","orCapability":""}]
*/


declare interface AudioSpatialEmitterNode extends AudioNodeBase {

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
(set) spatialPosition: PointSignal
```
*/
spatialPosition: PointSignal

}
