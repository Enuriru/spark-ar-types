/// <reference path="../Wolf.SampleWolfScript/index.d.ts" />
/// <reference path="../Wolf.TrackableManagerScript/index.d.ts" />


/**
[{"kind":"capability","capability":"wolf","orCapability":""},{"kind":"availableIn","availableIn":"DocumentType.Any"},{"kind":"introducedBy","version":5336865}]
*/


/**
`WolfModule` encapsulates Wolf related capabilities and trackables.
It will enable the WOLFPrototypeDataProvider, a fast path to expose
and prototype Javascript APIs and Scene visualization to Skylight
for the algorithms hooked into WOLF.
*/
declare interface Wolf extends Module {

/**
```
(get) sample: SampleWolfScript
(set) (Not Available)
```
*/
sample: SampleWolfScript

/**
```
(get) trackables: TrackableManagerScript
(set) (Not Available)
```

`trackables` controls all running trackable objects.
*/
trackables: TrackableManagerScript

}



/**

const Diagnostics = require('Diagnostics');
const Wolf = require('Wolf');

// Trackable Manager
Wolf.trackables.onNewTracking.subscribe(function(tracking) {
  Diagnostics.log(tracking);
});

// Other algorithms
Diagnostics.log(Wolf.sample.test());

*/