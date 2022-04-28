/// <reference path="../OpenML.MLModel/index.d.ts" />
/// <reference path="../OpenML.MLModels/index.d.ts" />
/// <reference path="../OpenML.SparkVisionDetector/index.d.ts" />


/**
[{"kind":"capability","capability":"genericML","orCapability":""},{"kind":"introducedBy","version":1774572365}]
*/


/**
The `SparkVisionModule` class allows you to create detectors, run models, and access outputs.
*/
declare interface SparkVision extends Module {

/**
```
(get) mlModels: MLModels
(set) (Not Available)
```

gets an entrypoint to access the ML models in the scene
*/
mlModels: MLModels

/**
```
createDetectors(models: Array<MLModel>): Promise<Array<SparkVisionDetector>>
```

creates a list of SparkVision Detector objects.
*/
createDetectors(models: Array<MLModel>): Promise<Array<SparkVisionDetector>>

}



/**

const SV = require('SparkVision');
(async function () {

 const face = FaceTracking.face(0);
 const [model, model1] = await Promise.all(
  [SV.mlModels.findFirst('model0'),
   SV.mlModels.findFirst('model1')]
 );
 const [detector, detector1] = await SV.createDetectors([model, model1]);
})();

*/