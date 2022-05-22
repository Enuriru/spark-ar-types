/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
declare interface SceneDepthTexture extends TextureBase {
/**
* ```
(get) trackingQuality: StringSignal<TrackingQuality>
(set) (Not Available)
```

The quality of tracking, as a [`StringSignal`](/classes/ReactiveModule.StringSignal) containing a [`TrackingQuality`](/enums/TexturesModule.TrackingQuality) enum value.
*/
trackingQuality: StringSignal<TrackingQuality>;
}
