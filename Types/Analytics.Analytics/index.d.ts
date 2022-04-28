/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"scriptAnalytics","orCapability":""}]
*/


/**
The `AnalyticsModule` class enables logging nalytics events.
*/
declare interface Analytics extends Module {

/**
```
(get) cameraProductName: string
(set) (Not Available)
```

Specifies the current context camera product name used for analytics.
Note: This can return empty string in cases where current product name couldn't be determined.
*/
cameraProductName: string

/**
```
(get) productName: StringSignal
(set) (Not Available)
```

Specifies the current context camera product name used for analytics.
Note: This can return empty string signal in cases where current product name couldn't be determined.
*/
productName: StringSignal

/**
```
logEvent(eventName: string, extras: any): void
```

Log an analytics event with a custom name and optional extras object.
*/
logEvent(eventName: string, extras: any): void

}
