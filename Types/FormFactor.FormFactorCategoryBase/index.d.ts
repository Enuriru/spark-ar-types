/// <reference path="../Reactive.StringSignal/index.d.ts" />


/**
[{"kind":"introducedBy","version":3829334519},{"kind":"capability","capability":"formFactor","orCapability":""}]
*/


/**
The `FormFactoryCategoryBase` is base class of form factor value for a category
*/
declare interface FormFactorCategoryBase {

/**
```
(get) formFactorValue: StringSignal
(set) (Not Available)
```

Returns the current string value of the form factor
Note: It returns the form factor value of current effect. If it's running
on a device with unsupported form factor value, it will fallback to a
default value depends on your setup.
*/
formFactorValue: StringSignal

}
