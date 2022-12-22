/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/**
The `ParticleTypeDescription` class provides functionality for setting particle sprite densities in the scene.
*/
declare interface ParticleTypeDescription {

/**
```
(get) fraction: ScalarSignal
(set) fraction: ScalarSignal
```

The fraction of particles, that should be of that ParticleTypeDescription.
This is thought to be used for making the sorting better between different particles.
The user can specify the fraction of particles that can use the specific frames of one sprite sheet (which is specified from the UI), which would make sorting of different particles proper.
*/
fraction: ScalarSignal

}
