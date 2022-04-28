/// <reference path="../Scene.AudioTransformParameterWrapper/index.d.ts" />


/**
[{"kind":"capability","capability":"audioEnableAudioTransformsAPI","orCapability":""}]
*/


/**
The `AudioTransformWrapper` class describes an audio transform.
*/
declare interface AudioTransformWrapper {

/**
```
(get) effectName: string
(set) (Not Available)
```
*/
effectName: string

/**
```
transformParameterAtIndex(index: number): AudioTransformParameterWrapper
```

*/
transformParameterAtIndex(index: number): AudioTransformParameterWrapper

/**
```
transformParameterByName(name: string): AudioTransformParameterWrapper
```

*/
transformParameterByName(name: string): AudioTransformParameterWrapper

/**
```
transformParametersCount(): number
```

*/
transformParametersCount(): number

}
