/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"blocks","orCapability":""}]
*/


/**
The `BlockInstanceInputs` class encapsulates methods for setting inputs to the block instance.
*/
declare interface BlockInstanceInputs {

/**
```
setBoolean(name: string, v: BoolSignal): Promise<void>
```

Sends a `BoolSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `BoolSignal`.
*/
setBoolean(name: string, v: BoolSignal): Promise<void>

/**
```
setColor(name: string, v: ColorSignal): Promise<void>
```

Sends a `ColorSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `ColorSignal`.
*/
setColor(name: string, v: ColorSignal): Promise<void>

/**
```
setPoint(name: string, v: PointSignal): Promise<void>
```

Sends a `PointSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `PointSignal`.
*/
setPoint(name: string, v: PointSignal): Promise<void>

/**
```
setPoint2D(name: string, v: Vec2Signal): Promise<void>
```

Sends a `Vec2Signal` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `Vec2Signal`.
*/
setPoint2D(name: string, v: Vec2Signal): Promise<void>

/**
```
setPulse(name: string, v: EventSource<any>): Promise<void>
```

Sends a `EventSource` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `EventSource`.
*/
setPulse(name: string, v: EventSource<any>): Promise<void>

/**
```
setScalar(name: string, v: ScalarSignal): Promise<void>
```

Sends a `ScalarSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `ScalarSignal`.
*/
setScalar(name: string, v: ScalarSignal): Promise<void>

/**
```
setShader(name: string, v: ShaderSignal): Promise<void>
```

Sends a `ShaderSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `ShaderSignal`.
*/
setShader(name: string, v: ShaderSignal): Promise<void>

/**
```
setString(name: string, v: StringSignal): Promise<void>
```

Sends a `StringSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `StringSignal`.
*/
setString(name: string, v: StringSignal): Promise<void>

/**
```
setVector(name: string, v: VectorSignal): Promise<void>
```

Sends a `VectorSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled
if the operation succeeds and is rejected if the operation fails, such as if no
input exists with the given name, or if the input's type is not a `VectorSignal`.
*/
setVector(name: string, v: VectorSignal): Promise<void>

}
