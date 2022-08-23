/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />

/**
The `SequenceTexture` class is a collection of still images that form an animation.
*/
declare interface SequenceTexture extends TextureBase {

/**
```
(get) currentFrame: ScalarSignal
(set) currentFrame: ScalarSignal
```

Specifies the current frame in the animated sequence.
*/
currentFrame: ScalarSignal

}
