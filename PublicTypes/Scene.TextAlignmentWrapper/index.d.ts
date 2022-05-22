/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Scene.TextAlignment/index.d.ts" />
/// <reference path="../Scene.VerticalTextAlignment/index.d.ts" />
declare interface TextAlignmentWrapper {
/**
* ```
(get) horizontal: StringSignal<TextAlignment>
(set) horizontal: StringSignal<TextAlignment>
```

Specifies the horizontal text alignment.
*/
horizontal: StringSignal<TextAlignment>;
/**
* ```
(get) vertical: StringSignal<VerticalTextAlignment>
(set) vertical: StringSignal<VerticalTextAlignment>
```

Specifies the vertical text alignment.
*/
vertical: StringSignal<VerticalTextAlignment>;
}
