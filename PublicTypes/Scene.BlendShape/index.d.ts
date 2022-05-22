/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface BlendShape {
/**
* ```
(get) name: string
(set) (Not Available)
```

Retrieves the name of the BlendShape.
*/
name: string;
/**
* ```
(get) weight: ScalarSignal
(set) weight: ScalarSignal
```

Specifies the weight of the blend shape.
*/
weight: ScalarSignal;
}
