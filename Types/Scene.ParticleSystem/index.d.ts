/// <reference path="../Animation.ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../Animation.ColorSampler/index.d.ts" />
/// <reference path="../Animation.ScalarSampler/index.d.ts" />
/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.HsvaSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.Vec3/index.d.ts" />
/// <reference path="../Reactive.Vec4/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Scene.ParticleTypeDescription/index.d.ts" />
/// <reference path="../Scene.SceneObjectBase/index.d.ts" />

/**
The `ParticleSystem` class implements the particle management system for the scene.
*/
declare interface ParticleSystem extends SceneObjectBase {

/**
```
(get) (Not Available)
(set) acceleration: VectorSignal
```

Specifies the acceleration vector for particles of this emitter.
*/
acceleration: VectorSignal

/**
```
(get) accelerationValue: Vec3
(set) accelerationValue: Vec3
```

Specifies the acceleration vector for particles of this emitter.
*/
accelerationValue: Vec3

/**
```
(get) angularVelocity: PointSignal
(set) angularVelocity: PointSignal
```

Specifies the mean angular velocity of each particle, in radians-per-second.
*/
angularVelocity: PointSignal

/**
```
(get) angularVelocityDelta: PointSignal
(set) angularVelocityDelta: PointSignal
```

Specifies the absolute delta value for the `angularVelocity` property. The angular velocity is randomized uniformly in the range `[angularVelocity - angularVelocityDelta; angularVelocity + angularVelocityDelta]` for each particle.
*/
angularVelocityDelta: PointSignal

/**
```
(get) angularVelocityDeltaValue: Vec3
(set) angularVelocityDeltaValue: Vec3
```

Specifies the absolute delta value for the `angularVelocity` property. The angular velocity is randomized uniformly in the range `[angularVelocity - angularVelocityDelta; angularVelocity + angularVelocityDelta]` for each particle.
*/
angularVelocityDeltaValue: Vec3

/**
```
(get) angularVelocityValue: Vec3
(set) angularVelocityValue: Vec3
```

Specifies the mean angular velocity of each particle, in radians-per-second.
*/
angularVelocityValue: Vec3

/**
```
(get) birthrate: ScalarSignal
(set) birthrate: ScalarSignal
```

Specifies the particle birthrate, in number of particles per second.
*/
birthrate: ScalarSignal

/**
```
(get) birthrateDelta: ScalarSignal
(set) birthrateDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `birthrate` property.
Whenever a particle is spawned, an "instantaneous birthrate" is chosen uniformly in the range `[birthrate * (1 - d); birthrate * (1 + d)]` and the next particle will be spawned in (1/instantaneous birthrate) seconds.
**Note**: The behavior is undefined for values outside the valid range.
*/
birthrateDelta: ScalarSignal

/**
```
(get) birthrateDeltaValue: number
(set) birthrateDeltaValue: number
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `birthrate` property.
Whenever a particle is spawned, an "instantaneous birthrate" is chosen uniformly in the range `[birthrate * (1 - d); birthrate * (1 + d)]` and the next particle will be spawned in (1/instantaneous birthrate) seconds.
**Note**: The behavior is undefined for values outside the valid range.
*/
birthrateDeltaValue: number

/**
```
(get) birthrateValue: number
(set) birthrateValue: number
```

Specifies the particle birthrate, in number of particles per second.
*/
birthrateValue: number

/**
```
(get) colorModulationHSVA: HsvaSignal
(set) colorModulationHSVA: HsvaSignal
```

Specifies the mean color for modulating the particle material.
**Note**: `colorModulationHSVA` can only be an instance of `HsvaSignal`, it cannot be specified in other color space like RGBA.

**Note**: the modulation itself happens in RGBA space. Each of the RGBA components specified by the modulation is multiplied to the corresponding component specified by the particle material.
*/
colorModulationHSVA: HsvaSignal

/**
```
(get) (Not Available)
(set) colorModulationHSVADelta: HsvaSignal
```

Specifies the absolute delta value for the `colorModulationHSVA` property. The modulation color will be randomized uniformly in the axis-aligned bounding box in the HSVA space with corners `colorModulationHSVA - d` and `colorModulationHSVA + d` for each particle.
**Note**: `colorModulationHSVA` can only be an instance of `HsvaSignal`, it cannot be specified in other color space like RGBA.

**Note**: if the hue component of the randomized modulation color is outside of the [0, 1] interval, it is taken modulo 1.0. If any of the saturation, value or alpha components is outside of the [0, 1] interval, its value is clamped.

**Note**: the modulation itself happens in RGBA space. Each of the RGBA components specified by the modulation is multiplied to the corresponding component specified by the particle material.
*/
colorModulationHSVADelta: HsvaSignal

/**
```
(get) colorModulationHSVADeltaValue: Vec4
(set) colorModulationHSVADeltaValue: Vec4
```

Specifies the absolute delta value for the `colorModulationHSVA` property. The modulation color will be randomized uniformly in the axis-aligned bounding box in the HSVA space with corners `colorModulationHSVA - d` and `colorModulationHSVA + d` for each particle.
**Note**: `colorModulationHSVA` can only be a HSVA color, it cannot be specified in other color space like RGBA.

**Note**: if the hue component of the randomized modulation color is outside of the [0, 1] interval, it is taken modulo 1.0. If any of the saturation, value or alpha components is outside of the [0, 1] interval, its value is clamped.

**Note**: the modulation itself happens in RGBA space. Each of the RGBA components specified by the modulation is multiplied to the corresponding component specified by the particle material.
*/
colorModulationHSVADeltaValue: Vec4

/**
```
(get) colorModulationHSVAValue: Vec4
(set) colorModulationHSVAValue: Vec4
```

Specifies the mean color for modulating the particle material.
**Note**: `colorModulationHSVAValue` can only be an instance of `Vec4` in HSVA color space, it cannot be specified in other color space like RGBA.

**Note**: the modulation itself happens in RGBA space. Each of the RGBA components specified by the modulation is multiplied to the corresponding component specified by the particle material.
*/
colorModulationHSVAValue: Vec4

/**
```
(get) (Not Available)
(set) hsvaColorModulationModifier: ColorSampler
```

Specifies the modifier that will be added to the particle color according to the supplied sampler relative to the current relative lifetime of the particle. In other words, if the lifetime is 4 seconds and the particle has lived for is 3 seconds, the modifier will be sampled at 3/4 = 0.75.
**Note**: the modifier works in the HSVA color space, i.e. using values interpolated in RGBA won't add the corresponding R, G or B values to the current color but rather the converted HSV color will be added.
*/
hsvaColorModulationModifier: ColorSampler

/**
```
(get) initialVelocityMagnitude: ScalarSignal
(set) initialVelocityMagnitude: ScalarSignal
```

Specifies the mean initial velocity magnitude of each particle.
*/
initialVelocityMagnitude: ScalarSignal

/**
```
(get) initialVelocityMagnitudePercentageDelta: ScalarSignal
(set) initialVelocityMagnitudePercentageDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `initialVelocityMagnitude` property. The initial velocity magnitude is randomized uniformly in the range `[initialVelocityMagnitude * (1 - d); initialVelocityMagnitude * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
initialVelocityMagnitudePercentageDelta: ScalarSignal

/**
```
(get) initialVelocityMagnitudePercentageDeltaValue: number
(set) initialVelocityMagnitudePercentageDeltaValue: number
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `initialVelocityMagnitude` property. The initial velocity magnitude is randomized uniformly in the range `[initialVelocityMagnitude * (1 - d); initialVelocityMagnitude * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
initialVelocityMagnitudePercentageDeltaValue: number

/**
```
(get) initialVelocityMagnitudeValue: number
(set) initialVelocityMagnitudeValue: number
```

Specifies the mean initial velocity magnitude of each particle.
*/
initialVelocityMagnitudeValue: number

/**
```
(get) innerRadius: ScalarSignal
(set) innerRadius: ScalarSignal
```

Specifies the radius of the inner circle when using the ring emitter for the particle system. The particles spawn between `innerRadius` and `outerRadius`.
**Note**: `outerRadius` must be greater-than or equal to `innerRadius`.
*/
innerRadius: ScalarSignal

/**
```
(get) innerRadiusValue: number
(set) innerRadiusValue: number
```

Specifies the radius of the inner circle when using the ring emitter for the particle system. The particles spawn between `innerRadius` and `outerRadius`.
**Note**: `outerRadius` must be greater-than or equal to `innerRadius`.
*/
innerRadiusValue: number

/**
```
(get) lifetimeSeconds: ScalarSignal
(set) lifetimeSeconds: ScalarSignal
```

Specifies the mean lifetime of each particle, in seconds.
*/
lifetimeSeconds: ScalarSignal

/**
```
(get) lifetimeSecondsPercentageDelta: ScalarSignal
(set) lifetimeSecondsPercentageDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `lifetimeSeconds` property. The lifetime is randomized uniformly in the range `[lifetimeSeconds * (1 - d); lifetimeSeconds * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
lifetimeSecondsPercentageDelta: ScalarSignal

/**
```
(get) lifetimeSecondsPercentageDeltaValue: number
(set) lifetimeSecondsPercentageDeltaValue: number
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `lifetimeSeconds` property. The lifetime is randomized uniformly in the range `[lifetimeSeconds * (1 - d); lifetimeSeconds * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
lifetimeSecondsPercentageDeltaValue: number

/**
```
(get) lifetimeSecondsValue: number
(set) lifetimeSecondsValue: number
```

Specifies the mean lifetime of each particle, in seconds.
*/
lifetimeSecondsValue: number

/**
```
(get) linearDamping: ScalarSignal
(set) linearDamping: ScalarSignal
```

Specifies the mean linear damping of each particle.
*/
linearDamping: ScalarSignal

/**
```
(get) linearDampingPercentageDelta: ScalarSignal
(set) linearDampingPercentageDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `linearDamping` property. The linear dumping is randomized uniformly in the range `[linearDamping * (1 - d); linearDamping * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
linearDampingPercentageDelta: ScalarSignal

/**
```
(get) linearDampingPercentageDeltaValue: number
(set) linearDampingPercentageDeltaValue: number
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `linearDamping` property. The linear dumping is randomized uniformly in the range `[linearDamping * (1 - d); linearDamping * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
linearDampingPercentageDeltaValue: number

/**
```
(get) linearDampingValue: number
(set) linearDampingValue: number
```

Specifies the mean linear damping of each particle.
*/
linearDampingValue: number

/**
```
(get) (Not Available)
(set) material: MaterialBase | null
```

Specifies the material of the scene object.
*/
material: MaterialBase | null

/**
```
(get) opticalFlowSensitivity: ScalarSignal
(set) opticalFlowSensitivity: ScalarSignal
```

Specifies the optical flow sensitivity.
*/
opticalFlowSensitivity: ScalarSignal

/**
```
(get) opticalFlowSensitivityValue: number
(set) opticalFlowSensitivityValue: number
```

Specifies the optical flow sensitivity.
*/
opticalFlowSensitivityValue: number

/**
```
(get) outerRadius: ScalarSignal
(set) outerRadius: ScalarSignal
```

Specifies the radius of the outer circle when using the ring emitter for the particle system. The particles spawn between `innerRadius` and `outerRadius`.
**Note**: `outerRadius` must be greater-than or equal to `innerRadius`.
*/
outerRadius: ScalarSignal

/**
```
(get) outerRadiusValue: number
(set) outerRadiusValue: number
```

Specifies the radius of the outer circle when using the ring emitter for the particle system. The particles spawn between `innerRadius` and `outerRadius`.
**Note**: `outerRadius` must be greater-than or equal to `innerRadius`.
*/
outerRadiusValue: number

/**
```
(get) particleRotation: PointSignal
(set) particleRotation: PointSignal
```

Specifies the mean rotation of each particle, in radians.
*/
particleRotation: PointSignal

/**
```
(get) particleRotationDelta: PointSignal
(set) particleRotationDelta: PointSignal
```

Specifies the absolute delta value for the `particleRotation` property. The particle rotation is randomized uniformly in the range `[particleRotation - particleRotationDelta; particleRotation + particleRotationDelta]` for each particle.
*/
particleRotationDelta: PointSignal

/**
```
(get) particleRotationDeltaValue: Vec3
(set) particleRotationDeltaValue: Vec3
```

Specifies the absolute delta value for the `particleRotation` property. The particle rotation is randomized uniformly in the range `[particleRotation - particleRotationDelta; particleRotation + particleRotationDelta]` for each particle.
*/
particleRotationDeltaValue: Vec3

/**
```
(get) particleRotationValue: Vec3
(set) particleRotationValue: Vec3
```

Specifies the mean rotation of each particle, in radians.
*/
particleRotationValue: Vec3

/**
```
(get) (Not Available)
(set) position: PointSignal
```

Specifies the mean spawn position of each particle.
*/
position: PointSignal

/**
```
(get) (Not Available)
(set) positionDelta: VectorSignal
```

Specifies the absolute delta value for the `position` property. The position is randomized uniformly in the axis-aligned bounding box with corners `position - d` and `position + d` for each particle.
**Note**: all the coordinates must be non-negative. For negative values, the absolute value is used.
*/
positionDelta: VectorSignal

/**
```
(get) positionDeltaValue: Vec3
(set) positionDeltaValue: Vec3
```

Specifies the absolute delta value for the `position` property. The position is randomized uniformly in the axis-aligned bounding box with corners `position - d` and `position + d` for each particle.
**Note**: all the coordinates must be non-negative. For negative values, the absolute value is used.
*/
positionDeltaValue: Vec3

/**
```
(get) (Not Available)
(set) positionModifier: ArrayOfScalarSamplers
```

Specifies the modifier that will be added to the particle position according to the supplied sampler relative to the current relative lifetime of the particle. In other words, if the lifetime is 4 seconds and the particle has lived for is 3 seconds, the modifier will be sampled at 3/4 = 0.75.
**Note**: the specified array of samplers must contain exactly 3 elements, interpreted as X,Y,Z values.
*/
positionModifier: ArrayOfScalarSamplers

/**
```
(get) positionValue: Vec3
(set) positionValue: Vec3
```

Specifies the mean spawn position of each particle.
*/
positionValue: Vec3

/**
```
(get) rotationalDamping: ScalarSignal
(set) rotationalDamping: ScalarSignal
```

Specifies the mean rotational damping of each particle.
*/
rotationalDamping: ScalarSignal

/**
```
(get) rotationalDampingPercentageDelta: ScalarSignal
(set) rotationalDampingPercentageDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `rotationalDamping` property. The rotational dumping is randomized uniformly in the range `[rotationalDamping * (1 - d); rotationalDamping * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
rotationalDampingPercentageDelta: ScalarSignal

/**
```
(get) rotationalDampingPercentageDeltaValue: number
(set) rotationalDampingPercentageDeltaValue: number
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `rotationalDamping` property. The rotational dumping is randomized uniformly in the range `[rotationalDamping * (1 - d); rotationalDamping * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
rotationalDampingPercentageDeltaValue: number

/**
```
(get) rotationalDampingValue: number
(set) rotationalDampingValue: number
```

Specifies the mean rotational damping of each particle.
*/
rotationalDampingValue: number

/**
```
(get) scale: ScalarSignal
(set) scale: ScalarSignal
```

Specifies the mean size of each particle, in 3d units.
*/
scale: ScalarSignal

/**
```
(get) scaleDelta: ScalarSignal
(set) scaleDelta: ScalarSignal
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `scale` property. The scale is randomized uniformly in the range `[scale * (1 - d); scale * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
scaleDelta: ScalarSignal

/**
```
(get) scaleDeltaValue: number
(set) scaleDeltaValue: number
```

Specifies the percentage delta value, between 0.0 and 1.0, for the `scale` property. The scale is randomized uniformly in the range `[scale * (1 - d); scale * (1 + d)]` for each particle.
**Note**: The behavior is undefined for values outside the valid range.
*/
scaleDeltaValue: number

/**
```
(get) scaleValue: number
(set) scaleValue: number
```

Specifies the mean size of each particle, in 3d units.
*/
scaleValue: number

/**
```
(get) (Not Available)
(set) sizeModifier: ScalarSampler
```

Specifies the modifier that will be added to the particle size according to the supplied sampler relative to the current relative lifetime of the particle. In other words, if the lifetime is 4 seconds and the particle has lived for is 3 seconds, the modifier will be sampled at 3/4 = 0.75.
*/
sizeModifier: ScalarSampler

/**
```
(get) sprayAngle: PointSignal
(set) sprayAngle: PointSignal
```

Specifies the mean spray angle of the emitter, in radians.
*/
sprayAngle: PointSignal

/**
```
(get) sprayAngleDelta: PointSignal
(set) sprayAngleDelta: PointSignal
```

Specifies the absolute delta value for the `sprayAngle` property. The initial velocity angle is randomized uniformly in the range `[sprayAngle - sprayAngleDelta; sprayAngle + sprayAngleDelta]` for each particle.
*/
sprayAngleDelta: PointSignal

/**
```
(get) sprayAngleDeltaValue: Vec3
(set) sprayAngleDeltaValue: Vec3
```

Specifies the absolute delta value for the `sprayAngle` property. The initial velocity angle is randomized uniformly in the range `[sprayAngle - sprayAngleDelta; sprayAngle + sprayAngleDelta]` for each particle.
*/
sprayAngleDeltaValue: Vec3

/**
```
(get) sprayAngleValue: Vec3
(set) sprayAngleValue: Vec3
```

Specifies the mean spray angle of the emitter, in radians.
*/
sprayAngleValue: Vec3

/**
```
(get) (Not Available)
(set) velocityModifier: ArrayOfScalarSamplers
```

Specifies the modifier that will be added to the particle velocity according to the supplied sampler relative to the current relative lifetime of the particle. In other words, if the lifetime is 4 seconds and the particle has lived for is 3 seconds, the modifier will be sampled at 3/4 = 0.75.
**Note**: the specified array of samplers must contain exactly 3 elements, interpreted as X,Y,Z values.
*/
velocityModifier: ArrayOfScalarSamplers

/**
```
(get) worldSpace: BoolSignal
(set) worldSpace: BoolSignal
```

Specifies whether the particles will move with the emitter or will have their own position after being emitted.
*/
worldSpace: BoolSignal

/**
```
(get) worldSpaceValue: boolean
(set) worldSpaceValue: boolean
```

Specifies whether the particles will move with the emitter or will have their own position after being emitted.
*/
worldSpaceValue: boolean

/**
```
getMaterial(): Promise<MaterialBase | null>
```

Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
*/
getMaterial(): Promise<MaterialBase | null>

/**
```
getTypes(): Promise<Array<ParticleTypeDescription>>
```

Retrieves the array of ParticleTypeDescription objects.
*/
getTypes(): Promise<Array<ParticleTypeDescription>>

/**
```
getTypesSync(): Array<ParticleTypeDescription>
```

Retrieves the array of ParticleTypeDescription objects.
*/
getTypesSync(): Array<ParticleTypeDescription>

}



/**

//=========================================================================
// The following example demonstrates how to use the properties of a
// ParticleSystem to change various properties of a particle emitter.
//
// Project setup:
// - Insert a Particle System object with a name emitter0 into your scene
//=========================================================================

// Load in the required modules
const Reactive = require('Reactive');
const Animation = require('Animation');
const Scene = require('Scene');

(async function() { // Enable async/await in JS [part 1]

// Locate the Particle System in the scene
const [emitter] = await Promise.all([
  Scene.root.findFirst('emitter0'),
]);

// Set the lifespan of particles in seconds
emitter.lifetimeSeconds = 5;

// Set the birthrate of particles and add randomness to the birthrate (birthrateDelta)
emitter.birthrate = 200;
emitter.birthrateDelta = 0.5;

// Set the scale of particles and add randomness to the scale (scaleDelta)
emitter.scale = 0.001;
emitter.scaleDelta = 0.5;

// Create a particle size sampler (specifies change in the particle size over its lifespan) and assign it to the size modifier to change the particle size over time
const sizeSampler = Animation.samplers.linear(0.01,0.1);
emitter.sizeModifier = sizeSampler;

// Create a HSVA (Hue, Saturation, Value, Alpha) sampler, the HSVA sampler takes in an array of 4 samplers that correspond to H,S,V and A values
const hueSampler = Animation.samplers.linear(0,1);
const saturationSampler = Animation.samplers.linear(0,1);
const valueSampler = Animation.samplers.linear(0,1);
const alphaSampler = Animation.samplers.linear(1,0);
const HSVASampler = Animation.samplers.HSVA([hueSampler,saturationSampler,valueSampler,alphaSampler]);

// Set base HSVA values against which the modultaion will apply
emitter.colorModulationHSVA = Reactive.HSVA(0,0,0,1);

// Assign the HSVA sampler as HSVA color modulation modifier to change hue, saturation, value (brightness) and alpha (opacity) over the lifespan of a particle
emitter.hsvaColorModulationModifier = HSVASampler;

// Create polybezier samplers for X,Y and Z values with arbitrary values for keyframes
const samplerX = Animation.samplers.polybezier({keyframes:[0,1,0,-1,0],knots:[0,1,2,3,4]})
const samplerY = Animation.samplers.polybezier({keyframes:[1,0,-1,0,1],knots:[0,1,2,3,4]})
const samplerZ = Animation.samplers.polybezier({keyframes:[-0.5,0.5,-0.5,0.5,-0.5],knots:[0,1,2,3,4]})

// Use XYZ samplers to modify position of particles over time
emitter.positionModifier = [samplerX,samplerY,samplerZ];

// Use XYZ samplers to modify velocity of particles over time
emitter.velocityModifier = [samplerX,samplerY,samplerZ];

})(); // Enable async/await in JS [part 2]

*/