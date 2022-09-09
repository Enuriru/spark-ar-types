/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface BlockInstanceOutputs {
/**
*  
 * findFirst(name: string, config?: {type?: string}): Promise<BlockInstanceOutput | null>
 *  
 * 
 */
findFirst(name: string, config?: {type?: string}): Promise<BlockInstanceOutput | null>;

/**
*  
 * findUsingPattern(namePattern: string, config?: {limit?: number, type?: string}): Promise<Array<BlockInstanceOutput>>
 *  
 * 
 */
findUsingPattern(namePattern: string, config?: {limit?: number, type?: string}): Promise<Array<BlockInstanceOutput>>;

/**
*  
 * getAll(config?: {type?: string}): Promise<Array<BlockInstanceOutput>>
 *  
 * 
 * Returns a promise that is resolved with all of the Block outputs configured for the block.
 * The optional type param will limit the result to the given type.
 */
getAll(config?: {type?: string}): Promise<Array<BlockInstanceOutput>>;

/**
*  
 * getBoolean(name: string): Promise<BoolSignal>
 *  
 * 
 * Returns a promise that is resolved with a `BoolSignal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of type `BoolSignal`.
 */
getBoolean(name: string): Promise<BoolSignal>;

/**
*  
 * getBooleanOrFallback(name: string, fallback: BoolSignal): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` from the Block output with the given name.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block,
 * or if the output with that name is not of type BoolSignal.
 */
getBooleanOrFallback(name: string, fallback: BoolSignal | boolean): BoolSignal;

/**
*  
 * getColor(name: string): Promise<ColorSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ColorSignal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of Color or Vec4 type.
 */
getColor(name: string): Promise<ColorSignal>;

/**
*  
 * getColorOrFallback(name: string, fallback: ColorSignal): ColorSignal
 *  
 * 
 * Returns a `ColorSignal` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of Color or Vec4 type.
 */
getColorOrFallback(name: string, fallback: ColorSignal): ColorSignal;

/**
*  
 * getPoint(name: string): Promise<PointSignal>
 *  
 * 
 * Returns a promise that is resolved with a `PointSignal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of type `PointSignal`.
 */
getPoint(name: string): Promise<PointSignal>;

/**
*  
 * getPoint2D(name: string): Promise<Vec2Signal>
 *  
 * 
 * Returns a promise that is resolved with a `Vec2Signal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of type `Vec2Signal`.
 */
getPoint2D(name: string): Promise<Vec2Signal>;

/**
*  
 * getPoint2DOrFallback(name: string, fallback: Vec2Signal): Vec2Signal
 *  
 * 
 * Returns a `Vec2Signal` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of type `Vec2Signal'.
 */
getPoint2DOrFallback(name: string, fallback: Vec2Signal): Vec2Signal;

/**
*  
 * getPointOrFallback(name: string, fallback: PointSignal): PointSignal
 *  
 * 
 * Returns a `PointSignal` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of type `PointSignal'.
 */
getPointOrFallback(name: string, fallback: PointSignal): PointSignal;

/**
*  
 * getPulse(name: string): Promise<EventSource<any>>
 *  
 * 
 * Returns a promise that is resolved with a `EventSource` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of type `EventSource`.
 */
getPulse(name: string): Promise<EventSource<any>>;

/**
*  
 * getPulseOrFallback(name: string, fallback: EventSource<any>): EventSource<any>
 *  
 * 
 * Returns an `EventSource` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of type `EventSource'.
 */
getPulseOrFallback(name: string, fallback: EventSource<any>): EventSource<any>;

/**
*  
 * getScalar(name: string): Promise<ScalarSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ScalarSignal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of type `ScalarSignal`.
 */
getScalar(name: string): Promise<ScalarSignal>;

/**
*  
 * getScalarOrFallback(name: string, fallback: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of type `ScalarSignal'.
 */
getScalarOrFallback(name: string, fallback: ScalarSignal | number): ScalarSignal;

/**
*  
 * getShader(name: string): Promise<ShaderSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ShaderSignal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of type `ShaderSignal`.
 */
getShader(name: string): Promise<ShaderSignal>;

/**
*  
 * getShaderOrFallback(name: string, fallback: ShaderSignal): ShaderSignal
 *  
 * 
 * Returns a `ShaderSignal` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of type `ShaderSignal'.
 */
getShaderOrFallback(name: string, fallback: ShaderSignal): ShaderSignal;

/**
*  
 * getString(name: string): Promise<StringSignal>
 *  
 * 
 * Returns a promise that is resolved with a `StringSignal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of type `StringSignal`.
 */
getString(name: string): Promise<StringSignal>;

/**
*  
 * getStringOrFallback(name: string, fallback: StringSignal): StringSignal
 *  
 * 
 * Returns a `StringSignal` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of type `StringSignal'.
 */
getStringOrFallback(name: string, fallback: StringSignal | string): StringSignal;

/**
*  
 * getVec4(name: string): Promise<Vec4Signal>
 *  
 * 
 * Returns a promise that is resolved with a `Vec4Signal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of Color or Vec4 type.
 */
getVec4(name: string): Promise<Vec4Signal>;

/**
*  
 * getVec4OrFallback(name: string, fallback: Vec4Signal): Vec4Signal
 *  
 * 
 * Returns a `Vec4Signal` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of Color or Vec4 type.
 */
getVec4OrFallback(name: string, fallback: Vec4Signal): Vec4Signal;

/**
*  
 * getVector(name: string): Promise<VectorSignal>
 *  
 * 
 * Returns a promise that is resolved with a `VectorSignal` from the Block output with the given `name`. Fails the promise if no
 * output with that `name` is present in the Block or if the output with that `name` is not of type `VectorSignal`.
 */
getVector(name: string): Promise<VectorSignal>;

/**
*  
 * getVectorOrFallback(name: string, fallback: VectorSignal): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` from the Block output with the given `name`.
 * Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the
 * output with that `name` is not of type `VectorSignal'.
 */
getVectorOrFallback(name: string, fallback: VectorSignal): VectorSignal;

}
