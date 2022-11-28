/// <reference path="../Reactive.ScalarSignal/index.d.ts" />


/**
[{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


/**
The `AnimationClip` class describes an animation clip asset.
*/
declare interface AnimationClip {

/**
```
(get) duration: ScalarSignal
(set) (Not Available)
```

Get signal that represents overall duration of this clip.
*/
duration: ScalarSignal

/**
```
(get) identifier: string
(set) (Not Available)
```

Unique identifier of this animation clip.
*/
identifier: string

/**
```
(get) name: string
(set) (Not Available)
```

Name of this animation clip.
*/
name: string

}
