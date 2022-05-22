/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare class LocaleModule {
/**
* ```
(get) language: StringSignal
(set) (Not Available)
```

Provides the ISO 639-1 compliant language identifier, e.g. `en` or `zh`.
*/
static readonly language: StringSignal;
/**
* ```
(get) locale: StringSignal
(set) (Not Available)
```

Provides the ISO 639-1 language + ISO 3166-1 region compliant locale identifier, e.g. `en_US` or `zh_HK`.
*/
static readonly locale: StringSignal;
/**
* ```
(get) region: StringSignal
(set) (Not Available)
```

Provides the ISO 3166-1 region identifier, e.g. `US`, or `HK`.
*/
static readonly region: StringSignal;
}
export = LocaleModule;
