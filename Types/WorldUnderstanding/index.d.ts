/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../WorldUnderstanding.AnchorInfoPlane/index.d.ts" />


/**
[{"kind":"introducedBy","version":2365707280},{"kind":"capability","capability":"worldUnderstanding","orCapability":""},{"kind":"availableIn","availableIn":["DocumentType.Effect","DocumentType.SubEffect"]}]
*/


declare interface WorldUnderstanding extends Module {

/**
```
onAnchorAvailable(): EventSource<AnchorInfoPlane>
```

*/
onAnchorAvailable(): EventSource<AnchorInfoPlane>

}
