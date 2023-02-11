
/**
PlanarImage based UI primitive
*/
declare interface UIPlanarImagePrimitive<TStyle> extends UIPlanarObjectPrimitiveBase<PlanarImage, TStyle> {

/**
```
applyStyle(style: Partial<TStyle>): void
```

*/
applyStyle(style: Partial<TStyle>): void

/**
```
init(config: UIPrimitiveConfig<TStyle>): void
```

*/
init(config: UIPrimitiveConfig<TStyle>): void

}
