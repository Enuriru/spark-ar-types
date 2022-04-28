/// <reference path="../Animation.AnimationClip/index.d.ts" />


/**
[{"kind":"introducedBy","version":712283375}]
*/


/**
The `AnimationClips` class allows access to animation clips.
*/
declare interface AnimationClips {

/**
```
findFirst(name: string): Promise<AnimationClip | null>
```

Find first animation clip that matches a given name pattern.
*/
findFirst(name: string): Promise<AnimationClip | null>

/**
```
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AnimationClip>>
```

Find animation clips with names that match a given pattern.
*/
findUsingPattern(namePattern: string, config?: {limit: number}): Promise<Array<AnimationClip>>

/**
```
getAll(): Promise<Array<AnimationClip>>
```

Get all animation clips that are bundled in this effect.
*/
getAll(): Promise<Array<AnimationClip>>

}
