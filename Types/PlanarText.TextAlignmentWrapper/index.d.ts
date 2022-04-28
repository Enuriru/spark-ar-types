/// <reference path="../PlanarText.TextAlignment/index.d.ts" />
/// <reference path="../PlanarText.VerticalTextAlignment/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/**
The `TextAlignmentWrapper` class contains text alignment details.
*/
declare interface TextAlignmentWrapper {

/**
```
(get) horizontal: StringSignal<TextAlignment>
(set) horizontal: StringSignal<TextAlignment>
```

Specifies the horizontal text alignment.
*/
horizontal: StringSignal<TextAlignment>

/**
```
(get) vertical: StringSignal<VerticalTextAlignment>
(set) vertical: StringSignal<VerticalTextAlignment>
```

Specifies the vertical text alignment.
*/
vertical: StringSignal<VerticalTextAlignment>

}
