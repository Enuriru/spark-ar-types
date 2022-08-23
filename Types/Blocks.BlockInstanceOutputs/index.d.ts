/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />


/**
[{"kind":"capability","capability":"blocksScripting","orCapability":""}]
*/


/**
Represents an object encapsulating all outputs for a Block.
*/
declare interface BlockInstanceOutputs {

/**
```
setBoolean(name: string, signal: BoolSignal | boolean): Promise<void>
```

Sends a BoolSignal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not a BoolSignal
*/
setBoolean(name: string, signal: BoolSignal | boolean): Promise<void>

/**
```
setColor(name: string, signal: RgbaSignal): Promise<void>
```

Sends a RgbaSignal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not of Rgba or Vec4.
*/
setColor(name: string, signal: RgbaSignal): Promise<void>

/**
```
setPoint(name: string, signal: PointSignal): Promise<void>
```

Sends a PointSignal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not a PointSignal
*/
setPoint(name: string, signal: PointSignal): Promise<void>

/**
```
setPoint2D(name: string, signal: Vec2Signal): Promise<void>
```

Sends a Vec2Signal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not a Vec2Signal
*/
setPoint2D(name: string, signal: Vec2Signal): Promise<void>

/**
```
setPulse(name: string, signal: EventSource<any>): Promise<void>
```

Sends an EventsSource to the Block's input with the given `name`. Returns a promise that
is fulfilled if the operation succeeds and is rejected if the operation fails, such
as if no input exists with the given name, or if the input's type is not an EventSource.
*/
setPulse(name: string, signal: EventSource<any>): Promise<void>

/**
```
setScalar(name: string, signal: ScalarSignal | number): Promise<void>
```

Sends a ScalarSignal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not a ScalarSignal
*/
setScalar(name: string, signal: ScalarSignal | number): Promise<void>

/**
```
setShader(name: string, signal: ShaderSignal): Promise<void>
```

Sends a ShaderSignal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not a ShaderSignal
*/
setShader(name: string, signal: ShaderSignal): Promise<void>

/**
```
setString(name: string, signal: StringSignal | string): Promise<void>
```

Sends a StringSignal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not a StringSignal
*/
setString(name: string, signal: StringSignal | string): Promise<void>

/**
```
setVec4(name: string, signal: Vec4Signal): Promise<void>
```

Sends a Vec4Signal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not of Rgba or Vec4.
*/
setVec4(name: string, signal: Vec4Signal): Promise<void>

/**
```
setVector(name: string, signal: VectorSignal): Promise<void>
```

Sends a VectorSignal to the Block's input with the given `name`. Returns a promise that
 is fulfilled if the operation succeeds and is rejected if the operation fails, such
 as if no input exists with the given name, or if the input's type is not a VectorSignal
*/
setVector(name: string, signal: VectorSignal): Promise<void>

}
