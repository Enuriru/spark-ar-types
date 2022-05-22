/// <reference path="../Segmentation.HairSegmentation/index.d.ts" />
/// <reference path="../Segmentation.PersonSegmentation/index.d.ts" />
/// <reference path="../Segmentation.SkinSegmentation/index.d.ts" />
declare class SegmentationModule {
/**
* ```
(get) hair: HairSegmentation
(set) (Not Available)
```

Specifies an instance of a `HairSegmentation` object.
*/
static readonly hair: HairSegmentation;
/**
* ```
(get) person: PersonSegmentation
(set) (Not Available)
```

Specifies an instance of a `PersonSegmentation` object.
*/
static readonly person: PersonSegmentation;
/**
* ```
(get) skin: SkinSegmentation
(set) (Not Available)
```

Specifies an instance of a `SkinSegmentation` object.
*/
static readonly skin: SkinSegmentation;
}
export = SegmentationModule;
