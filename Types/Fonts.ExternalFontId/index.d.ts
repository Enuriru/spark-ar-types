/// <reference path="../ExternalTexture.State/index.d.ts" />
/// <reference path="../Fonts.FontId/index.d.ts" />
/// <reference path="../Fonts.State/index.d.ts" />
/// <reference path="../GalleryTexture.State/index.d.ts" />
/// <reference path="../LiveStreaming.State/index.d.ts" />
/// <reference path="../PlaneTracking.State/index.d.ts" />
/// <reference path="../PointTracker.State/index.d.ts" />
/// <reference path="../Prefabs.State/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../TouchGestures.State/index.d.ts" />
/// <reference path="../WorldTracking.State/index.d.ts" />


/**
[{"kind":"capability","capability":"externalFonts","orCapability":""}]
*/


/**
The `ExternalFontId` class identifies an external font in an effect.
*/
declare interface ExternalFontId extends FontId {

/**
```
(get) fallbackFont: FontId | null
(set) fallbackFont: FontId | null
```

Sets fallback font to be used.
Returns the currently set fallback font.
The fallback font applies if the external font is still in the process of being downloaded
or if its download failed.

The fallback font must be a local font, ie. it can't be another external font.

The fallback font applies if the external font is still in the process of being downloaded
or if its download failed.
*/
fallbackFont: FontId | null

/**
```
(get) state: StringSignal<State>
(set) (Not Available)
```

Specifies a `StringSignal<ExternalFont.State>` representing the loading state of the external font.
The value of the signal is guaranteed to be a member of the `FontModule.ExternalFont.State` enumeration.
*/
state: StringSignal<State>

/**
```
(get) url: StringSignal
(set) url: StringSignal
```

Specifies the URL of the font to be downloaded.
Specifies the URL of the font to be downloaded.
*/
url: StringSignal

/**
```
preload(): Promise<void>
```

Download and preload the font, so it's available when it's going to be used.
By default, all external fonts are going to start downloading only the moment
they are used as a font for a given text scene object.

By calling this API an external font can be explicitly being queued for download.
Using the state() property one can determine when loading has been finished and
the font is ready to use.
*/
preload(): Promise<void>

}
