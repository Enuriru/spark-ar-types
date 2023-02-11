
/**
PlanarImage based UI primitive that is invisible but can be registered for events
*/
declare interface UIPlanarInvisiblePrimitive extends UIPlanarObjectPrimitiveBase<PlanarImage, UIPrimitiveStyle> {

/**
```
applyStyle(style: Partial<UIPrimitiveStyle>): void
```

*/
applyStyle(style: Partial<UIPrimitiveStyle>): void

/**
```
init(config: UIPrimitiveConfig<UIPrimitiveStyle>): void
```

*/
init(config: UIPrimitiveConfig<UIPrimitiveStyle>): void

}
