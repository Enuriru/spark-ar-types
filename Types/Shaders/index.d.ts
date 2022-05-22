/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.Vec2Signal/index.d.ts" />
/// <reference path="../Reactive.Vec4Signal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Shaders.ColorSpace/index.d.ts" />

/**
The `ShadersModule` exposes APIs to create Visual Shaders using JavaScript.
The following is an explanation of the unique types and concepts specific to the ShadersModule.

`PrimitiveOrShaderSignal` is a union type of `Vec2Signal`, `PointSignal`, `Vec4Signal`, `VectorSignal`, `TransformSignal`, or `ShaderSignal`.
`ShaderSignal` is a graphics shader output that produces one of the types defined in the above union. As `ShaderSignal` is GPU bound, it can only be used in a GPU context.

`ShaderSignal` can also be of a function type, used for function mapping from one type to another.
For example, a shader with the signature `function(Vec2Signal): Vec4Signal` is a type of a function that maps a `Vec2Signal` to a `Vec4Signal`.
*/
declare interface Shaders extends Module {

/**
```
blend(src: ShaderSignal | PointSignal | Vec4Signal, dst: ShaderSignal | PointSignal | Vec4Signal, config: {mode: BlendMode}): ShaderSignal
```

Blends two colors using the specified blending mode.
When a color is passed as a `PointSignal`, its alpha value is considered to be 1.
If both colors are passed as a `PointSignal` (without the alpha channel specified), the result will also be a `PointSignal`.
`src`: either a `PointSignal`, a `Vec4Signal` or a Shader which outputs one of these two types.
`dst`: either a `PointSignal`, a `Vec4Signal` or a Shader which outputs one of these two types.
returns: a shader which outputs a `Vec4Signal` if either of (or both) `src` or `dst` are of type `Vec4Signal`, or a `PointSignal` if not.
*/
blend(src: ShaderSignal | PointSignal | Vec4Signal, dst: ShaderSignal | PointSignal | Vec4Signal, config: {mode: BlendMode}): ShaderSignal

/**
```
colorSpaceConvert(color: ShaderSignal | PointSignal | Vec4Signal, config: {inColorSpace: ColorSpace, outColorSpace: ColorSpace}): ShaderSignal
```

Converts a color from the input color space to the output color space.
`color`: either a `PointSignal`, a `Vec4Signal` or a shader which outputs one of these two types.
returns: a shader which outputs a `Vec4Signal` if `color` is of `Vec4Signal` type, or a `PointSignal` if not.
*/
colorSpaceConvert(color: ShaderSignal | PointSignal | Vec4Signal, config: {inColorSpace: ColorSpace, outColorSpace: ColorSpace}): ShaderSignal

/**
```
composition(f: ShaderSignal, g: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal | TransformSignal): ShaderSignal
```

Returns a signal for the shader composition of the two given functions (a texture and a transform for example).
`f`: a shader which takes in a value of one type and outputs a different type. For example, `function_f(A): B`
`g`: a shader which takes in a value of one type and outputs a different type (for example, `function_g(I): A`), or a signal of `A`.
returns: a shader of `function_f(function_g(I)) => A`, if `g` was a shader, or `function_f(signal of A) => B`, if otherwise.
*/
composition(f: ShaderSignal, g: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal | TransformSignal): ShaderSignal

/**
```
derivative(v: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal, config: {derivativeType: DerivativeType}): ShaderSignal
```

Returns a signal for the specified shader derivative of the given signal.
`v`: either a `ScalarSignal`, a `Vec2Signal`, a `PointSignal`, a `Vec4Signal`, a `VectorSignal`, or a shader which outputs one of these types.
returns: a shader of a derivate type specified by `config`.
*/
derivative(v: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal, config: {derivativeType: DerivativeType}): ShaderSignal

/**
```
fallback(main: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal | TransformSignal, fallback: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal | TransformSignal): ShaderSignal
```

Forwards the `main` input if present, otherwise uses `fallback`.
`main`: a signal or shader which outputs a value of signal type.
`fallback`: a signal or shader which outputs a value of signal type.
returns: `main` if its output is present, or `fallback` if not.
*/
fallback(main: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal | TransformSignal, fallback: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal | TransformSignal): ShaderSignal

/**
```
fragmentStage(v: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal | TransformSignal): ShaderSignal
```

Forces the computation of `val` to happen at the fragment stage.
`v`: a signal or shader which outputs a value of signal type.
*/
fragmentStage(v: ShaderSignal | number | ScalarSignal | Vec2Signal | PointSignal | Vec4Signal | VectorSignal | TransformSignal): ShaderSignal

/**
```
functionScalar(): ShaderSignal
```

Returns a signal for the identity function over the specified type.
returns: shader `function(ScalarSignal): ScalarSignal`
*/
functionScalar(): ShaderSignal

/**
```
functionVec2(): ShaderSignal
```

Returns a signal for the identity function over the specified type.
returns: shader `function(Vec2Signal): Vec2Signal`
*/
functionVec2(): ShaderSignal

/**
```
functionVec3(): ShaderSignal
```

Returns a signal for the identity function over the specified type.
returns: shader `function(PointSignal): PointSignal`
*/
functionVec3(): ShaderSignal

/**
```
functionVec4(): ShaderSignal
```

Returns a signal for the identity function over the specified type.
returns: shader `function(Vec4Signal): Vec4Signal`
*/
functionVec4(): ShaderSignal

/**
```
gradient(config: {type: GradientType}): ShaderSignal
```

Returns a signal for the specified gradient.
returns: shader `function(Vec2Signal): ScalarSignal` representing a gradient defined by `config`
*/
gradient(config: {type: GradientType}): ShaderSignal

/**
```
renderTargetSize(): Vec2Signal
```

Returns a signal of the current render target's size.
returns: shader `function(): Vec2Signal`
*/
renderTargetSize(): Vec2Signal

/**
```
sdfAnnular(sdf: ShaderSignal, width: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the given SDF shape made annular (ring-like) by the specified width.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`width`: number, ScalarSignal or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfAnnular(sdf: ShaderSignal, width: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfCircle(center: ShaderSignal | Vec2Signal, radius: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal for a circle SDF shape.
`center`: `Vec2Signal` or shader `function(): Vec2Signal`
`radius`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfCircle(center: ShaderSignal | Vec2Signal, radius: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfComplement(sdf: ShaderSignal): ShaderSignal
```

Returns a signal of the complement of the given SDF shape.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfComplement(sdf: ShaderSignal): ShaderSignal

/**
```
sdfDifference(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal
```

Returns a signal of the difference of the two given SDF shapes.
`sdf1`: shader `function(Vec2Signal): ScalarSignal`
`sdf2`: shader `function(Vec2Signal): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal` which result is the product of substracting result of `sdf2` from result of `sdf1`
*/
sdfDifference(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal

/**
```
sdfEllipse(center: ShaderSignal | Vec2Signal, halfSize: ShaderSignal | Vec2Signal): ShaderSignal
```

Returns a signal for an ellipse SDF shape.
`center`: `Vec2Signal` or shader `function(): Vec2Signal`
`halfSize`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfEllipse(center: ShaderSignal | Vec2Signal, halfSize: ShaderSignal | Vec2Signal): ShaderSignal

/**
```
sdfFlip(sdf: ShaderSignal, offset: ShaderSignal | Vec2Signal, normal: ShaderSignal | Vec2Signal): ShaderSignal
```

Returns a signal of the given SDF shape flipped around the plane given by the offset an normal.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`offset`: `Vec2Signal` or shader `function(): Vec2Signal`
`normal`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfFlip(sdf: ShaderSignal, offset: ShaderSignal | Vec2Signal, normal: ShaderSignal | Vec2Signal): ShaderSignal

/**
```
sdfHalfPlane(offset: ShaderSignal | Vec2Signal, normal: ShaderSignal | Vec2Signal): ShaderSignal
```

Returns a signal for a half-plane SDF shape.
`offset`: `Vec2Signal` or shader `function(): Vec2Signal`
`normal`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfHalfPlane(offset: ShaderSignal | Vec2Signal, normal: ShaderSignal | Vec2Signal): ShaderSignal

/**
```
sdfIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal
```

Returns a signal of the intersection of the two given SDF shapes.
`sdf1`: shader `function(Vec2Signal): ScalarSignal`
`sdf2`: shader `function(Vec2Signal): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal

/**
```
sdfLine(offset: ShaderSignal | Vec2Signal, normal: ShaderSignal | Vec2Signal, halfWidth: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal for a line SDF shape.
`offset`: `Vec2Signal` or shader `function(): Vec2Signal`
`normal`: `Vec2Signal` or shader `function(): Vec2Signal`
`halfWidth`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfLine(offset: ShaderSignal | Vec2Signal, normal: ShaderSignal | Vec2Signal, halfWidth: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfMix(sdf1: ShaderSignal, sdf2: ShaderSignal, alpha: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the linear interpolation of the two given SDF shapes, modulated by alpha.
`sdf1`: shader `function(Vec2Signal): ScalarSignal`
`sdf2`: shader `function(Vec2Signal): ScalarSignal`
`alpha`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfMix(sdf1: ShaderSignal, sdf2: ShaderSignal, alpha: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfPolygon(center: ShaderSignal | Vec2Signal, radius: ShaderSignal | number | ScalarSignal, numSides: ShaderSignal | number | ScalarSignal, config: {sdfVariant: SdfVariant}): ShaderSignal
```

Returns a signal for a polygon SDF shape.
`center`: `Vec2Signal` or shader `function(): Vec2Signal`
`radius`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
`numSides`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfPolygon(center: ShaderSignal | Vec2Signal, radius: ShaderSignal | number | ScalarSignal, numSides: ShaderSignal | number | ScalarSignal, config: {sdfVariant: SdfVariant}): ShaderSignal

/**
```
sdfRectangle(center: ShaderSignal | Vec2Signal, halfSize: ShaderSignal | Vec2Signal, config: {sdfVariant: SdfVariant}): ShaderSignal
```

Returns a signal for a rectangle SDF shape.
`center`: `Vec2Signal` or shader `function(): Vec2Signal`
`halfSize`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfRectangle(center: ShaderSignal | Vec2Signal, halfSize: ShaderSignal | Vec2Signal, config: {sdfVariant: SdfVariant}): ShaderSignal

/**
```
sdfRepeat(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, size: ShaderSignal | Vec2Signal): ShaderSignal
```

Returns a signal of the given SDF shape's grid repetition.
The shape should be centered on the pivot and fit within the given size.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`pivot`: `Vec2Signal` or shader `function(): Vec2Signal`
`size`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfRepeat(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, size: ShaderSignal | Vec2Signal): ShaderSignal

/**
```
sdfRotation(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, angle: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the given SDF shape rotated around the given pivot by the given angle.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`pivot`: `Vec2Signal` or shader `function(): Vec2Signal`
`angle`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfRotation(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, angle: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfRotationalRepeat(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, radius: ShaderSignal | number | ScalarSignal, numTimes: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the given SDF shape's rotational repetition numTimes at the given radius.
The shape should be centered on the pivot and fit within the angular sector defined by numTimes at the given radius.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`pivot`: `Vec2Signal` or shader `function(): Vec2Signal`
`radius`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
`numTimes`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfRotationalRepeat(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, radius: ShaderSignal | number | ScalarSignal, numTimes: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfRound(sdf: ShaderSignal, radius: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the given SDF shape rounded by the specified radius.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`radius`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfRound(sdf: ShaderSignal, radius: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfScale(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, size: ShaderSignal | Vec2Signal): ShaderSignal
```

Returns a signal of the given SDF shape scaled around the given pivot by the given size.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`pivot`: `Vec2Signal` or shader `function(): Vec2Signal`
`size`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfScale(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, size: ShaderSignal | Vec2Signal): ShaderSignal

/**
```
sdfShear(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, shear: ShaderSignal | Vec2Signal): ShaderSignal
```

Returns a signal of the given SDF shape scaled around the given pivot by the given shear amount.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`pivot`: `Vec2Signal` or shader `function(): Vec2Signal`
`shear`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfShear(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, shear: ShaderSignal | Vec2Signal): ShaderSignal

/**
```
sdfSmoothDifference(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the smooth difference of the two given SDF shapes, modulated by K.
`sdf1`: shader `function(Vec2Signal): ScalarSignal`
`sdf2`: shader `function(Vec2Signal): ScalarSignal`
`k`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfSmoothDifference(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfSmoothIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the smooth intersection of the two given SDF shapes, modulated by K.
`sdf1`: shader `function(Vec2Signal): ScalarSignal`
`sdf2`: shader `function(Vec2Signal): ScalarSignal`
`k`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfSmoothIntersection(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfSmoothUnion(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the smooth union of the two given SDF shapes, modulated by K.
`sdf1`: shader `function(Vec2Signal): ScalarSignal`
`sdf2`: shader `function(Vec2Signal): ScalarSignal`
`k`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfSmoothUnion(sdf1: ShaderSignal, sdf2: ShaderSignal, k: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfStar(center: ShaderSignal | Vec2Signal, radius1: ShaderSignal | number | ScalarSignal, radius2: ShaderSignal | number | ScalarSignal, numSides: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal for a star SDF shape.
`center`: `Vec2Signal` or shader `function(): Vec2Signal`
`radius1`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
`radius2`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
`numSides`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
*/
sdfStar(center: ShaderSignal | Vec2Signal, radius1: ShaderSignal | number | ScalarSignal, radius2: ShaderSignal | number | ScalarSignal, numSides: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfTranslation(sdf: ShaderSignal, offset: ShaderSignal | Vec2Signal): ShaderSignal
```

Returns a signal of the given SDF shape translated by the given offset.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`offset`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfTranslation(sdf: ShaderSignal, offset: ShaderSignal | Vec2Signal): ShaderSignal

/**
```
sdfTwist(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, twist: ShaderSignal | number | ScalarSignal): ShaderSignal
```

Returns a signal of the given SDF shape twisted around the pivot by the given amount.
`sdf`: shader `function(Vec2Signal): ScalarSignal`
`pivot`: `Vec2Signal` or shader `function(): Vec2Signal`
`twist`: `number`, `ScalarSignal` or shader `function(): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfTwist(sdf: ShaderSignal, pivot: ShaderSignal | Vec2Signal, twist: ShaderSignal | number | ScalarSignal): ShaderSignal

/**
```
sdfUnion(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal
```

Returns a signal of the union of the two given SDF shapes.
`sdf1`: shader `function(Vec2Signal): ScalarSignal`
`sdf2`: shader `function(Vec2Signal): ScalarSignal`
returns: shader `function(Vec2Signal): ScalarSignal`
*/
sdfUnion(sdf1: ShaderSignal, sdf2: ShaderSignal): ShaderSignal

/**
```
textureSampler(texture: ShaderSignal, uv: ShaderSignal | Vec2Signal): ShaderSignal
```

Samples the given texture at the specified uv coordinates.
`texture`: shader `function(Vec2Signal): ScalarSignal`, `function(Vec2Signal): Vec2Signal`, `function(Vec2Signal): PointSignal` or `function(Vec2Signal): Vec4Signal`
`uv`: `Vec2Signal` or shader `function(): Vec2Signal`
returns: shader `function(): ScalarSignal`, `function(): Vec2Signal`, `function(): PointSignal` or `function(): Vec4Signal` depending on underlying `texture` shader return type
*/
textureSampler(texture: ShaderSignal, uv: ShaderSignal | Vec2Signal): ShaderSignal

/**
```
textureTransform(texture: ShaderSignal, transform: ShaderSignal): ShaderSignal
```

Transforms the given texture with the specified Mat3 transform.
`texture`: shader `function(Vec2Signal): ScalarSignal`, `function(Vec2Signal): Vec2Signal`, `function(Vec2Signal): PointSignal` or `function(Vec2Signal): Vec4Signal`
`transform`: shader `function(): Matrix3Signal`
returns: shader `function(Vec2Signal): ScalarSignal`, `function(Vec2Signal): Vec2Signal`, `function(Vec2Signal): PointSignal` or `function(Vec2Signal): Vec4Signal` depending on underlying `texture` shader return type
*/
textureTransform(texture: ShaderSignal, transform: ShaderSignal): ShaderSignal

/**
```
vertexAttribute(config: {variableName: VertexAttribute}): ShaderSignal
```

Returns a signal for the specified vertex attribute depending on the VertexAttribute used.
returns:
for `VertexAttribute.POSITION` a shader `function(): Vec4Signal`
for `VertexAttribute.NORMAL` a shader `function(): PointSignal`
for `VertexAttribute.TANGENT` a shader `function(): Vec4Signal`
for `VertexAttribute.TEX_COORDS` a shader `function(): Vec2Signal`
for `VertexAttribute.COLOR` a shader `function(): Vec4Signal`
for `VertexAttribute.BASE_POSITION` a shader `function(): Vec4Signal`
*/
vertexAttribute(config: {variableName: VertexAttribute}): ShaderSignal

/**
```
vertexTransform(config: {variableName: BuiltinUniform}): ShaderSignal
```

Returns a signal for the specified vertex transform depending on the BuiltinUniform used.
returns:
for `BuiltinUniform.MVP_MATRIX` a shader `function(): TransformSignal`
for `BuiltinUniform.MV_MATRIX` a shader `function(): TransformSignal`
for `BuiltinUniform.M_MATRIX` a shader `function(): TransformSignal`
for `BuiltinUniform.V_MATRIX` a shader `function(): TransformSignal`
for `BuiltinUniform.P_MATRIX` a shader `function(): TransformSignal`
for `BuiltinUniform.VP_MATRIX` a shader `function(): TransformSignal`
for `BuiltinUniform.NORMAL_MATRIX` a shader `function(): Matrix3Signal`
for `BuiltinUniform.INV_M_MATRIX` a shader `function(): TransformSignal`
for `BuiltinUniform.INV_V_MATRIX` a shader `function(): TransformSignal`
for `BuiltinUniform.INV_P_MATRIX` a shader `function(): TransformSignal`
*/
vertexTransform(config: {variableName: BuiltinUniform}): ShaderSignal

}



/**

//==============================================================================
// The following example demonstrates how to use visual shaders to tile SDF
// shapes. This is a script version of the following Patch Editor example:
// https://fb.me/tiled-sdf-patch
//
// Project setup:
// - Insert a rectangle and set it to 'Fill Parent'
// - Create a new material and assign it to the rectangle
//==============================================================================

// Load in the required modules
const Materials = require('Materials');
const Reactive = require('Reactive');
const Shaders = require('Shaders');

// Enable async/await in JS [part 1]
(async function() {
  // Locate the material in the Assets
  const [material] = await Promise.all([
    Materials.findFirst('defaultMaterial0')
  ]);

  // Create the SDF Star parameters
  const center = Reactive.pack2(0.05,0.05);
  const radius = 0.04;
  const radius2 = Reactive.mul(radius,0.5);
  const sides = 5;

  // Create the SDF Star
  const sdfStar = Shaders.sdfStar(center,radius,radius2,sides);

  // Create the SDF Mix
  const sdfMix = Shaders.sdfMix(sdfStar,0,0.993);

  // Create the SDF Repeat parameters
  const pivot = Reactive.pack2(0.05,0.05);
  const size = Reactive.pack2(0.09,0.09);

  // Create the SDF Repeat
  const sdfRepeat = Shaders.sdfRepeat(sdfMix,pivot,size);

  // Create the step
  const step = Reactive.step(sdfRepeat,0);

  // Create the gradient
  const gradient = Shaders.gradient({"type" : Shaders.GradientType.HORIZONTAL});

  // Create the first mix paramaters
  const color1 = Reactive.pack4(1,0.57,0,1);
  const color2 = Reactive.pack4(1,0.25,1,1);

  // Create the first mix
  const mix1 = Reactive.mix(color1,color2,gradient);

  // Create the color for the second mix
  const color3 = Reactive.pack4(0,0,0,0);

  // Create the second mix
  const mix2 = Reactive.mix(mix1,color3,step);

  // Define the texture slot of the material to update
  const textureSlot = Shaders.DefaultMaterialTextures.DIFFUSE;

  // Assign the shader signal to the texture slot
  material.setTexture(mix2, {textureSlotName: textureSlot});

// Enable async/await in JS [part 2]

*/