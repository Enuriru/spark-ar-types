/// <reference path="../Animation.ScalarSampler/index.d.ts" />

/**
The `ArrayOfScalarSamplers` class describes an array of scalar samplers.
It extends the implementation of `Array<ScalarSampler>` type in JavaScript,
and adds a single additional method to get a sampler at a particular index - `get()`.
*/
declare interface ArrayOfScalarSamplers extends Array<ScalarSampler> {

/**
```
get(index: number): ScalarSampler
```

Returns the sampler indicated by the `index` parameter.
*/
get(index: number): ScalarSampler

}
