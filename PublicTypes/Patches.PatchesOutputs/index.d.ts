/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
declare interface PatchesOutputs {
/**
*  
 * get(name: string): Promise<ISignal>
 *  
 * 
 * Returns a promise, that is resolved to a signal of the correct type, existing in the
 * patch editor under the specified 'name'.
 */
get(name: string): Promise<ISignal>;

/**
*  
 * getBoolean(name: string): Promise<BoolSignal>
 *  
 * 
 * Returns a promise that is resolved with a `BoolSignal` existing in the Patch Editor under specified `name`.
 */
getBoolean(name: string): Promise<BoolSignal>;

/**
*  
 * getBooleanOrFallback(name: string, fallback: BoolSignal | boolean): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */
getBooleanOrFallback(name: string, fallback: BoolSignal | boolean): BoolSignal;

/**
*  
 * getColor(name: string): Promise<RgbaSignal>
 *  
 * 
 * Returns a promise that is resolved with a `RgbaSignal` existing in the Patch Editor under specified `name`.
 */
getColor(name: string): Promise<RgbaSignal>;

/**
*  
 * getColorOrFallback(name: string, fallback: RgbaSignal): RgbaSignal
 *  
 * 
 * Returns a `RgbaSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */
getColorOrFallback(name: string, fallback: RgbaSignal): RgbaSignal;

/**
*  
 * getOrFallback(name: string, fallback: ISignal | boolean | number | string): ISignal
 *  
 * 
 * Returns an ISignal existing in the Patch Editor under the specified `name` or the value `fallback` on error.
 * The type of the ISignal with name 'name' must match the type of the fallback, otherwise a type
 * error will be thrown.
 */
getOrFallback(name: string, fallback: ISignal | boolean | number | string): ISignal;

/**
*  
 * getPoint(name: string): Promise<PointSignal>
 *  
 * 
 * Returns a promise that is resolved with a `PointSignal` existing in the Patch Editor under specified `name`.
 */
getPoint(name: string): Promise<PointSignal>;

/**
*  
 * getPoint2D(name: string): Promise<Vec2Signal>
 *  
 * 
 * Returns a promise that is resolved with a `Vec2Signal` existing in the Patch Editor under specified `name`.
 */
getPoint2D(name: string): Promise<Vec2Signal>;

/**
*  
 * getPoint2DOrFallback(name: string, fallback: Vec2Signal): Vec2Signal
 *  
 * 
 * Returns a `Vec2Signal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */
getPoint2DOrFallback(name: string, fallback: Vec2Signal): Vec2Signal;

/**
*  
 * getPointOrFallback(name: string, fallback: PointSignal): PointSignal
 *  
 * 
 * Returns a `PointSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */
getPointOrFallback(name: string, fallback: PointSignal): PointSignal;

/**
*  
 * getPulse(name: string): Promise<EventSource<any>>
 *  
 * 
 * Returns a promise that is resolved with a `EventSource<any>` existing in the Patch Editor under specified `name`.
 */
getPulse(name: string): Promise<EventSource<any>>;

/**
*  
 * getPulseOrFallback(name: string, fallback: EventSource<any>): EventSource<any>
 *  
 * 
 * Returns a `EventSource<any>` existing in the Patch Editor under specified `name` or `fallback` on error.
 */
getPulseOrFallback(name: string, fallback: EventSource<any>): EventSource<any>;

/**
*  
 * getScalar(name: string): Promise<ScalarSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ScalarSignal` existing in the Patch Editor under specified `name`.
 */
getScalar(name: string): Promise<ScalarSignal>;

/**
*  
 * getScalarOrFallback(name: string, fallback: ScalarSignal | number): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */
getScalarOrFallback(name: string, fallback: ScalarSignal | number): ScalarSignal;

/**
*  
 * getString(name: string): Promise<StringSignal>
 *  
 * 
 * Returns a promise that is resolved with a `StringSignal` existing in the Patch Editor under specified `name`.
 */
getString(name: string): Promise<StringSignal>;

/**
*  
 * getStringOrFallback(name: string, fallback: StringSignal | string): StringSignal
 *  
 * 
 * Returns a `StringSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */
getStringOrFallback(name: string, fallback: StringSignal | string): StringSignal;

/**
*  
 * getVector(name: string): Promise<VectorSignal>
 *  
 * 
 * Returns a promise that is resolved with a `VectorSignal` existing in the Patch Editor under specified `name`.
 */
getVector(name: string): Promise<VectorSignal>;

/**
*  
 * getVectorOrFallback(name: string, fallback: VectorSignal): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */
getVectorOrFallback(name: string, fallback: VectorSignal): VectorSignal;

}
