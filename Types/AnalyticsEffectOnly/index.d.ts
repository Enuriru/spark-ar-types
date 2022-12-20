/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"scriptAnalytics","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]},{"kind":"introducedBy","version":1438850882}]
*/


/**
The `AnalyticsModule` class enables logging analytics events.
*/
declare interface Analytics extends Module {

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

/**
```
logStructuredEvent(eventName: string, payload: any): void
```

Log a generic Falco event with the specified payload object.
*/
logStructuredEvent(eventName: string, payload: any): void

}
