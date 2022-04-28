/// <reference path="../FormFactor.FormFactorCategoryBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

declare interface PlatformFormFactor extends FormFactorCategoryBase {

/**
```
(get) platform: StringSignal
(set) (Not Available)
```

Returns the current string value of platform form factor
Note: It returns the form factor value of current effect. If it's running
on a device with unsupported form factor value, it will fallback to a
default value depends on your setup.
*/
platform: StringSignal

}
