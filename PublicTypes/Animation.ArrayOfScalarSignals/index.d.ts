/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface ArrayOfScalarSignals extends Array<ScalarSignal> {
/**
*  
 * get(index: number): ScalarSignal
 *  
 * 
 * Returns the signal indicated by the `index` parameter.
 */
get(index: number): ScalarSignal;

}
