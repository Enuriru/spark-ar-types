

/**
[{"kind":"introducedBy","version":4175003719},{"kind":"capability","capability":"hapticFeedback","orCapability":""}]
*/


declare interface HapticFeedback extends Module {

/**
```
cancel(): void
```

Cancel all vibrations.
*/
cancel(): void

/**
```
vibrate(params?: {vibrationPattern: Array<{amplitudeNormalized: number, timeMilliseconds: number}>}): void
```

Vibrate in a given pattern.
`vibrationPattern` - an array of vibration events that constitute a pattern.
 - `timeMilliseconds` - the length of a vibration event, in milliseconds. If any of the values are negative,
                        an exception will be thrown.
 - `amplitudesNormalized` - the amplitude of a vibration event, a normalized value between 0 and 1,
                            where 0 corresponds to no vibration and 1 to the full strength vibration.
                            If any of the values are outside of the [0, 1] interval, an exception will be thrown.

 If `params` is empty, the default 400ms vibration will be performed.

**Note**: calling this function while the vibration from the previous call is still being played will result
in the new vibration overriding the previous one.
*/
vibrate(params?: {vibrationPattern: Array<{amplitudeNormalized: number, timeMilliseconds: number}>}): void

}



/**

TODO @nikitamakarov: fill an example T112997971

*/