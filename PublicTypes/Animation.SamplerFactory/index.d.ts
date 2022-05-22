/// <reference path="../Animation.ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../Animation.ColorSampler/index.d.ts" />
/// <reference path="../Animation.RotationSampler/index.d.ts" />
/// <reference path="../Animation.ScalarSampler/index.d.ts" />
declare interface SamplerFactory {
/**
*  
 * HSVA(channelSamplers: Array<ScalarSampler> | ArrayOfScalarSamplers): ColorSampler
 *  
 * 
 * Returns a sampler that specifies a color by interpreting the provided samplers as HSVA channels, respectively.
 */
HSVA(channelSamplers: Array<ScalarSampler> | ArrayOfScalarSamplers): ColorSampler;

/**
*  
 * RGBA(channelSamplers: Array<ScalarSampler> | ArrayOfScalarSamplers): ColorSampler
 *  
 * 
 * Returns a sampler that specifies a color by interpreting the provided samplers as RGBA channels, respectively.
 */
RGBA(channelSamplers: Array<ScalarSampler> | ArrayOfScalarSamplers): ColorSampler;

/**
*  
 * bezier(p0: number | Array<number>, p1: number | Array<number>, p2: number | Array<number>, p3: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler object that generates values of a cubic Bezier curve with the specified control points.
 * The control points are assumed to be equidistant along the parameter axis.
 */
bezier(p0: Array<number> | number, p1: Array<number> | number, p2: Array<number> | number, p3: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * constant(value: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler that returns the same value at all points in the animation.
 */
constant(value: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInBack(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInBounce(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInCirc(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInCubic(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInElastic(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInExpo(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutBack(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutBounce(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutCirc(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutCubic(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutElastic(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutExpo(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutQuad(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutQuart(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutQuint(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInOutSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInOutSine(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInQuad(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInQuart(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInQuint(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeInSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeInSine(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutBack(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutBounce(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutCirc(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutCubic(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutElastic(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutExpo(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutQuad(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutQuart(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutQuint(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * easeOutSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
 */
easeOutSine(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * frame(numberOfFrames: number | Array<number>, startFrame?: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler object that cyclically generates integer frame numbers in the range [0..`numberOfFrames`-1] as the attached driver's progress goes from 0.0 to 1.0.
 * If the `startFrame` is supplied, then the output values are shifted by that value.
 */
frame(numberOfFrames: Array<number> | number, startFrame?: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * linear(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 */
linear(begin: Array<number> | number, end: Array<number> | number): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * polybezier(config: {keyframes?: Array<number> | Array<Array<number>>, knots?: Array<number>, tangents?: Array<number> | Array<Array<number>>}): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Returns a sampler object that generates values of a piecewise cubic Bezier spline that goes through specified `keyframes` as the attached driver's progress goes from 0.0 to 1.0 through normalized `knots` points.
 * When `tangents` is specified, the curve is C1-smooth, otherwise the curve is C2-smooth and the second derivatives at the begin and end points are zero.
 * The dimensions of `config.keyframes` and `config.knots`, if specified, and `config.tangents`, if specified, arrays must be equal and have no less than 2 elements.
 * The first element of `config.knots`, if specified, must always be zero.
 * If `config.knots` is not specified then the knot sequence is defaulted to [0, 1, 2, ..., `config.keyframes.length` - 1].
 */
polybezier(config: {keyframes?: Array<number> | Array<Array<number>>, knots?: Array<number>, tangents?: Array<number> | Array<Array<number>>}): ScalarSampler | ArrayOfScalarSamplers;

/**
*  
 * polyline(config: {keyframes?: Array<number> | Array<Array<number>> | Array<Rotation>, knots?: Array<number>}): ScalarSampler | ArrayOfScalarSamplers | RotationSampler
 *  
 * 
 * Returns a sampler object that generates values that goes piecewise linearly through specified `keyframes` as the attached driver's progress goes from 0.0 to 1.0 through normalized `knots` points.
 * The dimensions of the `config.keyframes` and `config.knots` arrays, if specified, must be equal and be not less than 2.
 * The first element of `config.knots`, if specified, must be zero.
 * If `config.knots` is not specified then the knot sequence defaults to [0, 1, 2, ..., `config.keyframes.length` - 1].
 */
polyline(config: {keyframes?: Array<number> | Array<Array<number>> | Array<Rotation>, knots?: Array<number>}): ScalarSampler | ArrayOfScalarSamplers | RotationSampler;

/**
*  
 * sequence(config: {knots?: Array<number>, samplers?: ArrayOfScalarSamplers | Array<ArrayOfScalarSamplers>}): ScalarSampler | ArrayOfScalarSamplers
 *  
 * 
 * Returns an animation sequence built from provided segments with respect to the optionally provided knots.
 * `config.samplers` must contain at least 2 elements.
 * `config.knots`, if specified, must contain exactly `config.samplers.length`+1 elements.
 * The first element of `config.knots`, when specified, must always be zero.
 * If `config.knots` is not specified then the knot sequence defaults to [0, 1, 2, ..., `config.samplers.length`].
 */
sequence(config: {knots?: Array<number>, samplers?: ArrayOfScalarSamplers | Array<ArrayOfScalarSamplers>}): ScalarSampler | ArrayOfScalarSamplers;

}
