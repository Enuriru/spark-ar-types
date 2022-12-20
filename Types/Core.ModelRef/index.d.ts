/// <reference path="../Core.NodeId/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />

declare interface ModelRef {

/**
```
(get) constants: {[key: string]: any}
(set) constants: {[key: string]: any}
```
*/
constants: {[key: string]: any}

/**
```
(get) id: NodeId
(set) id: NodeId
```
*/
id: NodeId

/**
```
(get) kind: string
(set) kind: string
```
*/
kind: string

/**
```
addChild(child: ModelRef): Promise<void>
```

*/
addChild(child: ModelRef): Promise<void>

/**
```
destroy(): Promise<void>
```

*/
destroy(): Promise<void>

/**
```
destroySync(): void
```

*/
destroySync(): void

/**
```
getArrayRefProp(prop: string): Promise<ModelRef>
```

*/
getArrayRefProp(prop: string): Promise<ModelRef>

/**
```
getArrayRefPropSync(prop: string): ModelRef | null
```

*/
getArrayRefPropSync(prop: string): ModelRef | null

/**
```
getBool(prop: string): Promise<boolean>
```

*/
getBool(prop: string): Promise<boolean>

/**
```
getBoolSignal(prop: string): BoolSignal
```

*/
getBoolSignal(prop: string): BoolSignal

/**
```
getBoolSync(prop: string): boolean | null
```

*/
getBoolSync(prop: string): boolean | null

/**
```
getChildren(): Promise<Array<ModelRef>>
```

*/
getChildren(): Promise<Array<ModelRef>>

/**
```
getChildrenSync(): Array<ModelRef>
```

*/
getChildrenSync(): Array<ModelRef>

/**
```
getDimenSignal(prop: string): ScalarSignal
```

*/
getDimenSignal(prop: string): ScalarSignal

/**
```
getDimenSync(prop: string): number | null
```

*/
getDimenSync(prop: string): number | null

/**
```
getHsvaVecSignal(prop: string): HsvaSignal
```

*/
getHsvaVecSignal(prop: string): HsvaSignal

/**
```
getScalar(prop: string): Promise<number>
```

*/
getScalar(prop: string): Promise<number>

/**
```
getScalarSignal(prop: string): ScalarSignal
```

*/
getScalarSignal(prop: string): ScalarSignal

/**
```
getScalarSync(prop: string): number | null
```

*/
getScalarSync(prop: string): number | null

/**
```
getString(prop: string): Promise<string>
```

*/
getString(prop: string): Promise<string>

/**
```
getStringSignal(prop: string): StringSignal
```

*/
getStringSignal(prop: string): StringSignal

/**
```
getStringSync(prop: string): string | null
```

*/
getStringSync(prop: string): string | null

/**
```
getTransformSignal(prop: string): TransformSignal
```

*/
getTransformSignal(prop: string): TransformSignal

/**
```
notifyChanged(prop: string): void
```

*/
notifyChanged(prop: string): void

/**
```
setBoolProp(prop: string, v: BoolSignal | boolean | NativeSignalRef<boolean>): void
```

*/
setBoolProp(prop: string, v: BoolSignal | boolean | NativeSignalRef<boolean>): void

/**
```
setColorProp(prop: string, v: ColorSignal): void
```

*/
setColorProp(prop: string, v: ColorSignal): void

/**
```
setDimenProp(prop: string, v: ScalarSignal | number): void
```

*/
setDimenProp(prop: string, v: ScalarSignal | number): void

/**
```
setDimenPropModernUnit(prop: string, v: ScalarSignal | number): void
```

Same as setting the dimensional prop, however uses only "meters".
*/
setDimenPropModernUnit(prop: string, v: ScalarSignal | number): void

/**
```
setHsvaVecProp(prop: string, v: HsvaSignal): void
```

*/
setHsvaVecProp(prop: string, v: HsvaSignal): void

/**
```
setScalarProp(prop: string, v: ScalarSignal | number | NativeSignalRef<number>): void
```

*/
setScalarProp(prop: string, v: ScalarSignal | number | NativeSignalRef<number>): void

/**
```
setStringAsync(prop: string, v: string): Promise<void>
```

*/
setStringAsync(prop: string, v: string): Promise<void>

/**
```
setStringProp(prop: string, v: StringSignal | string | NativeSignalRef<string>): void
```

*/
setStringProp(prop: string, v: StringSignal | string | NativeSignalRef<string>): void

}
