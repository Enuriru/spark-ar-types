/// <reference path="../Reactive.ISignal/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Scene.Transform/index.d.ts" />
/// <reference path="../Scene.WorldTransform/index.d.ts" />
declare interface ComposedMaterial extends MaterialBase {
/**
*  
 * setParameter(parameterName: string, signal: ISignal | Transform | WorldTransform): void
 *  
 * 
 * Assigns a signal to the specified patch asset parameter.
 */
setParameter(parameterName: string, signal: ISignal | Transform | WorldTransform): void;

}
