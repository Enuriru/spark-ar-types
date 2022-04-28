/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"audioGraphComponents","orCapability":""}]
*/


/**
The `AudioComponent` class enables reading audio component parameters as signals in AudioService
*/
declare interface AudioComponent {

/**
```
getParameterValue(parameterName: string): ScalarSignal
```

Returns a scalar signal providing the value of an output parameter
*/
getParameterValue(parameterName: string): ScalarSignal

}
