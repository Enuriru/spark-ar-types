

/**
[{"kind":"introducedBy","version":4175003719},{"kind":"capability","capability":"hapticFeedback","orCapability":""}]
*/


declare interface HapticFeedback extends Module {

/**
```
vibrate(): void
```

*/
vibrate(): void

/**
```
vibratePatternFixedAmplitude(timings: Array<number>): void
```

*/
vibratePatternFixedAmplitude(timings: Array<number>): void

/**
```
vibratePatternVaryingAmplitude(timings: Array<number>, amplitudes: Array<number>): void
```

*/
vibratePatternVaryingAmplitude(timings: Array<number>, amplitudes: Array<number>): void

}



/**

TODO @nikitamakarov: fill an example T112997971

*/