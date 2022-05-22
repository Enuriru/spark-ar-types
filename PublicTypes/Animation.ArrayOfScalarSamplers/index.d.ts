/// <reference path="../Animation.ScalarSampler/index.d.ts" />
declare interface ArrayOfScalarSamplers extends Array<ScalarSampler> {
/**
*  
 * get(index: number): ScalarSampler
 *  
 * 
 * Returns the sampler indicated by the `index` parameter.
 */
get(index: number): ScalarSampler;

}
