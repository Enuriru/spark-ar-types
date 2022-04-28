/// <reference path="../FormFactor.FormFactorCategoryBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

declare interface LocaleFormFactor extends FormFactorCategoryBase {

/**
```
(get) language: StringSignal
(set) (Not Available)
```

Returns the current language
Note: It returns the form factor value of current effect. If it's running
on a device with unsupported form factor value, it will fallback to a
default value depends on your setup.
Note: As above, this language may be different from result you can get from
LocaleModule if fallback happens.
*/
language: StringSignal

/**
```
(get) locale: StringSignal
(set) (Not Available)
```

Returns the current string value of locale form factor
Note: It returns the form factor value of current effect. If it's running
on a device with unsupported form factor value, it will fallback to a
default value depends on your setup.
Note: As above, this locale may be different from result you can get from
LocaleModule if fallback happens.
*/
locale: StringSignal

/**
```
(get) region: StringSignal
(set) (Not Available)
```

Returns the current region, it can be empty if "locale" result is language only
Note: It returns the form factor value of current effect. If it's running
on a device with unsupported form factor value, it will fallback to a
default value depends on your setup.
Note: As above, this locale may be different from result you can get from
LocaleModule if fallback happens.
*/
region: StringSignal

}
