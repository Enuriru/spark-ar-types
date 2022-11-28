/// <reference path="../Animation.ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../Animation.ColorSampler/index.d.ts" />
/// <reference path="../Animation.RotationSampler/index.d.ts" />
/// <reference path="../Animation.ScalarSampler/index.d.ts" />
/// <reference path="../Animation.SignalRecord/index.d.ts" />
/// <reference path="../Reactive.Rotation/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `SamplerFactory` class creates different types of animation samplers.
*/
declare interface SamplerFactory {

/**
```
HSVA(channelSamplers: Array<ScalarSampler> | ArrayOfScalarSamplers): ColorSampler
```

Returns a sampler that specifies a color by interpreting the provided samplers as HSVA channels, respectively.
*/
HSVA(channelSamplers: Array<ScalarSampler> | ArrayOfScalarSamplers): ColorSampler

/**
```
RGBA(channelSamplers: Array<ScalarSampler> | ArrayOfScalarSamplers): ColorSampler
```

Returns a sampler that specifies a color by interpreting the provided samplers as RGBA channels, respectively.
*/
RGBA(channelSamplers: Array<ScalarSampler> | ArrayOfScalarSamplers): ColorSampler

/**
```
bezier(p0: number | Array<number>, p1: number | Array<number>, p2: number | Array<number>, p3: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Returns a sampler object that generates values of a cubic Bezier curve with the specified control points.
The control points are assumed to be equidistant along the parameter axis.
*/
bezier(p0: number | Array<number>, p1: number | Array<number>, p2: number | Array<number>, p3: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
constant(value: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Returns a sampler that returns the same value at all points in the animation.
*/
constant(value: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInOutSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInOutSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeInSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeInSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutBack(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutBounce(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutCirc(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutCubic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutElastic(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutExpo(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutQuad(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutQuart(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutQuint(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
easeOutSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Easing sampler. Behaves similarly to the linear sampler, but with easing functions at the beginning and/or end.
*/
easeOutSine(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
frame(numberOfFrames: number | Array<number>, startFrame?: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

Returns a sampler object that cyclically generates integer frame numbers in the range [0..`numberOfFrames`-1] as the attached driver's progress goes from 0.0 to 1.0.
If the `startFrame` is supplied, then the output values are shifted by that value.
*/
frame(numberOfFrames: number | Array<number>, startFrame?: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
linear(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers
```

*/
linear(begin: number | Array<number>, end: number | Array<number>): ScalarSampler | ArrayOfScalarSamplers

/**
```
polybezier(config: {keyframes?: Array<number> | Array<Array<number>>, knots?: Array<number>, tangents?: Array<number> | Array<Array<number>>}): ScalarSampler | ArrayOfScalarSamplers
```

Returns a sampler object that generates values of a piecewise cubic Bezier spline that goes through specified `keyframes` as the attached driver's progress goes from 0.0 to 1.0 through normalized `knots` points.
When `tangents` is specified, the curve is C1-smooth, otherwise the curve is C2-smooth and the second derivatives at the begin and end points are zero.
The dimensions of `config.keyframes` and `config.knots`, if specified, and `config.tangents`, if specified, arrays must be equal and have no less than 2 elements.
The first element of `config.knots`, if specified, must always be zero.
If `config.knots` is not specified then the knot sequence is defaulted to [0, 1, 2, ..., `config.keyframes.length` - 1].
*/
polybezier(config: {keyframes?: Array<number> | Array<Array<number>>, knots?: Array<number>, tangents?: Array<number> | Array<Array<number>>}): ScalarSampler | ArrayOfScalarSamplers

/**
```
polybezierFromRecord(record: SignalRecord): ScalarSampler
```

Returns a polybezier with values recorded from a sampler as keyframes.
Elapsed time is used as the knots.
See 'polybezier' function. (This does not have tangents specified.)
*/
polybezierFromRecord(record: SignalRecord): ScalarSampler

/**
```
polyline(config: {keyframes?: Array<number> | Array<Array<number>> | Array<Rotation>, knots?: Array<number>}): ScalarSampler | ArrayOfScalarSamplers | RotationSampler
```

Returns a sampler object that generates values that goes piecewise linearly through specified `keyframes` as the attached driver's progress goes from 0.0 to 1.0 through normalized `knots` points.
The dimensions of the `config.keyframes` and `config.knots` arrays, if specified, must be equal and be not less than 2.
The first element of `config.knots`, if specified, must be zero.
If `config.knots` is not specified then the knot sequence defaults to [0, 1, 2, ..., `config.keyframes.length` - 1].
*/
polyline(config: {keyframes?: Array<number> | Array<Array<number>> | Array<Rotation>, knots?: Array<number>}): ScalarSampler | ArrayOfScalarSamplers | RotationSampler

/**
```
polylineFromRecord(record: SignalRecord): ScalarSampler
```

Returns a polyline with values recorded from a signal as keyframes.
Elapsed time is used as knots. See 'polyline' function.
*/
polylineFromRecord(record: SignalRecord): ScalarSampler

/**
```
sequence(config: {knots?: Array<number>, samplers?: ArrayOfScalarSamplers | Array<ArrayOfScalarSamplers>}): ScalarSampler | ArrayOfScalarSamplers
```

Returns an animation sequence built from provided segments with respect to the optionally provided knots.
`config.samplers` must contain at least 2 elements.
`config.knots`, if specified, must contain exactly `config.samplers.length`+1 elements.
The first element of `config.knots`, when specified, must always be zero.
If `config.knots` is not specified then the knot sequence defaults to [0, 1, 2, ..., `config.samplers.length`].
*/
sequence(config: {knots?: Array<number>, samplers?: ArrayOfScalarSamplers | Array<ArrayOfScalarSamplers>}): ScalarSampler | ArrayOfScalarSamplers

}



/**

//==============================================================================
// The following example demonstrates how to use ScalarFactory (samplers) to
// create different type of animation samplers (e.g. linear, ease)
// and use it with a Driver (TimeDriver) for creating animations.
//
// Project setup:
// - Add a Plane object sample with the name 'plane0' to the scene
//==============================================================================

// Load in the required modules
const Scene = require('Scene');
const Animation = require('Animation');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the Plane scene element
  const plane = await Scene.root.findFirst('plane0');

  // Time Driver allows you to specify a duration in milliseconds for the
  // animation along with optional parameters for looping and mirroring.
  const timeDriverParameters = {
      durationMilliseconds: 5000,
      loopCount: Infinity,
      mirror: true
  };

  // Create a TimeDriver using the above parameters
  const timeDriver = Animation.timeDriver(timeDriverParameters);

  // SamplerFactory (Animation.samplers) creates different types of animation samplers
  // In this example we create a seqeunce of multiple such samplers
  // e.g. linear, easeInOutCubic, easeOutExpo
  // These wide variety of samplers generates values that change from `begin` to `end`
  // either lineatly or with easing functions like Cubic, Bounce etc.
  const samplerArray = Animation.samplers.sequence({
    samplers: [
      Animation.samplers.linear(0, 0.2),
      Animation.samplers.easeInOutCubic(0.2, 0.6),
      Animation.samplers.easeInOutBounce(0.6, 1)
    ]
  });

  // TimeDriver and Sampler come together to create an animation
  const animation = Animation.animate(timeDriver, samplerArray);

  // The scaleX/Y/Z() methods of the TransformSignal allows us to bind the animation
  // ScalarSignal being output to the scale of the plane object.
  plane.transform.scaleX = animation;
  plane.transform.scaleY = animation;
  plane.transform.scaleZ = animation;

  // Start the TimeDriver
  timeDriver.start();

})(); // Enable async/await in JS [part 2]

*/