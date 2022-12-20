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

/**
```
(get) frameRate: ScalarSignal
(set) frameRate: ScalarSignal
```

Specifies the frame rate for the animated sequence.
*/
frameRate: ScalarSignal

/**
```
(get) (Not Available)
(set) frames: Array<TextureBase>
```

Specifies the frames for the animated sequence.
*/
frames: Array<TextureBase>

}
