/// <reference path="../FormFactor.FormFactorCategoryBase/index.d.ts" />
/// <reference path="../FormFactor.FormFactorCategoryType/index.d.ts" />


/**
[{"kind":"introducedBy","version":3829334519},{"kind":"capability","capability":"formFactor","orCapability":""}]
*/


/**
The `FormFactorModule` class allows you to get the form factors of current effect.
*/
declare interface FormFactor extends Module {

/**
```
get(categoryType: FormFactorCategoryType): FormFactorCategoryBase
```

Get a form factor by category id
*/
get(categoryType: FormFactorCategoryType): FormFactorCategoryBase

/**
```
getAll(): FormFactorCategoryMap
```

Get all the used form factors
*/
getAll(): FormFactorCategoryMap

}
